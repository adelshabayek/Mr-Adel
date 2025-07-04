
let currentLang = 'ar'; // اللغة الافتراضية

function applyLang(lang) {
  const elements = document.querySelectorAll('[data-ar]');
  elements.forEach(el => {
    el.textContent = el.dataset[lang];
  });

  const body = document.getElementById('siteBody');
  if (lang === 'ar') {
    document.documentElement.setAttribute('lang', 'ar');
    document.documentElement.setAttribute('dir', 'rtl');
    body.style.textAlign = 'right';
    document.getElementById('langToggle').textContent = 'EN';
  } else {
    document.documentElement.setAttribute('lang', 'en');
    document.documentElement.setAttribute('dir', 'ltr');
    body.style.textAlign = 'left';
    document.getElementById('langToggle').textContent = 'AR';
  }
  currentLang = lang;
}

function toggleLang() {
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  applyLang(newLang);
}

window.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang); // تحميل اللغة الافتراضية عند تشغيل الموقع
});
// Mobile nav toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('mainNav').classList.toggle('show');
});

// toTop؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟

const toTopBtn = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopBtn.classList.add("show");
  } else {
    toTopBtn.classList.remove("show");
  }
});

// إخفاء الزر مبدئيًا
window.addEventListener("load", () => {
  toTopBtn.classList.remove("show");
});


// testimonialSlider؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟



// // Testimonial carousel functionality (basic)
// let currentTestimonial = 0;
// const testimonials = document.querySelectorAll('.testimonial-card');

// function showTestimonial(index) {
//   testimonials.forEach((testimonial, i) => {
//     testimonial.style.display = i === index ? 'block' : 'none';
//   });
// }

// // Auto-rotate testimonials on mobile
// if (window.innerWidth <= 768) {
//   setInterval(() => {
//     currentTestimonial = (currentTestimonial + 1) % testimonials.length;
//     showTestimonial(currentTestimonial);
//   }, 5000);
// }
