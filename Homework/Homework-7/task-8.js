// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount),
// которая принимает 1 параметр amount - число.
// Функция создает столько div,
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px.
// Каждый следующий div после первого,
// должен быть шире и выше предыдущего на 10px.
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const boxesContainerRef = document.querySelector('#boxes');
const boxesAmountRef = document.querySelector('#controls input');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');

function createBox(size) {
  const box = document.createElement('div');
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomColor();
  return box;
}

function getRandomColor() {
  let r = Math.floor(Math.random() * (255 - 0));
  let g = Math.floor(Math.random() * (255 - 0));
  let b = Math.floor(Math.random() * (255 - 0));
  return `rgb(${r}, ${g}, ${b})`;
}

function renderBoxes(amount) {
  const listFragment = document.createDocumentFragment();

  for (let i = 1; i <= amount; i += 1) {
    const size = 20 + i * 10;
    const div = createBox(size);
    listFragment.appendChild(div);
  }
  boxesContainerRef.appendChild(listFragment);
}

function createBoxes() {
  const amount = Number(boxesAmountRef.value);
  renderBoxes(amount);
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = '';
}

renderBtnRef.addEventListener('click', event => {
  createBoxes();
});
destroyBtnRef.addEventListener('click', event => {
  destroyBoxes();
});