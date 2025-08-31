export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function smoothScrollTo(elementId: string) {
  const targetId = elementId.replace('#', '');
  const element = document.getElementById(targetId);
  
  if (element) {
    const navHeight = 100; // Increased navigation height for better offset
    const elementPosition = element.offsetTop - navHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  } else {
    // Fallback: try to find element after a short delay
    setTimeout(() => {
      const delayedElement = document.getElementById(targetId);
      if (delayedElement) {
        const navHeight = 100;
        const elementPosition = delayedElement.offsetTop - navHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Element with id "${targetId}" not found`);
      }
    }, 100);
  }
}
