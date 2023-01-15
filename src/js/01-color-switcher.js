// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона < body >
// на случайное значение используя инлайн стиль.
// При нажатии на кнопку «Stop»,
// изменение цвета фона должно останавливаться.
// Учти, на кнопку «Start» можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна(disabled).

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

start.addEventListener('click', onStart);
function onStart() {}

start.addEventListener('click', onStop);
function onStop() {}
