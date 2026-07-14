/**
 * Reminder scheduler — runs every 5 minutes on Netlify's cron.
 *
 * Scans stored registrations and, when a registrant crosses each mark
 * relative to their ABSOLUTE session epoch (no timezone math anywhere),
 * fires the matching GHL inbound webhook. Each GHL workflow is dumb:
 * trigger -> send email immediately. All timing lives here.
 *
 *   T-60min  -> HOOK_REMINDER_1H   ("starts in 1 hour")
 *   T+0      -> HOOK_LIVE_NOW      ("we're live")
 *   T+120min -> HOOK_FOLLOWUP_2H   ("book your private session")
 *
 * Records are deleted once every step is handled (or 26h after the
 * session as a backstop). A step more than 6h overdue is skipped, not
 * sent — nobody wants a "starts in 1 hour" email a day late.
 *
 * PASTE THE THREE WEBHOOK URLS BELOW once the GHL workflows exist
 * (env vars of the same name override, if preferred).
 */
import { getStore } from '@netlify/blobs';

const HOOKS = {
  reminder_1h: process.env.HOOK_REMINDER_1H || '', // TODO: paste GHL inbound webhook URL
  live_now:    process.env.HOOK_LIVE_NOW    || '', // TODO: paste GHL inbound webhook URL
  followup_2h: process.env.HOOK_FOLLOWUP_2H || '', // TODO: paste GHL inbound webhook URL
};

const STEPS = [
  { key: 'reminder_1h', offsetMin: -60 },
  { key: 'live_now',    offsetMin: 0 },
  { key: 'followup_2h', offsetMin: 120 },
];

const SKIP_AFTER_MS = 6 * 3600 * 1000;   // step >6h overdue -> skip
const PURGE_AFTER_MS = 26 * 3600 * 1000; // record gone 26h after session

export default async () => {
  const store = getStore('webinar-registrations');
  const now = Date.now();
  let processed = 0, fired = 0;

  const { blobs } = await store.list();
  for (const blob of blobs) {
    const rec = await store.get(blob.key, { type: 'json' });
    if (!rec || !rec.webinar_session_epoch) { await store.delete(blob.key); continue; }
    processed++;
    let dirty = false;

    for (const step of STEPS) {
      if (rec.sent[step.key] || !HOOKS[step.key]) continue;
      const due = rec.webinar_session_epoch + step.offsetMin * 60000;
      if (now < due) continue;

      if (now - due > SKIP_AFTER_MS) {
        rec.sent[step.key] = 'skipped-late';
        dirty = true;
        continue;
      }

      try {
        const r = await fetch(HOOKS[step.key], {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            webinar_step: step.key,
            email: rec.email,
            first_name: rec.first_name,
            last_name: rec.last_name,
            phone: rec.phone,
            watch_url: rec.watch_url,
            webinar_date_formatted: rec.webinar_date_formatted,
            webinar_session_epoch: rec.webinar_session_epoch,
            webinar_session_utc: rec.webinar_session_utc,
            visitor_timezone: rec.visitor_timezone,
          }),
        });
        if (r.ok) {
          rec.sent[step.key] = now;
          dirty = true;
          fired++;
        }
        // non-ok -> retry on the next 5-min tick
      } catch (e) {
        console.error(`hook ${step.key} failed for ${rec.email}`, e);
      }
    }

    const allDone = STEPS.every((s) => rec.sent[s.key]);
    if (allDone || now > rec.webinar_session_epoch + PURGE_AFTER_MS) {
      await store.delete(blob.key);
      continue;
    }
    if (dirty) await store.setJSON(blob.key, rec);
  }

  console.log(`reminders tick: ${processed} records, ${fired} hooks fired`);
  return new Response(`ok: ${processed} records, ${fired} fired`);
};

export const config = { schedule: '*/5 * * * *' };
