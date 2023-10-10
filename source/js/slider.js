const slider = document.querySelector('.slider');
const nextButton = document.querySelector('.slider-button-next');
const prevButton = document.querySelector('.slider-button-prev');
const slides = Array.from(document.querySelectorAll('.slide'));
const pagination = document.querySelector('.slider-pagination');
let currentIndex = 0;

slider.classList.remove('slider--nojs');

// Создаем кнопки пагинации
slides.forEach((slide, index) => {
  const li = document.createElement('li');
  const button = document.createElement('button');
  li.classList.add('slider-pagination__item');
  button.classList.add('slider-pagination__link');
  li.appendChild(button);
  button.addEventListener('click', () => {
    setActiveSlide(index);
  });
  pagination.appendChild(li);
});

// Функция для установки активного слайда
function setActiveSlide(index) {
  slides.forEach((slide, slideIndex) => {
    if (slideIndex === index) {
      slide.style.display = 'block';
      pagination.children[index].classList.add('slider-pagination__item--active');
    } else {
      slide.style.display = 'none';
      pagination.children[slideIndex].classList.remove('slider-pagination__item--active');
    }
  });
  currentIndex = index;

  // Проверяем, нужно ли блокировать кнопки
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === slides.length - 1;
}

// Функция для переключения на следующий слайд
function nextSlide() {
  if (currentIndex < slides.length - 1) {
    setActiveSlide(currentIndex + 1);
  }
}

// Функция для переключения на предыдущий слайд
function prevSlide() {
  if (currentIndex > 0) {
    setActiveSlide(currentIndex - 1);
  }
}

// Обработчики событий для кнопок "Вперед" и "Назад"
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// По умолчанию устанавливаем первый слайд активным
setActiveSlide(0);
