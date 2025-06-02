 // Smooth scroll for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});

// Simple fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
      }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function() {
  navLinks.classList.toggle('mobile-menu');
  navLinks.classList.toggle('active');
  
  // Change icon
  const icon = menuToggle.querySelector('i');
  if (navLinks.classList.contains('active')) {
      icon.className = 'fas fa-times';
  } else {
      icon.className = 'fas fa-bars';
  }
});

// Close mobile menu when clicking on a link
navLinks.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
      navLinks.classList.remove('mobile-menu', 'active');
      menuToggle.querySelector('i').className = 'fas fa-bars';
  }
});

// Contact form functions
function sendWhatsApp() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const car = document.getElementById('car').value;
  const issue = document.getElementById('issue').value;
  
  if (!name || !phone || !car || !issue) {
      alert('Please fill in all fields');
      return;
  }
  
  const message = `Hi! I need help with my car:%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ACar: ${encodeURIComponent(car)}%0AIssue: ${encodeURIComponent(issue)}`;
  
  window.open(`https://wa.me/447442109885?text=${message}`, '_blank');
}

function sendEmail() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const car = document.getElementById('car').value;
  const issue = document.getElementById('issue').value;
  
  if (!name || !phone || !car || !issue) {
      alert('Please fill in all fields');
      return;
  }
  
  const subject = encodeURIComponent('Car Repair Quote Request');
  const body = encodeURIComponent(`Hi,

I need help with my car:

Name: ${name}
Phone: ${phone}
Car: ${car}
Issue: ${issue}

Please get back to me with a quote.

Best regards,
${name}`);
  
  window.location.href = `mailto:info@beltnclutch.co.uk?subject=${subject}&body=${body}`;
}
function openWhatsApp() {
  const message = encodeURIComponent("Hi, I need help with my car.");
  const phone = "447442109885";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

function toggleEmailForm() {
  const form = document.getElementById("emailForm");
  form.classList.toggle("hidden");
}
