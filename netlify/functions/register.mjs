/**
 * Registration endpoint — the form posts here (same origin).
 *
 * 1. Forwards the full payload to the GHL registration webhook (contact
 *    creation + instant confirmation email — no waits in that workflow).
 * 2. Stores the registration in Netlify Blobs so send-reminders.mjs can
 *    fire the T-1h / T0 / T+2h webhooks at exact absolute times.
 *
 * The frontend falls back to posting straight to GHL if this endpoint
 * errors, so a function outage can never lose a lead (it only costs the
 * scheduled reminders for that one registrant).
 */
import { getStore } from '@netlify/blobs';

const GHL_REGISTRATION_WEBHOOK =
  'https://services.leadconnectorhq.com/hooks/crN2IhAuOBAl7D8324yI/webhook-trigger/5be1a789-e3d2-4621-b5b3-c1df0da44469';

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  let data;
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false, error: 'invalid json' }, { status: 400 });
  }
  if (!data.email || !data.webinar_session_epoch) {
    return Response.json({ ok: false, error: 'missing email or session' }, { status: 422 });
  }

  // 1 — GHL first: the lead must exist even if storage hiccups.
  let ghlOk = false;
  try {
    const r = await fetch(GHL_REGISTRATION_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    ghlOk = r.ok;
  } catch {
    ghlOk = false;
  }

  // 2 — persist for the reminder scheduler.
  try {
    const store = getStore('webinar-registrations');
    const key = `${data.webinar_session_epoch}:${String(data.email).toLowerCase()}`;
    await store.setJSON(key, {
      email: data.email,
      first_name: data.first_name || '',
      last_name: data.last_name || '',
      phone: data.phone || '',
      watch_url: data.watch_url || '',
      webinar_session_epoch: Number(data.webinar_session_epoch),
      webinar_session_utc: data.webinar_session_utc || null,
      webinar_date_formatted: data.webinar_date_formatted || '',
      visitor_timezone: data.visitor_timezone || '',
      sent: {},
      created_at: Date.now(),
    });
  } catch (e) {
    // Lead already reached GHL; log and carry on.
    console.error('blob store failed', e);
    return Response.json({ ok: ghlOk, scheduled: false }, { status: ghlOk ? 200 : 502 });
  }

  // Non-200 when GHL forwarding failed -> the browser falls back to
  // posting GHL directly, so the lead still lands.
  return Response.json({ ok: ghlOk, scheduled: true }, { status: ghlOk ? 200 : 502 });
};
