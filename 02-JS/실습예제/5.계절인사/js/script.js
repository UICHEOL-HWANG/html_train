// Date 객체에 대해 알아보자
const now = new Date();

// console.log('현재년도 ' + now.getFullYear());
// console.log('현재월 ' + (now.getMonth() + 1)); //0부터 계산하는 시스템 때문에 () 연산자 우선순위를 적용한 +1
// console.log('현재일 ' + now.getDate());
// console.log('요일 ' + now.getDay());
// console.log('현재 시간 ' + now.getHours());
// console.log('현재 분 ' + now.getMinutes());
// console.log('현재 초 ' + now.getSeconds());

// 오늘 년도, 날짜와 요일을 뿌리자
const dateInput = document.querySelector('.date');

let week_day = ['일', '월', '화', '수', '목', '금', '토'];
let getDaysub = new Date().getDay();
week_day[getDaysub];
const dateText = `
${now.getFullYear()}년
${now.getMonth() + 1}월
${now.getDate()}일  
${week_day[getDaysub]}요일
`;

dateInput.textContent = dateText;

// 계절 인사를 뿌려주자

const $season = document.querySelector('.season');
let month_seaon = new Date().getMonth() + 1;
const $body = document.body;

let seasonText;
let seasonName;
//월에 따른 계절 비교

// if (month_seaon === 3 || month_seaon === 4 || month_seaon === 5) {
//   seasonText = '🍚봄 입니다.';
//   seasonName = 'spring';
// } else if (month_seaon === 6 || month_seaon === 7 || month_seaon === 8) {
//   seasonText = '🍭무더운 여름입니다.';
//   seasonName = 'summer';
// } else if (month_seaon === 9 || month_seaon === 10 || month_seaon === 11) {
//   seasonText = '🥩고기가 땡기는 가을입니다';
//   seasonName = 'fall';
// } else {
//   seasonText = '🍐 귤이 땡기는 겨울입니다';
//   seasonName = 'winter';
// }

switch (month_seaon) {
  case 3:
  case 4:
  case 5:
    seasonText = '🍚봄 입니다.';
    $season.textContent = seasonText;
    seasonName = 'spring';
    break;
  case 6:
  case 7:
  case 8:
    seasonText = '🍭무더운 여름입니다.';
    $season.textContent = seasonText;
    seasonName = 'summer';
    break;
  case 9:
  case 10:
  case 11:
    seasonText = '🥩고기가 땡기는 가을입니다';
    $season.textContent = seasonText;
    seasonName = 'fall';
    break;
  case 12:
  case 1:
  case 2:
    seasonText = '🍐 귤이 땡기는 겨울입니다';
    $season.textContent = seasonText;
    seasonName = 'winter';
    break;
}

$season.textContent = seasonText;
$body.classList.add(seasonName);

const dayTime = new Date().getHours();
let TimeBg;
console.log(dayTime);

// switch (dayTime) {
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//   case 11:
//   case 12:
//   case 13:
//   case 14:
//   case 15:
//   case 16:
//   case 17:
//     TimeBg = 'day';
//     break;
//   default:
//     TimeBg = 'night';
// }

dayTime >= 0 && dayTime <= 17 ? $body.classList.add('day') : $body.classList.add('night');

$body.classList.add(TimeBg);

// 글자의 등장 애니메이션
