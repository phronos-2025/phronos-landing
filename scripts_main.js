/**
 * P.H.R.O.N.O.S. Landing Page - Main Scripts
 */

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add scroll indicator
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.phronos-nav');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 2px 8px rgba(26, 26, 26, 0.1)';
  } else {
    nav.style. boxShadow = 'none';
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold:  0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry. isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections for fade-in effect
document.querySelectorAll('. phronos-section, .phronos-card, .phronos-concept').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
  observer.observe(element);
});

// Analytics setup (optional)
console.log('P.H.R.O.N.O.S. Landing Page loaded successfully');