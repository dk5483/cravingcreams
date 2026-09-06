/**
 * Product Page Animations Initialization
 * Handles scroll-triggered animations and stagger effects
 */
(function() {
  'use strict';

  // Module-level observer variable
  let observer = null;

  // IntersectionObserver for scroll-triggered animations
  function initScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all reveal-on-scroll elements
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Observe reveal-stagger containers
    document.querySelectorAll('.reveal-stagger').forEach(el => {
      observer.observe(el);
    });

    // Observe product cards for stagger effect
    document.querySelectorAll('.product-card').forEach((card, index) => {
      card.style.transitionDelay = `${index * 50}ms`;
      observer.observe(card);
    });

    // Observe related product cards
    document.querySelectorAll('.related-product-card').forEach((card, index) => {
      card.style.transitionDelay = `${index * 80}ms`;
      observer.observe(card);
    });

    // Observe filter tabs
    document.querySelectorAll('.filter-tab').forEach((tab, index) => {
      tab.style.transitionDelay = `${index * 50}ms`;
      observer.observe(tab);
    });

    // Observe stats
    document.querySelectorAll('.stats-bar .stat').forEach((stat, index) => {
      stat.style.transitionDelay = `${index * 80}ms`;
      observer.observe(stat);
    });
  }

  // Add parallax effect to product images
  function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-element, .product-image-wrapper img');
    
    if (parallaxElements.length === 0) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.pageYOffset;
          parallaxElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const speed = el.dataset.parallaxSpeed || 0.15;
            const yPos = -(rect.top - window.innerHeight) * speed;
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
              el.style.transform = `translateY(${yPos}px)`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // Add magnetic effect to buttons
  function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.btn-primary-cc, .btn-outline-cc, .site-header__nav-link, .site-header__contact-btn, .view-btn, .filter-tab');
    
    magneticButtons.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
        btn.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
      });
    });
  }

  // Add ripple effect to buttons
  function initRippleEffect() {
    const rippleButtons = document.querySelectorAll('.btn-primary-cc, .btn-outline-cc, .site-header__contact-btn, .view-btn, .filter-tab, .site-header__mobile-contact');
    
    rippleButtons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
          left: ${e.clientX - btn.getBoundingClientRect().left}px;
          top: ${e.clientY - btn.getBoundingClientRect().top}px;
          width: 20px;
          height: 20px;
          margin-left: -10px;
          margin-top: -10px;
        `;
        
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  // Stagger animation for dynamically loaded content
  function staggerChildren(container, selector, baseDelay = 50) {
    const children = container.querySelectorAll(selector);
    children.forEach((child, index) => {
      child.style.transitionDelay = `${index * baseDelay}ms`;
      child.style.opacity = '0';
      child.style.transform = 'translateY(20px)';
      
      // Force reflow
      child.offsetHeight;
      
      child.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
      child.style.opacity = '1';
      child.style.transform = 'translateY(0)';
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollAnimations();
      initParallax();
      initMagneticButtons();
      initRippleEffect();
    });
  } else {
    initScrollAnimations();
    initParallax();
    initMagneticButtons();
    initRippleEffect();
  }

  // Re-initialize after dynamic content loads
  window.reinitProductAnimations = function() {
    setTimeout(() => {
      initScrollAnimations();
      initMagneticButtons();
      initRippleEffect();
    }, 100);
  };

  // Expose for external use
  window.ProductAnimations = {
    staggerChildren,
    initScrollAnimations,
    observeNewElements: function() {
      if (!observer) return;
      // Re-observe reveal-stagger containers
      document.querySelectorAll('.reveal-stagger').forEach(el => {
        observer.observe(el);
      });
      // Observe new related product cards
      document.querySelectorAll('.related-product-card:not([data-observed])').forEach((card, index) => {
        card.dataset.observed = 'true';
        card.style.transitionDelay = `${index * 80}ms`;
        // Ensure initial hidden state for animation
        const container = card.closest('.reveal-stagger');
        if (container && container.classList.contains('is-visible')) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          card.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
          // Force reflow
          card.offsetHeight;
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }
        observer.observe(card);
      });
      // Observe new product cards
      document.querySelectorAll('.product-card:not([data-observed])').forEach((card, index) => {
        card.dataset.observed = 'true';
        card.style.transitionDelay = `${index * 50}ms`;
        const container = card.closest('.reveal-stagger');
        if (container && container.classList.contains('is-visible')) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          card.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
          card.offsetHeight;
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }
        observer.observe(card);
      });
      // Observe new reveal-on-scroll elements
      document.querySelectorAll('.reveal-on-scroll:not([data-observed])').forEach(el => {
        el.dataset.observed = 'true';
        observer.observe(el);
      });
    }
  };
})();

// Add ripple animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .ripple-effect {
    animation: ripple 0.6s ease-out;
  }
`;
document.head.appendChild(style);