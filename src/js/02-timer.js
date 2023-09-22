import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      alert('Please choose a date in the future');
      document.querySelector('[data-start]').disabled = true;
    } else {
      document.querySelector('[data-start]').disabled = false;
    }
  },
};

const dateTimePicker = document.getElementById('datetime-picker');
flatpickr(dateTimePicker, options);

const startButton = document.querySelector('[data-start]');
const timeFields = document.querySelectorAll('.value');

let countdownInterval;

function startCountdown(targetDate) {
  clearInterval(countdownInterval);

  function updateTimer() {
    const currentDate = new Date();
    let timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      timeDifference = 0;
    }
    const time = convertMs(timeDifference);
    timeFields[0].textContent = addLeadingZero(time.days);
    timeFields[1].textContent = addLeadingZero(time.hours);
    timeFields[2].textContent = addLeadingZero(time.minutes);
    timeFields[3].textContent = addLeadingZero(time.seconds);
  }
  updateTimer();
  countdownInterval = setInterval(updateTimer, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
startButton.addEventListener('click', () => {
  const selectDate = dateTimePicker._flatpickr.selectedDates[0];
  startCountdown(selectDate);
  startButton.disabled = true;
});
