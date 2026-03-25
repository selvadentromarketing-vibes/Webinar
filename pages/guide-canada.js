export function renderGuideCanadaPage() {
  return `
  <main>
    <section class="hero-section">
      <div class="hero-content">
        <span class="eyebrow">🇨🇦 Free Digital Guide</span>
        <h1>Tulum Buyer's Guide for Canadian Residents</h1>
        <p class="subheadline">
          Your comprehensive resource for navigating the legal, tax, and investment landscape of buying real estate in Tulum as a Canadian resident. Understand Fideicomiso trusts, CRA reporting requirements including T1135, and how to structure your investment for optimal tax efficiency.
        </p>

        <div class="pills">
          <span class="pill">📄 Complete digital guide</span>
          <span class="pill">🇨🇦 CRA tax & legal focus</span>
          <span class="pill">📧 Instant email delivery</span>
        </div>

        <ul class="learning-points">
          <li>How Fideicomiso bank trusts work for Canadian buyers purchasing coastal property in Mexico</li>
          <li>CRA reporting requirements including T1135 specified foreign property and foreign income disclosure</li>
          <li>Mexican STR income taxation and how to claim foreign tax credits on your Canadian return</li>
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
          Enter your details below to receive the complete Tulum Buyer's Guide for Canadian residents directly to your inbox.
        </p>

        <div id="ghl-guide-form-ca">[GoHighLevel form will be embedded here - placeholder for Canada Guide form]</div>

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
        <li>Tax strategy: Complete breakdown of Canadian and Mexican tax obligations for rental income and capital gains</li>
        <li>Investment analysis: How to calculate true ROI after all fees, taxes, FX considerations, and management costs</li>
        <li>Market insights: Why location matters and how to avoid oversupplied areas in the Tulum market</li>
      </ul>
    </section>
  </main>
  `
}

export function initGuideCanadaForm() {
  const formContainer = document.getElementById('ghl-guide-form-ca')
  if (formContainer) {
    formContainer.innerHTML = `
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/KT7toDP6OJlekjb7IxPG"
        style="width:100%;height:624px;border:none;border-radius:3px"
        id="inline-KT7toDP6OJlekjb7IxPG"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Canada Guide Sign Up"
        data-height="624"
        data-layout-iframe-id="inline-KT7toDP6OJlekjb7IxPG"
        data-form-id="KT7toDP6OJlekjb7IxPG"
        title="Canada Guide Sign Up"
      >
      </iframe>
      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
    `
  }
}
