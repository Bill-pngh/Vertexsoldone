// Button tap animation
export function setupButtonEffects() {
  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', (e) => {
      e.currentTarget.classList.add('button-tap');
      setTimeout(() => {
        e.currentTarget.classList.remove('button-tap');
      }, 200);
    });
  });
}

// Pop-up entrance animation
export function animatePopup(element) {
  if (!element) return;
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  
  requestAnimationFrame(() => {
    element.style.transition = 'opacity 0.3s, transform 0.3s';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  });
}
