import './style.css'
import { renderUSPage, initUSForm } from './pages/us.js'
import { renderCanadaPage, initCanadaForm } from './pages/canada.js'
import { renderStartPage, initStartPage } from './pages/start.js'
import { renderUSSelectPage, initUSSelectPage } from './pages/us-select.js'
import { renderCanadaSelectPage, initCanadaSelectPage } from './pages/canada-select.js'
import { renderGuideUSPage, initGuideUSForm } from './pages/guide-us.js'
import { renderGuideCanadaPage, initGuideCanadaForm } from './pages/guide-canada.js'
import { renderAdWebinarUSPage, initAdWebinarUSForm } from './pages/ad-webinar-us.js'
import { renderAdWebinarCanadaPage, initAdWebinarCanadaForm } from './pages/ad-webinar-canada.js'

function getPath() {
  return window.location.pathname
}

function router() {
  const path = getPath()
  const app = document.querySelector('#app')

  if (path === '/') {
    app.innerHTML = renderStartPage()
    initStartPage()
  } else if (path === '/us/select') {
    app.innerHTML = renderUSSelectPage()
    initUSSelectPage()
  } else if (path === '/canada/select') {
    app.innerHTML = renderCanadaSelectPage()
    initCanadaSelectPage()
  } else if (path === '/guide/us') {
    app.innerHTML = renderGuideUSPage()
    initGuideUSForm()
  } else if (path === '/guide/canada') {
    app.innerHTML = renderGuideCanadaPage()
    initGuideCanadaForm()
  } else if (path === '/canada') {
    app.innerHTML = renderCanadaPage()
    initCanadaForm()
    initCountdown('2026-03-12T20:00:00-05:00')
  } else if (path === '/us') {
    app.innerHTML = renderUSPage()
    initUSForm()
    initCountdown('2026-03-11T20:00:00-05:00')
  } else if (path === '/ad/webinar/us') {
    app.innerHTML = renderAdWebinarUSPage()
    initAdWebinarUSForm()
    initCountdown('2026-03-11T20:00:00-05:00')
  } else if (path === '/ad/webinar/canada') {
    app.innerHTML = renderAdWebinarCanadaPage()
    initAdWebinarCanadaForm()
    initCountdown('2026-03-12T20:00:00-05:00')
  } else {
    app.innerHTML = renderStartPage()
    initStartPage()
  }
}

function updateCountdown(eventDate) {
  const nextEventDate = new Date(eventDate)
  const now = new Date()
  const diff = nextEventDate - now

  if (diff <= 0) {
    document.getElementById('days').textContent = '00'
    document.getElementById('hours').textContent = '00'
    document.getElementById('minutes').textContent = '00'
    document.getElementById('seconds').textContent = '00'
    return
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  document.getElementById('days').textContent = String(days).padStart(2, '0')
  document.getElementById('hours').textContent = String(hours).padStart(2, '0')
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0')
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0')
}

function initCountdown(eventDate) {
  updateCountdown(eventDate)
  setInterval(() => updateCountdown(eventDate), 1000)
}

window.addEventListener('popstate', router)
router()
