import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// Кеширование доступа к элементам DOM
const start = document.querySelector('[data-start]');
const dateTimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const timeFields = document.querySelectorAll('.value');

let countdownInterval;

// Функция настройки Flatpickr
function setupDateTimePicker() {
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      handleDateTimePickerClose(selectedDates);
    },
  };
  flatpickr(dateTimePicker, options);
}

// Функция, вызываемая при закрытии DateTimePicker
function handleDateTimePickerClose(selectedDates) {
  const selectedDate = selectedDates[0];
  const currentDate = Date.now();

  if (selectedDate <= currentDate) {
    alert('Please choose a date in the future');
    disableStartButton();
  } else {
    enableStartButton();
  }
}

// Функция отключения кнопки "Start"
function disableStartButton() {
  startButton.disabled = true;
}

// Функция включения кнопки "Start"
function enableStartButton() {
  startButton.disabled = false;
}

// Функция запуска обратного отсчета
function startCountdown(targetDate) {
  clearInterval(countdownInterval);

  function updateTimer() {
    const currentDate = Date.now();
    let timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      timeDifference = 0;
    }
    const time = convertMs(timeDifference);
    updateTimeFields(time);
  }
  updateTimer();
  countdownInterval = setInterval(updateTimer, 1000);
}

// Функция обновления полей времени
function updateTimeFields(time) {
  timeFields[0].textContent = addLeadingZero(time.days);
  timeFields[1].textContent = addLeadingZero(time.hours);
  timeFields[2].textContent = addLeadingZero(time.minutes);
  timeFields[3].textContent = addLeadingZero(time.seconds);
}

// Функция преобразования миллисекунд в дни, часы, минуты и секунды
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

// Функция добавления ведущего нуля к числовому значению
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

// Инициализация кода
function initialize() {
  setupDateTimePicker();
  startButton.addEventListener('click', () => {
    const selectedDate = dateTimePicker._flatpickr.selectedDates[0];
    startCountdown(selectedDate);
    disableStartButton();
  });
}

initialize();
