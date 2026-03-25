export function renderGuideUSPage() {
  return `
  <main>
    <section class="hero-section">
      <div class="hero-content">
        <span class="eyebrow">🇺🇸 Free Digital Guide</span>
        <h1>Tulum Buyer's Guide for U.S. Citizens</h1>
        <p class="subheadline">
          Your comprehensive resource for navigating the legal, tax, and investment landscape of buying real estate in Tulum as a U.S. citizen. Understand Fideicomiso trusts, IRS reporting requirements, and how to structure your investment for optimal tax efficiency.
        </p>

        <div class="pills">
          <span class="pill">📄 Complete digital guide</span>
          <span class="pill">🇺🇸 U.S. tax & legal focus</span>
          <span class="pill">📧 Instant email delivery</span>
        </div>

        <ul class="learning-points">
          <li>How Fideicomiso bank trusts work for U.S. buyers purchasing coastal property in Mexico</li>
          <li>IRS reporting requirements including FBAR, Form 8938, and worldwide income disclosure</li>
          <li>Mexican STR income taxation and how to claim foreign tax credits on your U.S. return</li>
          <li>Step-by-step buying process from offer to closing with a Notario Público</li>
          <li>Due diligence checklist: title searches, zoning verification, and legal red flags</li>
          <li>Why low-density jungle developments like Selvadentro offer different risk profiles</li>
        </ul>

        <p class="seats-note">
          <strong>Note:</strong> This guide is updated regularly to reflect current regulations and best practices. You'll receive the latest version immediately after signing up.
        </p>
      </div>

      <div class="signup-card">
        <h2 class="card-title">Get Your Free Guide</h2>
        <p class="card-subtitle">
          Enter your details below to receive the complete Tulum Buyer's Guide for U.S. citizens directly to your inbox.
        </p>

        <div id="ghl-guide-form-us">[GoHighLevel form will be embedded here - placeholder for US Guide form]</div>

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
      <h2>What's included in the guide</h2>
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

export function initGuideUSForm() {
  const formContainer = document.getElementById('ghl-guide-form-us')
  if (formContainer) {
    formContainer.innerHTML = `
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/Wwnw6roGLnUhsE2ICWjx"
        style="width:100%;height:624px;border:none;border-radius:3px"
        id="inline-Wwnw6roGLnUhsE2ICWjx"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="USA Guide Sign Up"
        data-height="624"
        data-layout-iframe-id="inline-Wwnw6roGLnUhsE2ICWjx"
        data-form-id="Wwnw6roGLnUhsE2ICWjx"
        title="USA Guide Sign Up"
      >
      </iframe>
      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
    `
  }
}
