const $body = document.body;
const $racconChoice = document.querySelector('.raccoon');
const $resultText = document.querySelector('.result_text');
const $resultImg = document.querySelector('.result_card');

const foodArray = [
  { food: '볶음밥', image: './img/1.jpg' },
  { food: '짜장면', image: './img/2.jpg' },
];
let ranChoice = Math.floor(Math.random() * foodArray.length);
console.log(foodArray[ranChoice].image);

let resultText = foodArray[ranChoice].food;
let resultImage = foodArray[ranChoice].image;

$racconChoice.addEventListener('click', function () {
  $body.classList.add('action');

  $resultText.textContent = resultText;
  $resultImg.innerHTML = `<img src="${resultImage}">`;
});
