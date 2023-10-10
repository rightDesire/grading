const rangeSliderInit = () => { // создаем функцию инициализации слайдера
  const range = document.getElementById('range'); // Ищем слайдер
  const inputMin = document.getElementById('min'); // Ищем input с меньшим значнием
  const inputMax = document.getElementById('max'); // Ищем input с большим значнием

  if (!range || !inputMin || !inputMax) {
    return;
  } // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

  const inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения

  noUiSlider.create(range, { // инициализируем слайдер
    start: [0, 900], // устанавливаем начальные значения
    connect: true, // указываем что нужно показывать выбранный диапазон
    range: { // устанавливаем минимальное и максимальное значения
      'min': 0,
      'max': 1000
    },
    step: 1, // шаг изменения значений
  });

  const rangeDefault = (input, handle) => {
    input[handle].removeAttribute('style');
    if (input[handle].value === '0') {
      input[handle].setAttribute('style', 'color: #bdbdbd');
    }
    if (input[handle].value === '1000') {
      input[handle].setAttribute('style', 'color: #bdbdbd');
    }
  };

  const inputDefault = (input) => {
    input.removeAttribute('style');
    if (input.value === '0' || input.value === '1000') {
      input.setAttribute('style', 'color: #bdbdbd');
    }
  };

  const onRangeUpdate = (values, handle) => {
    inputs[handle].value = parseInt(values[handle], 10);
    rangeDefault(inputs, handle);
  };

  range.noUiSlider.on('update', onRangeUpdate); // при изменений положения элементов управления слайдера изменяем соответствующие значения

  inputMin.addEventListener('change', function () { // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([this.value, null]);
    inputDefault(inputMin);
  });

  inputMax.addEventListener('change', function () { // при изменении большего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([null, this.value]);
    inputDefault(inputMax);
  });
};

const init = () => {
  rangeSliderInit(); // запускаем функцию инициализации слайдера
};

window.addEventListener('DOMContentLoaded', init); // запускаем функцию init, когда документ будет загружен и готов к взаимодействию
