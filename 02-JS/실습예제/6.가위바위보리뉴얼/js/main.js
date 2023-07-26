const $body = document.body;
const $userChoice = document.querySelector('.reslt-user');
const $pcChoice = document.querySelector('.result-text');
const $resultText = document.querySelector('.result-text');
const $Audio = document.querySelector('#auido');
const $resultPc = document.querySelector('.result-pc');

//클릭 영역을 변수에 저장
const $gameArea = document.querySelector('.wrap');
const ComArray = [
  {
    choice: '가위',
    image: './img/scissors.png',
  },
  {
    choice: '바위',
    image: './img/rock.png',
  },
  {
    choice: '보',
    image: './img/paper.png',
  },
];

// console.log(ComArray[2]['choice']); //비교를 위한 값(pc의 선택)
let $comGame = Math.floor(Math.random() * 3);

let timer;
// 영역을 클릭하면 실행
// 함수가 이벤트 핸들러로 호출될 때 첫 번째 매개변수 자리에 이벤트 정보가 객체로 전달된다
timer = $gameArea.addEventListener('click', (e) => {
  // if (e.target.alt === undefined) {
  //   return;
  // }

  if (e.target.tagName != 'IMG') {
    return;
  }

  //게임 시작
  // $Audio.play(); //음악 넣기
  setTimeout(() => {
    // 선택한 이미지의 정보를 변수에 저장
    const $userChoic = e.target.alt; // 이미지 캡션 정보
    const userChoiceImg = e.target.src; // 이미지 경로 정보

    let $comArr = ComArray[$comGame].choice;
    let $comImage = ComArray[$comGame].image;

    $body.classList.add('action');

    //결과를 result 변수에 저장
    let result;

    //pc의 선택을 변수에 저장
    //이겼는지 졌는지 비교
    if ($userChoic === $comArr) {
      result = '비겼다';
      $resultPc.classList.add('heartbeat');
      $userChoice.classList.add('heartbeat');
    } else if (
      ($userChoic === '보' && $comArr === '가위') ||
      ($userChoic === '가위' && $comArr === '바위') ||
      ($userChoic === '바위' && $comArr === '보')
    ) {
      // console.log('졌습니다.');
      result = '졌다';
      $resultPc.classList.add('jello-horizontal');
    } else {
      // console.log('이겼다');
      result = '이겼다';
      $userChoice.classList.add('vibrate-1');
    }

    //결과 내용 뿌리기
    $resultText.textContent = result;
    $userChoice.innerHTML = `<img src="${userChoiceImg}">`;
    $resultPc.innerHTML = `<img src="${$comImage}">`;
  }, 1000);

  setTimeout(function () {
    $body.classList.remove('action');
    $userChoice.classList.remove('vibrate-1');
    $resultPc.classList.remove('jello-horizontal');

    $resultPc.classList.remove('heartbeat');
    $userChoice.classList.remove('heartbeat');
  }, 5000);
});
