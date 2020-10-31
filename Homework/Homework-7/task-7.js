// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text, обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const sizeControlInputRef = document.querySelector('#font-size-control');
const textForFontSizeChangingRef = document.querySelector('#text');

sizeControlInputRef.addEventListener('input', () => {
  textForFontSizeChangingRef.style.fontSize = `${sizeControlInputRef.value}px`;
});
