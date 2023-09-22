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
