// ===== MOBILE MENU =====
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }

  // ===== CONTACT FORM =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const phone = formData.get('phone');
      const email = formData.get('email');
      const message = formData.get('message');

      // Build mailto link
      const subject = encodeURIComponent(`Henvendelse fra ${name} - LogCap Oslo`);
      const body = encodeURIComponent(
        `Navn: ${name}\nTelefon: ${phone}\nE-post: ${email}\n\nMelding:\n${message}`
      );

      window.location.href = `mailto:co@oroeiendom.no?subject=${subject}&body=${body}`;

      // Show success message
      contactForm.style.display = 'none';
      document.querySelector('.form-success').classList.add('show');

      // Reset after 5 seconds
      setTimeout(() => {
        contactForm.style.display = 'block';
        contactForm.reset();
        document.querySelector('.form-success').classList.remove('show');
      }, 5000);
    });
  }

  // ===== NAVBAR SCROLL EFFECT =====
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 29, 35, 0.98)';
      } else {
        navbar.style.background = 'rgba(26, 29, 35, 0.95)';
      }
    });
  }

  // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fact-card, .location-card, .lokal-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
