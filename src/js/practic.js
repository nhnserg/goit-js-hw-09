// function greet() {
//     return new Promise((resolve) => {
//         setTimeout(() => `{
//             resolve('hello world');
//         }`, 2000);
//     });
// }

// greet().then()

// Напишіть функцію printNumbers(from, to), яка виводить число кожну секунду, починаючи з
//from і закінчуючи to.
// Зробіть два варіанти вирішення.

// printNumbers(5, 10);
// function printNumbers(from, to) {
//   const id = setInterval(() => {
//     if (from >= to) {
//       clearInterval(id);
//     }
//     console.log(from);
//     from += 1;

//   }, 1000);
// }

// printNumbers(5, 10);
// function printNumbers(from, to) {
//   setTimeout(() => {
//     if (from <= to) {
//       console.log(from);
//       from += 1;
//       printNumbers(from, to);
//     }
//   }, 1000);
// }

// function getValue(value) {
//   if (!Number(value)) {
//     return Promise.reject('error');
//   }
//   let text = 'odd';
//   let delay = 2000;
//   if (value % 2 === 0) {
//     text = 'even';
//     delay = 1000;
//   }
//   return new Promise(function (res, rej) {
//     setTimeout(() => {
//       res(text);
//     }, delay);
//   });
// }
// getValue(prompt('Введіть значення'))
//   .then(value => console.log(value))
//   .catch(value => console.log(value));

function onSubmit(e) {
  e.preventDefault();
  const obj = Object.fromEntries(new FormData(e.target));
  saveValue(obj);
  [...e.target.elements].forEach(arr => {
    if (arr.tagName === 'BUTTON') {
      arr.addEventListener('click', function () {
        localStorage.removeItem(KEY);
        e.target.elements.button.value = 'Login';
      });
    }
  });
}
const KEY = 'storage';

function saveValue(obj) {
  localStorage.setItem(KEY, JSON.stringify(obj));
}
