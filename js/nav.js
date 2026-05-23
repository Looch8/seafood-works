(function () {
  'use strict';

  var hamburger = document.getElementById('hamburger');
  var nav       = document.getElementById('site-nav');
  var header    = document.getElementById('site-header');

  /* ---- Mobile nav toggle ---- */
  if (hamburger && nav) {
    var navLinks = nav.querySelectorAll('.nav-link');

    function openNav() {
      nav.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.setAttribute('aria-label', 'Close menu');
      hamburger.classList.add('is-active');
      document.body.classList.add('nav-open');
      var first = nav.querySelector('.nav-link');
      if (first) first.focus();
    }

    function closeNav() {
      nav.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open menu');
      hamburger.classList.remove('is-active');
      document.body.classList.remove('nav-open');
    }

    hamburger.addEventListener('click', function () {
      if (nav.classList.contains('is-open')) {
        closeNav();
        hamburger.focus();
      } else {
        openNav();
      }
    });

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeNav();
        hamburger.focus();
      }
    });

    /* Close on nav link click (same-page navigation) */
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (nav.classList.contains('is-open')) closeNav();
      });
    });
  }

  /* ---- Scroll-aware header: hide on scroll-down, reveal on scroll-up ---- */
  if (header) {
    var lastY   = window.scrollY;
    var ticking = false;

    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y = window.scrollY;

        /* Shadow when scrolled away from top */
        header.classList.toggle('is-scrolled', y > 10);

        if (y < 80) {
          /* Always show near top */
          header.classList.remove('header-hidden');
        } else if (y > lastY && !(nav && nav.classList.contains('is-open'))) {
          /* Scrolling down and nav is closed: hide header */
          header.classList.add('header-hidden');
        } else {
          /* Scrolling up: reveal header */
          header.classList.remove('header-hidden');
        }

        lastY   = y;
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---- Contact form → mailto ---- */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name    = (form.querySelector('[name="name"]')    || {}).value || '';
      var email   = (form.querySelector('[name="email"]')   || {}).value || '';
      var subject = (form.querySelector('[name="subject"]') || {}).value || 'Website Enquiry';
      var message = (form.querySelector('[name="message"]') || {}).value || '';
      var body    = 'Name: '    + name    + '\n'
                  + 'Email: '   + email   + '\n\n'
                  + 'Message:\n' + message;
      /* TODO: Replace with actual email address once confirmed */
      window.location.href =
        'mailto:TODO@seafoodworks.com.au'
        + '?subject=' + encodeURIComponent(subject)
        + '&body='    + encodeURIComponent(body);
    });
  }

}());
