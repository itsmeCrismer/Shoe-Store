
const modeToggle = document.getElementById("modeToggle");
const html = document.documentElement;


if (localStorage.theme === "dark") {
  html.classList.add("dark");
  modeToggle.textContent = "☀️";
} else {
  html.classList.remove("dark");
  modeToggle.textContent = "🌙";
}

modeToggle.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.theme = "light";
    modeToggle.textContent = "🌙";
  } else {
    html.classList.add("dark");
    localStorage.theme = "dark";
    modeToggle.textContent = "☀️";
  }
});


const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#f97316',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
};
const carousel = document.getElementById('carousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: 320, behavior: 'smooth' });
});
prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -320, behavior: 'smooth' });
});
document.getElementById("year").textContent = new Date().getFullYear();
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("opacity-0");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500); 
  }, 800); 
});
