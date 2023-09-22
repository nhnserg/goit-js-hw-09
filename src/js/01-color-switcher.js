const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let intervalid;

startBtn.addEventListener('click', () => {
  if (!intervalid) {
    intervalid = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalid);
  intervalid = null;

  document.body.style.backgroundColor = 'white';

  startBtn.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const startButton = document.querySelector('[data-start]');
// const stopButton = document.querySelector('[data-stop]');
// const body = document.body;

// let interval = null;

// function startColorChange() {
//   startButton.disabled = true;
//   stopButton.disabled = false;

//   interval = setInterval(() => {
//     body.style.backgroundColor = getRandomHexColor();
//   }, 1000);
// }

// function stopColorChange() {
//   startButton.disabled = false;
//   stopButton.disabled = true;

//   clearInterval(interval);
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// startButton.addEventListener('click', startColorChange);
// stopButton.addEventListener('click', stopColorChange);
