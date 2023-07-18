// 조작할 대상을 변수에 담기
const btnTop =
  document.querySelector(".btn-top"); /* btn-top이라는 태그를 선택해라 */
const html = document.documentElement; /* 웹문서의 요소를 골라라*/
const htmlPos = html.scrollHeight / 2;

console.log(htmlPos);
// 조작할 상황을 생각해보기
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  console.log(scrollTop); /* 스크롤 횟수 측정 */

  if (scrollTop >= htmlPos) {
    /* 스크롤 값이 문서 세로크기의 절반 값을 넘어가면  */
    btnTop.classList.add("active"); /* active클래스 부여 */
  } else {
    btnTop.classList.remove("active"); /* active 클래스 제거 */
  }
  // btnTop에 active라는 클래스를 부여시킨다.
}); /* 창에 스크롤이 생겼을 때  */

// 동작을 생각해보기

// AOS  초기화
AOS.init();
