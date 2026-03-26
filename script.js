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

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if (response.ok) {
          contactForm.style.display = 'none';
          document.querySelector('.form-success').classList.add('show');
          contactForm.reset();

          setTimeout(() => {
            contactForm.style.display = 'block';
            document.querySelector('.form-success').classList.remove('show');
          }, 5000);
        } else {
          alert('Noe gikk galt. Vennligst prøv igjen eller kontakt oss direkte på co@oroeiendom.no');
        }
      }).catch(() => {
        alert('Noe gikk galt. Vennligst prøv igjen eller kontakt oss direkte på co@oroeiendom.no');
      });
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
