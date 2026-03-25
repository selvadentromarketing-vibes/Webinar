export function renderUSPage() {
  return `
  <main>
    <section class="hero-section">
      <div class="hero-content">
        <span class="eyebrow">Free Live Webinar</span>
        <h1>Tulum Investor Webinar 2026 – U.S. Edition</h1>
        <p style="text-align: center; font-size: 1.25rem; font-weight: 600; color: white; margin: 1rem 0;">March 11 at 8pm EST</p>
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
          Join us for a comprehensive live session designed exclusively for U.S. citizens and residents. Learn how to safely invest in Tulum, navigate Mexican STR regulations and tax obligations, understand IRS reporting requirements, and discover why low-density jungle communities like Selvadentro offer a different investment profile than oversupplied condo zones.
        </p>

        <div class="pills">
          <span class="pill">📆 Live session · 45–60 minutes</span>
          <span class="pill">🇺🇸 Designed for U.S. buyers</span>
          <span class="pill">🏞️ Selvadentro jungle case study</span>
        </div>

        <ul class="learning-points">
          <li>The legal roadmap for Americans buying near the coast: understanding Fideicomiso trusts, working with a Notario, and navigating AML compliance requirements</li>
          <li>How short-term rental income from Mexico is taxed locally and reported to the IRS, including worldwide income rules and foreign tax credit strategies</li>
          <li>Realistic STR performance numbers after factoring in management fees, maintenance costs, and both Mexican and U.S. tax obligations</li>
          <li>Why low-density jungle land with natural cenotes can offer better long-term value compared to crowded condo projects in oversaturated zones</li>
        </ul>

        <p class="seats-note">
          <strong>Note:</strong> Seats are limited so we can answer your questions live during the session. A replay link will be automatically sent to all registered attendees.
        </p>
      </div>

      <div class="signup-card">
        <h2 class="card-title">Save Your Seat – U.S. Edition</h2>
        <p class="card-subtitle">
          We already have your details from the Tulum Buyer's Guide. Just confirm your email and pick a session.
        </p>

        <div id="ghl-webinar-form-us"></div>

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
      <h2>Who this U.S. webinar is for</h2>
      <ul class="target-audience">
        <li>Americans who want a clear legal and tax plan before wiring money to Mexico, including understanding Fideicomiso structures and cross-border compliance</li>
        <li>U.S. buyers worried about STR regulations, AML requirements, and the risk of investing in oversupplied condo zones in Tulum</li>
        <li>People who like the idea of owning a low-density jungle property with cenote access as a long-term investment and lifestyle play</li>
        <li>Investors seeking to understand the complete picture of Mexican taxes, U.S. IRS reporting obligations, and realistic net returns on short-term rentals</li>
      </ul>
    </section>
  </main>
  `
}

export function initUSForm() {
  const formContainer = document.getElementById('ghl-webinar-form-us')
  if (formContainer) {
    formContainer.innerHTML = `
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/YvvsH97UKEbV8yfapIOZ"
        style="width:100%;height:624px;border:none;border-radius:3px"
        id="inline-YvvsH97UKEbV8yfapIOZ"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="USA Webinar Registration"
        data-height="624"
        data-layout-iframe-id="inline-YvvsH97UKEbV8yfapIOZ"
        data-form-id="YvvsH97UKEbV8yfapIOZ"
        title="USA Webinar Registration"
      >
      </iframe>
    `
  }
}
