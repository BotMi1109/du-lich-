// lay cac phan co class la sildesilde
const slides = document.querySelectorAll(".slide");

// theo doi vi tri slile hien tai = 00
let currentSlideIndex = 0;

// time chuyen canhcanh
const slideIntervalTime = 3000;

function showNextSlide() {
  // loai bo class activeactive
  slides[currentSlideIndex].classList.remove("active");

  // vong lap ve 0 khi vuot qua slide cuoicuoi
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  // them active vao silde ke tieptiep
  slides[currentSlideIndex].classList.add("active");
}

// vong lap tu chuyen canhcanh
setInterval(showNextSlide, slideIntervalTime);
