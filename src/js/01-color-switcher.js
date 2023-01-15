function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

let colorChange;

// create interval and do enable-disable on stop click
start.addEventListener('click', onStart);
function onStart() {
  start.disabled = true;
  stop.disabled = false;

  colorChange = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
  }, 1000);

  return colorChange;
}

// delete interval and do disable-enable on stop click
stop.disabled = true;
stop.addEventListener('click', onStop);
function onStop() {
  start.disabled = false;
  stop.disabled = true;

  clearInterval(colorChange);
  console.log(`Interval with id ${colorChange} has stopped!`);
}

// just styling a bit
start.classList.add('colorswitchers');
stop.classList.add('colorswitchers');
stop.style.marginLeft = '50%';
