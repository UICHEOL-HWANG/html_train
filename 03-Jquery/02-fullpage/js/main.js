$(function () {
  // 대상을 변수에 저장

  const $window = $(window);
  const $header = $('header');
  const $dot = $('.indicator > a');
  const $section = $('main section');
  console.log($section);

  // 기본적인 영역 이동 코드

  // $('.go-top').stop().animate({옵션},300,function(){}); /* animate 0.3초동안 이 애니메이트를 실행  */

  let secIdx = 0;

  //인디케이터를 클릭했을 때
  $dot.on('click', function (e) {
    e.preventDefault();

    secIdx = $(this).index();
    moveSection(secIdx);
    $dot.removeClass('active').eq(secIdx).addClass('active');

    //클릭한 a의 인덱스를 구해와서 변수에 담고
    // 그 인덱스에 해당하는 영역으로 이동

    //인디케이터 업데이트
    $dot.removeClass('active').eq(secIdx).addClass('active');
  });

  //사용자가 마우스 휠을 조작했을 때, 키보드 화살표 업/다운 했을 때
  $window.on('wheel keydown', function (e) {
    if ($('html,body').is(':animated')) return;
    console.log(e.originalEvent.deltaY, e.keyCode);

    if (e.originalEvent.deltaY < 0 || e.keyCode === 38) {
      if (secIdx === 0) return;
      secIdx--;
    } else if (e.originalEvent.deltaY > 0 || e.keyCode === 40) {
      if (secIdx === $section.length - 1) return;
      secIdx++;
    }
    moveSection(secIdx);
    $dot.removeClass('active').eq(secIdx).addClass('active');
  });

  //윈도우 창의 크기를 조절했을 때

  $window.on('resize', function () {
    moveSection(secIdx);
  });

  $('.go-top').on('click', function () {
    moveSection(0);
    // $('html,body').stop().animate(
    //   {
    //     scrollTop: 0 /* 객체 형태로 스크롤 맨 위로 이동 숫자가 0이면 맨 꼭대기로 이동 */,
    //   },
    //   300
    // ); /* animate 0.3초동안 이 애니메이트를 실행  */
  });

  //영역 이동 함수 (반복적 사용)
  function moveSection(index) {
    let postTop = index * $window.outerHeight();
    $('html,body').stop().animate(
      {
        scrollTop: postTop /* 객체 형태로  */,
      },
      300
    ); /* animate 0.3초동안 이 애니메이트를 실행  */
    $dot.removeClass('active').eq(index).addClass('active');
  }
});
