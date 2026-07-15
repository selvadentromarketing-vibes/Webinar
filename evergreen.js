/**
 * Selvadentro evergreen webinar — shared session engine.
 * Loaded by index.html (registration), thank-you.html, and watch.html.
 *
 * ONE place to configure the whole system. Times are computed in the
 * VISITOR's local timezone (standard evergreen pattern — a "7:00 PM"
 * session is 7 PM wherever the visitor is).
 */
window.EVERGREEN = (function () {
  'use strict';

  var CONFIG = {
    // ── Video ────────────────────────────────────────────────────
    // PLACEHOLDER — swap for the final recording before launch.
    // Recommended: Bunny Stream mp4/HLS URL (signed, no branding).
    // "Webinar ENG V2" (45m36s) — compressed web encode on GHL Media CDN
    // (Range-capable, verified). The on-screen book-a-call QR runs for the
    // last 10 minutes, so the booking panel reveals in sync with it.
    VIDEO_URL: 'https://assets.cdn.filesafe.space/crN2IhAuOBAl7D8324yI/media/6a56d55360d0bb1c1a330f97.mp4',
    VIDEO_DURATION_SEC: 2736,
    OFFER_AT_SEC: 2136,         // 35:36 — QR appears on screen

    // ── Session schedule (visitor-local times) ───────────────────
    DAILY_HOURS: [11, 19],      // sessions every day at 11:00 and 19:00
    JIT_LEAD_MIN: 10,           // "starts soon" slot is >=10 min away,
    JIT_ROUND_MIN: 15,          //   rounded up to the next 15-min mark

    // ── Endpoints ────────────────────────────────────────────────
    // Registration webhook — GHL inbound webhook (SLVD's own workflow, per
    // "everything SLVD on their infrastructure"). Payload includes
    // webinar_session_iso / webinar_date_formatted / watch_url /
    // visitor_timezone for reminder emails.
    WEBHOOK_URL: 'https://services.leadconnectorhq.com/hooks/crN2IhAuOBAl7D8324yI/webhook-trigger/5be1a789-e3d2-4621-b5b3-c1df0da44469',
    // Watch-room milestone events (empty string = PostHog only).
    MILESTONE_WEBHOOK_URL: '',
    // Booking CTA shown at the offer reveal.
    CALENDAR_URL: 'https://api.leadconnectorhq.com/widget/booking/jL5tqW1PsFp98HZOafHO',

    WATCH_PATH: '/watch.html',
    THANK_YOU_PATH: '/thank-you.html',
    STORAGE_KEY: 'slvd_webinar',
  };

  // ?debug_now=<ISO or epoch-ms> lets us test every state without waiting.
  function now() {
    var p = new URLSearchParams(location.search).get('debug_now');
    if (p) {
      var t = /^\d+$/.test(p) ? parseInt(p, 10) : Date.parse(p);
      if (!isNaN(t)) return new Date(t);
    }
    return new Date();
  }

  function jitSlot(from) {
    var t = new Date(from.getTime() + CONFIG.JIT_LEAD_MIN * 60000);
    var step = CONFIG.JIT_ROUND_MIN * 60000;
    return new Date(Math.ceil(t.getTime() / step) * step);
  }

  // Next daily slots strictly after `after`, up to `count`.
  function dailySlots(after, count) {
    var out = [];
    var day = new Date(after);
    day.setHours(0, 0, 0, 0);
    for (var d = 0; out.length < count && d < 8; d++) {
      for (var h = 0; h < CONFIG.DAILY_HOURS.length; h++) {
        var s = new Date(day);
        s.setDate(s.getDate() + d);
        s.setHours(CONFIG.DAILY_HOURS[h], 0, 0, 0);
        if (s > after && out.length < count) out.push(s);
      }
    }
    return out;
  }

  // The 3 choices shown on the registration page. The JIT slot may
  // coincide with a daily slot — dedupe keeps 3 distinct times.
  function upcomingSessions() {
    var n = now();
    var jit = jitSlot(n);
    var daily = dailySlots(jit, 3);
    var all = [jit].concat(daily).filter(function (s, i, arr) {
      return arr.findIndex(function (x) { return x.getTime() === s.getTime(); }) === i;
    });
    return all.slice(0, 3);
  }

  function fmtTime(d) {
    var h = d.getHours(), m = d.getMinutes();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return h + (m ? ':' + String(m).padStart(2, '0') : ':00') + ' ' + ampm;
  }

  function fmtLabel(d) {
    var n = now();
    var mins = Math.round((d - n) / 60000);
    if (mins <= 45) return 'Starts in ' + mins + ' minutes — ' + fmtTime(d);
    var today = new Date(n); today.setHours(0, 0, 0, 0);
    var that = new Date(d); that.setHours(0, 0, 0, 0);
    var days = Math.round((that - today) / 86400000);
    var dayWord = days === 0 ? 'Today' : days === 1 ? 'Tomorrow'
      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][d.getDay()];
    return dayWord + ' at ' + fmtTime(d);
  }

  function fmtFull(d) {
    var months = ['January','February','March','April','May','June',
      'July','August','September','October','November','December'];
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() +
      ' at ' + fmtTime(d) + ' (your local time)';
  }

  function isoLocal(d) {
    function p(x) { return String(x).padStart(2, '0'); }
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) +
      'T' + p(d.getHours()) + ':' + p(d.getMinutes()) + ':00';
  }

  function watchUrl(epoch) {
    return location.origin + CONFIG.WATCH_PATH + '?s=' + epoch;
  }

  function saveRegistration(data) {
    try { localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
  }
  function loadRegistration() {
    try { return JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEY) || 'null'); }
    catch (e) { return null; }
  }

  // Session for thank-you/watch pages: URL param wins, localStorage falls back.
  function currentSession() {
    var p = new URLSearchParams(location.search).get('s');
    var epoch = p ? parseInt(p, 10) : (loadRegistration() || {}).epoch;
    if (!epoch || isNaN(epoch)) return null;
    var d = new Date(epoch);
    return isNaN(d.getTime()) ? null : d;
  }

  // .ics calendar file (UTC times), downloaded client-side.
  function downloadIcs(sessionDate) {
    function u(d) {
      return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    }
    var end = new Date(sessionDate.getTime() + CONFIG.VIDEO_DURATION_SEC * 1000);
    var ics = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Selvadentro//Webinar//EN',
      'BEGIN:VEVENT',
      'UID:slvd-webinar-' + sessionDate.getTime() + '@selvadentrotulum.com',
      'DTSTAMP:' + u(new Date()),
      'DTSTART:' + u(sessionDate),
      'DTEND:' + u(end),
      'SUMMARY:Selvadentro Tulum — Investor Masterclass',
      'DESCRIPTION:Your session link: ' + watchUrl(sessionDate.getTime()),
      'URL:' + watchUrl(sessionDate.getTime()),
      'BEGIN:VALARM', 'TRIGGER:-PT15M', 'ACTION:DISPLAY',
      'DESCRIPTION:Selvadentro masterclass starts in 15 minutes', 'END:VALARM',
      'END:VEVENT', 'END:VCALENDAR',
    ].join('\r\n');
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
    a.download = 'selvadentro-webinar.ics';
    document.body.appendChild(a); a.click(); a.remove();
  }

  function trackMilestone(event, session, extra) {
    var reg = loadRegistration() || {};
    var valid = session && !isNaN(session.getTime());
    var payload = Object.assign({
      webinar_event: event,
      email: reg.email || '',
      first_name: reg.first_name || '',
      webinar_session_epoch: valid ? session.getTime() : null,
      webinar_session_iso: valid ? isoLocal(session) : null,
      webinar_session_utc: valid ? session.toISOString() : null,
    }, extra || {});
    if (window.posthog && posthog.capture) posthog.capture('webinar_' + event, payload);
    if (CONFIG.MILESTONE_WEBHOOK_URL) {
      try {
        navigator.sendBeacon(
          CONFIG.MILESTONE_WEBHOOK_URL,
          new Blob([JSON.stringify(payload)], { type: 'application/json' })
        );
      } catch (e) {}
    }
  }

  return {
    CONFIG: CONFIG,
    now: now,
    upcomingSessions: upcomingSessions,
    fmtLabel: fmtLabel,
    fmtFull: fmtFull,
    fmtTime: fmtTime,
    isoLocal: isoLocal,
    watchUrl: watchUrl,
    saveRegistration: saveRegistration,
    loadRegistration: loadRegistration,
    currentSession: currentSession,
    downloadIcs: downloadIcs,
    trackMilestone: trackMilestone,
  };
})();
