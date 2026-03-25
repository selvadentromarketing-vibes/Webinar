export function renderStartPage() {
  return `
  <main>
    <section class="country-selection-section">
      <div class="country-content">
        <span class="eyebrow">Welcome</span>
        <h1>Choose Your Region</h1>
        <p class="subheadline">
          Select your country to access region-specific information about investing in Tulum, including tailored tax guidance, legal requirements, and exclusive resources.
        </p>

        <div class="country-buttons">
          <button class="country-btn" data-country="us">
            <div class="country-icon">🇺🇸</div>
            <div class="country-name">United States</div>
            <div class="country-desc">IRS reporting, Fideicomiso trusts, U.S. tax implications</div>
          </button>

          <button class="country-btn" data-country="canada">
            <div class="country-icon">🇨🇦</div>
            <div class="country-name">Canada</div>
            <div class="country-desc">CRA reporting, T1135 forms, Canadian tax considerations</div>
          </button>
        </div>

        <p class="info-text">
          Both regions offer comprehensive guidance on legal, tax, and investment considerations for Tulum real estate.
        </p>
      </div>
    </section>
  </main>
  `
}

export function initStartPage() {
  const buttons = document.querySelectorAll('.country-btn')
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const country = e.currentTarget.dataset.country
      window.history.pushState({}, '', `/${country}/select`)
      window.dispatchEvent(new PopStateEvent('popstate'))
    })
  })
}
