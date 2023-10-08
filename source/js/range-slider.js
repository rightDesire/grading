const inputMin = document.getElementById('min'); // Ищем input с меньшим значнием
const inputMax = document.getElementById('max'); // Ищем input с большим значнием

const rangeSliderInit = () => { // создаем функцию инициализации слайдера
  const range = document.getElementById('range'); // Ищем слайдер
  const inputMin = document.getElementById('min'); // Ищем input с меньшим значнием
  const inputMax = document.getElementById('max'); // Ищем input с большим значнием

  if (!range || !inputMin || !inputMax) return // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

  const inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения

  noUiSlider.create(range, { // инициализируем слайдер
      start: [0, 900], // устанавливаем начальные значения
      connect: true, // указываем что нужно показывать выбранный диапазон
      range: { // устанавливаем минимальное и максимальное значения
        'min': 0,
        'max': 1000
      },
      step: 1, // шаг изменения значений
    }
  )

  range.noUiSlider.on('update', function (values, handle) { // при изменений положения элементов управления слайдера изменяем соответствующие значения
    inputs[handle].value = parseInt(values[handle]);
    rangeDefault(inputs, handle);
  });

  inputMin.addEventListener('change', function () { // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([this.value, null]);
    inputDefault(inputMin);
  });

  inputMax.addEventListener('change', function () { // при изменении большего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([null, this.value]);
    inputDefault(inputMax);
  });
}

const rangeDefault = (inputs, handle) => {
  inputs[handle].removeAttribute('style');
  inputs[handle].value === '0' ? inputs[handle].setAttribute('style', 'color: #bdbdbd') : true;
  inputs[handle].value === '1000' ? inputs[handle].setAttribute('style', 'color: #bdbdbd') : true;
}

const inputDefault = (input) => {
  input.removeAttribute('style');
  (input.value === '0' || input.value === '1000') ? input.setAttribute('style', 'color: #bdbdbd') : true;
}

const init = () => {
  rangeSliderInit() // запускаем функцию инициализации слайдера
}

window.addEventListener('DOMContentLoaded', init) // запускаем функцию init, когда документ будет загружен и готов к взаимодействию
