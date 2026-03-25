export function renderAdWebinarUSPage() {
  return `
  <main>
    <section class="hero-section">
      <div class="hero-content">
        <span class="eyebrow">🇺🇸 Free Live Webinar</span>
        <h1>Tulum Investment Webinar for U.S. Citizens</h1>
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
          Join our exclusive live webinar to learn how to navigate the legal, tax, and investment landscape of buying real estate in Tulum as a U.S. citizen. Understand Fideicomiso trusts, IRS reporting requirements, and how to structure your investment for optimal tax efficiency.
        </p>

        <div class="pills">
          <span class="pill">🎥 Live webinar session</span>
          <span class="pill">🇺🇸 U.S. tax & legal focus</span>
          <span class="pill">💬 Q&A included</span>
        </div>

        <ul class="learning-points">
          <li>How Fideicomiso bank trusts work for U.S. buyers purchasing coastal property in Mexico</li>
          <li>IRS reporting requirements including FBAR, Form 8938, and worldwide income disclosure</li>
          <li>Mexican STR income taxation and how to claim foreign tax credits on your U.S. return</li>
          <li>Step-by-step buying process from offer to closing with a Notario Público</li>
          <li>Due diligence checklist: title searches, zoning verification, and legal red flags</li>
          <li>Why low-density jungle developments like Selvadentro offer different risk profiles</li>
        </ul>

        <h3 class="section-heading">Who Should Attend</h3>
        <ul class="learning-points">
          <li>U.S. citizens considering property investment in Mexico's Riviera Maya</li>
          <li>Real estate investors looking for international diversification opportunities</li>
          <li>Anyone seeking passive income through Mexican short-term rentals</li>
          <li>Buyers who want to understand the complete tax and legal framework before committing</li>
          <li>Investors interested in sustainable, low-density jungle developments</li>
        </ul>

        <p class="seats-note">
          <strong>Note:</strong> Limited seats available. Register now to secure your spot and get access to the live Q&A session.
        </p>
      </div>

      <div class="signup-card">
        <h2 class="card-title">Register for the Webinar</h2>
        <p class="card-subtitle">
          Enter your details below to reserve your seat for this exclusive webinar for U.S. citizens.
        </p>

        <div id="ghl-guide-form-us">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/5mX37Hg1SRDjks6A681m"
            style="width:100%;height:1242px;border:none;border-radius:3px"
            id="inline-5mX37Hg1SRDjks6A681m"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Webinar – US – Direct Ads"
            data-height="1242"
            data-layout-iframe-id="inline-5mX37Hg1SRDjks6A681m"
            data-form-id="5mX37Hg1SRDjks6A681m"
            title="Webinar – US – Direct Ads"
          >
          </iframe>
        </div>

        <p class="trust-text">
          🔒 Your information is secure and will never be shared with third parties.
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
      <h2>What you'll learn in this webinar</h2>
      <ul class="target-audience">
        <li>Legal frameworks: Understanding Mexican property law, Fideicomiso structures, and the role of the Notario</li>
        <li>Tax strategy: Complete breakdown of U.S. and Mexican tax obligations for rental income and capital gains</li>
        <li>Investment analysis: How to calculate true ROI after all fees, taxes, and management costs</li>
        <li>Market insights: Why location matters and how to avoid oversupplied areas in the Tulum market</li>
      </ul>
    </section>
  </main>
  `
}

export function initAdWebinarUSForm() {
  const script = document.createElement('script')
  script.src = 'https://link.msgsndr.com/js/form_embed.js'
  script.async = true
  document.body.appendChild(script)
}
