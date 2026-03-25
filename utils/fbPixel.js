export function initFBPixel(pixelId) {
  if (!pixelId || pixelId === 'YOUR_PIXEL_ID') {
    console.warn('Facebook Pixel ID not configured')
    return
  }

  !(function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js'));

  fbq('init', pixelId);
  fbq('track', 'PageView');
}

export function trackEvent(eventName, eventData = {}) {
  if (typeof fbq !== 'undefined') {
    fbq('track', eventName, eventData);
  }
}

export function trackCustomEvent(eventName, eventData = {}) {
  if (typeof fbq !== 'undefined') {
    fbq('trackCustom', eventName, eventData);
  }
}
