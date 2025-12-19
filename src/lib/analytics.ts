// Analytics utility functions for Google Analytics and Google Ads

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Track a conversion event (form submission)
 * This will be sent to both Google Analytics and Google Ads
 */
export function trackConversion(eventName: string = 'form_submission', value?: number, currency: string = 'USD') {
  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('Google Analytics not loaded');
    return;
  }

  // Track in Google Analytics as an event
  window.gtag('event', eventName, {
    event_category: 'engagement',
    event_label: 'Form Submission',
    value: value,
    currency: currency,
  });

  // Track as conversion for Google Ads (if conversion ID is set)
  const conversionId = process.env.NEXT_PUBLIC_GA_ID;
  if (conversionId) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: currency,
    });
  }
}

/**
 * Track page view (usually handled automatically, but can be used for SPA navigation)
 */
export function trackPageView(url: string) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
    page_path: url,
  });
}

/**
 * Track custom events
 */
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

