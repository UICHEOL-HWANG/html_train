// 대상을 변수에 저장
const resultBox = document.querySelector('.result-box');
const resultArr = [
  { result: 'dead', text: '🍔당신은 죽었습니다' },
  { result: 'alive', text: '🥞 살았습니다' },
];

// 랜덤 모수 생성

let rIdx;

const saveValue = localStorage.getItem('resultValue');

setTimeout(fingerSnap, 3000);

function fingerSnap() {
  // 0혹은 1의 난수를 생성
  rIdx = Math.floor(Math.random() * 2);

  // 저장된 값이 있는 경우 --> 판결을 받은 경우, 그에 해당하는 결과 값 뿌리

  if (saveValue === null) {
    // 판결을 저장
    localStorage.setItem('resultValue', resultArr[rIdx].result);

    //결과를 알려주자
  } else {
    // if (saveValue === 'alive') {
    //   rIdx = 1;
    // } else {
    //   rIdx = 0;
    // }
    // saveValue === alive ? (rIdx = 1) : (rIdx = 0);
    rIdx = saveValue === 'alive' ? 1 : 0;
  }
  // 저장된 값이 없는 경우 --> 판결이 내려져야 한다
  resultBox.innerHTML = `<h1>${resultArr[rIdx].text}</h1>`;
  resultBox.classList.add(resultArr[rIdx].result);
}
