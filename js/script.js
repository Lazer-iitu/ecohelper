/* =========================
   Smooth scroll for anchors (#id)
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* =========================
   Fade-in on scroll
========================= */
const faders = document.querySelectorAll(
  '.feature-card, .team-member, #how-it-works'
);

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

/* =========================
   Navbar scroll behavior
========================= */
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* =========================
   Smooth scroll for .click-scroll
========================= */
document.querySelectorAll('a.click-scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const btnEn = document.getElementById("btn-en");
  const btnRu = document.getElementById("btn-ru");
  const body = document.body;

  function switchToEN() {
    body.classList.remove("lang-ru");
    body.classList.add("lang-en");

    btnEn.classList.add("btn-light");
    btnRu.classList.remove("btn-light");

    localStorage.setItem("lang", "en");
  }

  function switchToRU() {
    body.classList.remove("lang-en");
    body.classList.add("lang-ru");

    btnRu.classList.add("btn-light");
    btnEn.classList.remove("btn-light");

    localStorage.setItem("lang", "ru");
  }

  btnEn.addEventListener("click", switchToEN);
  btnRu.addEventListener("click", switchToRU);

  const savedLang = localStorage.getItem("lang");
  savedLang === "ru" ? switchToRU() : switchToEN();
});



/* =========================
   News slider
========================= */
function scrollNews(direction) {
  const slider = document.getElementById('newsSlider');
  if (!slider) return;

  slider.scrollBy({
    left: direction * 370,
    behavior: 'smooth'
  });
}

// make function global
window.scrollNews = scrollNews;


