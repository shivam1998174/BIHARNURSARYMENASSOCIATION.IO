const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle navbar visibility on hamburger click
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Hide navbar on nav link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

//----------------------------------------------------------images-slider
let index = 0;
const slides = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slide').length;
const slidesToShow = 4;
const maxIndex = Math.ceil(totalSlides / slidesToShow) - 1;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) > maxIndex ? 0 : index + 1;
  updateSlider();
});
document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1) < 0 ? maxIndex : index - 1;
  updateSlider();
});
function updateSlider() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(() => {
  index = (index + 1) > maxIndex ? 0 : index + 1;
  updateSlider();
}, 3000);

//----------------------------------------------team-slider
let currentIndex = 0;
const team_slides = document.querySelectorAll(".team-slide");

function showSlide(index) {
  team_slides.forEach((team_slide, i) => {
    team_slide.classList.remove("Active");
    if (i === index) {
      team_slide.classList.add("Active");
    }
  });
}

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + team_slides.length) % team_slides.length;
  showSlide(currentIndex);
}

function autoSlide() {
  changeSlide(1);
}

setInterval(autoSlide, 3000); // Auto-slide every 3 seconds

// images-animation

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image");
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          }
      });
  }, { threshold: 0.3 });
  images.forEach(image => {
      observer.observe(image);
  });
});

//------------------------------------------------------------image-gallery

function openLightbox(img) {
  document.getElementById('lightbox').classList.add('active');
  document.getElementById('lightbox-img').src = img.src;
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}


// --------------------------------------footer

document.getElementById("year").textContent = new Date().getFullYear();