export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function smoothScrollTo(elementId: string) {
  if (!elementId) return;

  // Extract id even if full url or contains query params: '/path/#section?x=1' -> 'section'
  let targetId = elementId;
  if (elementId.includes('#')) {
    targetId = elementId.substring(elementId.indexOf('#') + 1);
  }
  // strip query params or additional slashes
  targetId = (targetId.split('?')[0] || '').split('/').filter(Boolean).pop() || targetId.replace('#', '');

  const scrollToElement = (el: HTMLElement) => {
    const navEl = document.querySelector('nav');
    const navHeight = navEl ? Math.ceil(navEl.getBoundingClientRect().height) : 100;

    // Prefer scrolling the inner main container if present (the layout uses .main-container)
    const container = document.querySelector<HTMLElement>('.main-container');
    if (container) {
      // compute element top relative to container's scrollTop
      const containerRect = container.getBoundingClientRect();
      const elementRect = el.getBoundingClientRect();
      const offsetWithinContainer = elementRect.top - containerRect.top + container.scrollTop;
      const top = Math.max(0, offsetWithinContainer - navHeight - 8);
      container.scrollTo({ top, behavior: 'smooth' });
      return;
    }

    const top = Math.max(0, el.getBoundingClientRect().top + window.pageYOffset - navHeight - 8); // small padding
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const element = document.getElementById(targetId);
  if (element) {
    scrollToElement(element);
    return;
  }

  // Fallback: try again shortly (useful for client-side hydrated content)
  setTimeout(() => {
    const delayedElement = document.getElementById(targetId);
    if (delayedElement) {
      scrollToElement(delayedElement);
    } else {
      console.warn(`Element with id "${targetId}" not found`);
    }
  }, 150);
}
