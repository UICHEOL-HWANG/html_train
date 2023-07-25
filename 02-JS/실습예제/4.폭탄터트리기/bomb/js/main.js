// window.onload = function () {
//   alert('완료');
// };

document.addEventListener('DOMContentLoaded', function () {
  //대상을 변수에 저장
  const $bomb = document.querySelector('.bomb');
  const $info = document.querySelector('.info');
  const $spark = document.querySelector('.spark');
  const $btnGo = document.querySelector('#go');
  const $btnStop = document.querySelector('#stop');
  const $beepSound = document.querySelector('#beep-sound');
  const $boomSound = document.querySelector('#boom-sound');

  //터트리자 클릭했을 때

  let count = 10;
  let timer;

  $btnGo.addEventListener('click', () => {
    timer = setInterval(counter, 1000);
    $spark.classList.add('sparkling');

    $info.style.opacity = 1;
    $bomb.classList.remove('boom');
  });

  //참아를 클릭했을 때
  $btnStop.addEventListener('click', () => {
    clearInterval(timer);
    $spark.classList.remove('sparkling');
  });

  // 카운트 등의 동작을 함수로 정의

  function counter() {
    if (count === 0) {
      //터짐
      $bomb.classList.add('boom');
      $spark.classList.remove('sparkling');
      $boomSound.play();
      $info.style.opacity = 0;
      clearInterval(timer);
      count = 10;
    } else {
      count--;
      $beepSound.play();
    }
    $info.textContent = count;
  }
});

func;
// window.addEventListener('load', function () {
//   alert('adw');
// });
