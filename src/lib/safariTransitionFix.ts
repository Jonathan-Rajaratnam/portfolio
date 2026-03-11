/**
 * Safari-specific fix for CSS transitions
 * This creates a style element that adds Safari-specific transition rules
 */
export function applySafariTransitionFix() {
  // Check if browser is Safari
  const isSafari =
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
    (navigator.userAgent.includes('AppleWebKit') && !navigator.userAgent.includes('Chrome'));

  if (isSafari) {
    // Create a style element for Safari-specific fixes
    const style = document.createElement('style');
    style.textContent = `
      /* Safari-specific transition overrides */
      * {
        -webkit-transition-duration: 0.1s, 0.3s, 0.3s, 0.3s, 0.1s, 0.1s !important;
        -webkit-transition-timing-function: ease !important;
      }
    `;
    document.head.appendChild(style);
  }
}
