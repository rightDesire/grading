const slider = document.querySelector('.slider__wrapper');
const prevButton = document.querySelector('.slider__prev');
const nextButton = document.querySelector('.slider__next');
const slides = Array.from(slider.querySelectorAll('.slide'));
const slideCount = slides.length;
const paginationButtons = Array.from(document.querySelectorAll('.pagination__link'));
const paginationButtonActive = document.querySelector('.pagination__link--current');
let slideIndex = 0;

function showPreviousSlide() {
  slideIndex ? slideIndex-- : true;
  updateSlider();
}

function showNextSlide() {
  slideIndex !== slides.length ? slideIndex++ : true;
  updateSlider();
}

function updateSlider() {
  slideIndex <= 0 ? prevButton.setAttribute('disabled', true) : prevButton.removeAttribute('disabled', true);
  (slideIndex + 1) === slides.length ? nextButton.setAttribute('disabled', true) : nextButton.removeAttribute('disabled', true);

  paginationButtons.forEach((paginationButton) => {
    paginationButton.classList.remove('pagination__link--current');
  })

  if (slideIndex > -1 && slideIndex !== slides.length) {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
        paginationButtons[index].classList.add('pagination__link--current');
      } else {
        slide.style.display = 'none';
      }
    });
  }
}

updateSlider();

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
