import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]');

const start = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');
start.disabled = true;
start.addEventListener('click', timerStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      start.disabled = true;
    } else {
      start.disabled = false;
    }
  },
};

const fp = flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addZero(Math.floor(ms / day));
  const hours = addZero(Math.floor((ms % day) / hour));
  const minutes = addZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
function addZero(value) {
  return String(value).padStart(2, '0');
}

function timerStart() {
  let timerId = setInterval(() => {
    const selectedTime = new Date(input.value);
    const timeValue = selectedTime - new Date();
    input.disabled = true;

    start.disabled = true;

    if (timeValue >= 0) {
      let timeLeft = convertMs(timeValue);
      daysTimer.textContent = timeLeft.days;
      hoursTimer.textContent = timeLeft.hours;
      minutesTimer.textContent = timeLeft.minutes;
      secondsTimer.textContent = timeLeft.seconds;
    } else {
      Notiflix.Notify.success('Finish');
      clearInterval(timerId);
    }
  }, 1000);
}
