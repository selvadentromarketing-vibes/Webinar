export function renderCanadaPage() {
  return `
  <main>
    <section class="hero-section">
      <div class="hero-content">
        <span class="eyebrow">Free Live Webinar</span>
        <h1>Tulum Investor Webinar 2026 – Canadian Edition</h1>
        <p style="text-align: center; font-size: 1.25rem; font-weight: 600; color: white; margin: 1rem 0;">March 12 at 8pm EST</p>
        <div class="countdown-timer">
          <div class="countdown-label">Next session starts in:</div>
          <div class="countdown-display">
            <div class="time-unit">
              <span class="time-value" id="days">00</span>
              <span class="time-label">Days</span>
            </div>
            <div class="time-unit">
              <span class="time-value" id="hours">00</span>
              <span class="time-label">Hours</span>
            </div>
            <div class="time-unit">
              <span class="time-value" id="minutes">00</span>
              <span class="time-label">Minutes</span>
            </div>
            <div class="time-unit">
              <span class="time-value" id="seconds">00</span>
              <span class="time-label">Seconds</span>
            </div>
          </div>
        </div>
        <p class="subheadline">
          Join us for a comprehensive live session designed exclusively for Canadian residents. Learn how to safely invest in Tulum, navigate Mexican STR regulations and tax obligations, understand CRA reporting requirements and foreign tax credits, and discover why low-density jungle communities like Selvadentro offer a different investment profile than oversupplied condo zones.
        </p>

        <div class="pills">
          <span class="pill">📆 Live session · 45–60 minutes</span>
          <span class="pill">🇨🇦 Designed for Canadian buyers</span>
          <span class="pill">🏞️ Selvadentro jungle case study</span>
        </div>

        <ul class="learning-points">
          <li>The legal roadmap for Canadians buying near the coast: understanding Fideicomiso trusts, working with a Notario, and navigating AML compliance requirements</li>
          <li>How Mexican STR income interacts with CRA rules, foreign tax credits, and specified foreign property reporting (T1135)</li>
          <li>Realistic STR performance numbers after factoring in management fees, maintenance costs, Mexican tax, and FX considerations</li>
          <li>Why low-density jungle land with natural cenotes can offer better long-term value compared to crowded condo projects in oversaturated zones</li>
        </ul>

        <p class="seats-note">
          <strong>Note:</strong> Seats are limited so we can answer your questions live during the session. A replay link will be automatically sent to all registered attendees.
        </p>
      </div>

      <div class="signup-card">
        <h2 class="card-title">Save Your Seat – Canadian Edition</h2>
        <p class="card-subtitle">
          We already have your details from the Tulum Buyer's Guide. Just confirm your email and pick a session.
        </p>

        <div id="ghl-webinar-form-ca">[GoHighLevel Canadian webinar form will be embedded here]</div>

        <p class="trust-text">
          🔒 We'll match your email to your existing profile so you don't have to fill everything twice.
        </p>
      </div>
    </section>

    <section class="property-gallery">
      <div class="gallery-grid">
        <img src="/17.jpg" alt="Selvadentro jungle meditation and wellness area" class="gallery-image" />
        <img src="/15.jpg" alt="Natural cenote spa experience at Selvadentro" class="gallery-image" />
        <img src="/7.jpg" alt="Selvadentro jungle retreat architecture" class="gallery-image" />
      </div>
    </section>

    <section class="below-fold">
      <h2>Who this Canadian webinar is for</h2>
      <ul class="target-audience">
        <li>Canadians who want a clear cross-border plan before wiring money to Mexico, including understanding Fideicomiso structures and legal requirements</li>
        <li>Buyers concerned about CRA rules, T1135 reporting, foreign income taxation, and the risk of investing in condo oversupply in Tulum</li>
        <li>People who want a warm-weather base plus a low-density jungle investment with natural cenote access</li>
        <li>Investors seeking to understand the complete picture of Mexican taxes, CRA reporting obligations, FX considerations, and realistic net returns on short-term rentals</li>
      </ul>
    </section>
  </main>
  `
}

export function initCanadaForm() {
  const formContainer = document.getElementById('ghl-webinar-form-ca')
  if (formContainer) {
    formContainer.innerHTML = `
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/nva8GsP5nCDyxG11q0hu"
        style="width:100%;height:685px;border:none;border-radius:3px"
        id="inline-nva8GsP5nCDyxG11q0hu"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Canada Webinar Registration"
        data-height="685"
        data-layout-iframe-id="inline-nva8GsP5nCDyxG11q0hu"
        data-form-id="nva8GsP5nCDyxG11q0hu"
        title="Canada Webinar Registration"
      >
      </iframe>
    `
  }
}
