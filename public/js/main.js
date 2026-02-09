// ============================================
// MAIN.JS - Vanilla JS for draandreaesparza.com
// ============================================

// Analytics tracking
function track(eventName, properties) {
  if (window.dataLayer) {
    window.dataLayer.push({ event: eventName, ...properties });
  }
}

// ============================================
// Mobile Menu
// ============================================
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.mobile-menu-toggle');
  var menu = document.querySelector('.nav-menu');
  var overlay = document.querySelector('.mobile-overlay');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var hamburger = toggle.querySelector('.hamburger');
      var isOpen = menu.classList.contains('mobile-open');

      if (isOpen) {
        menu.classList.remove('mobile-open');
        hamburger.classList.remove('open');
        if (overlay) overlay.style.display = 'none';
      } else {
        menu.classList.add('mobile-open');
        hamburger.classList.add('open');
        if (overlay) overlay.style.display = 'block';
      }
    });

    // Close menu on overlay click
    if (overlay) {
      overlay.addEventListener('click', function () {
        menu.classList.remove('mobile-open');
        toggle.querySelector('.hamburger').classList.remove('open');
        overlay.style.display = 'none';
      });
    }

    // Close menu on nav link click
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('mobile-open');
        toggle.querySelector('.hamburger').classList.remove('open');
        if (overlay) overlay.style.display = 'none';
      });
    });
  }

  // ============================================
  // Smooth Scroll for anchor links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').substring(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ============================================
  // Active Section Tracking (homepage only)
  // ============================================
  var sections = ['home', 'about', 'specialties', 'testimonials', 'publications', 'faq', 'contact'];
  var navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

  if (navLinks.length > 0 && document.getElementById('home')) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  // ============================================
  // Specialty Cards Expand/Collapse
  // ============================================
  document.querySelectorAll('.expand-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.specialty-card');
      var expanded = card.querySelector('.card-expanded');
      if (expanded) {
        if (expanded.style.display === 'none') {
          expanded.style.display = 'block';
          btn.textContent = '\u2212';
        } else {
          expanded.style.display = 'none';
          btn.textContent = '+';
        }
      }
    });
  });

  // ============================================
  // WhatsApp Click Tracking
  // ============================================
  document.querySelectorAll('.whatsapp-float').forEach(function (el) {
    el.addEventListener('click', function () {
      track('whatsapp_click', { source: 'floating_button' });
    });
  });

  document.querySelectorAll('[data-track-whatsapp]').forEach(function (el) {
    el.addEventListener('click', function () {
      track('whatsapp_click', { source: el.getAttribute('data-track-whatsapp') });
    });
  });

  // Publication click tracking
  document.querySelectorAll('[data-track-publication]').forEach(function (el) {
    el.addEventListener('click', function () {
      track('publication_click', { source: el.getAttribute('data-track-publication') });
    });
  });

  // CTA click tracking
  document.querySelectorAll('[data-track-cta]').forEach(function (el) {
    el.addEventListener('click', function () {
      track('cta_click', { source: el.getAttribute('data-track-cta') });
    });
  });

  // ============================================
  // Hash scroll on page load
  // ============================================
  if (window.location.hash) {
    var id = window.location.hash.substring(1);
    var target = document.getElementById(id);
    if (target) {
      setTimeout(function () {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
});
