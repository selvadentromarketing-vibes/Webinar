export function renderCanadaSelectPage() {
  return `
  <main>
    <section class="content-selection-section">
      <div class="selection-content">
        <span class="eyebrow">🇨🇦 Canada</span>
        <h1>What Would You Like to Access?</h1>
        <p class="subheadline">
          Choose the resource that best fits your needs. Both options provide comprehensive information tailored for Canadian buyers interested in Tulum real estate.
        </p>

        <div class="content-options">
          <div class="content-card">
            <div class="card-icon">📖</div>
            <h3>Tulum Buyer's Guide</h3>
            <p class="card-description">
              Complete digital guide covering legal structures, tax obligations, investment strategies, and everything you need to know before investing in Tulum as a Canadian resident.
            </p>
            <ul class="card-features">
              <li>CRA reporting requirements</li>
              <li>T1135 form guidance</li>
              <li>Foreign tax credits</li>
              <li>Step-by-step buying process</li>
            </ul>
            <button class="select-btn" data-target="guide">Get the Buyer's Guide</button>
          </div>

          <div class="content-card featured">
            <div class="badge">Most Popular</div>
            <div class="card-icon">🎥</div>
            <h3>Live Webinar</h3>
            <p class="card-description">
              Join our 45-60 minute live session with Q&A. Learn about Selvadentro's low-density jungle development, realistic returns, and how to navigate cross-border investing.
            </p>
            <ul class="card-features">
              <li>Live Q&A with experts</li>
              <li>Selvadentro case study</li>
              <li>Real performance numbers</li>
              <li>Replay link included</li>
            </ul>
            <button class="select-btn primary" data-target="webinar">Register for Webinar</button>
          </div>
        </div>

        <button class="back-btn">← Back to Country Selection</button>
      </div>
    </section>
  </main>
  `
}

export function initCanadaSelectPage() {
  const selectButtons = document.querySelectorAll('.select-btn')
  selectButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget.dataset.target
      if (target === 'guide') {
        window.history.pushState({}, '', '/guide/canada')
        window.dispatchEvent(new PopStateEvent('popstate'))
      } else if (target === 'webinar') {
        window.history.pushState({}, '', '/canada')
        window.dispatchEvent(new PopStateEvent('popstate'))
      }
    })
  })

  const backBtn = document.querySelector('.back-btn')
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.history.pushState({}, '', '/')
      window.dispatchEvent(new PopStateEvent('popstate'))
    })
  }
}
