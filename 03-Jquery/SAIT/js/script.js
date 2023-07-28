$(function () {
  // **** GNB ****

  // 대상을 변수에 저장하고
  const menu = $('.gnb > li');
  const subMenu = $('.submenu');
  const duRation = 300;
  //이벤트

  menu.on('mouseenter', function () {
    $(this).find(subMenu).stop().slideDown(duRation);
  });
  menu.on('mouseleave', function () {
    $(this).find(subMenu).stop().slideUp(duRation);
  });

  // **** Search ****
  // 대상을 변수로 저장시킨다
  const btnSearch = $('.btn-search');
  const search = $('.search');

  // 이벤트 - click
  // 검색 버튼을 클릭 했을 때 search에 on이라는 클래스를 부여 addClass()

  btnSearch.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    search.toggleClass('on');
  });

  //비주얼 슬라이더
  $('.visual-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    nextArrow: '.visual-slider-wrap .btn-next',
    prevArrow: '.visual-slider-wrap .btn-prev',
    // slidesToShow: 3, // 한 화면에 보여질 슬라이드의 개수
    // slidesToScroll: 3, // 한번에 슬라이딩 될 개수
  });

  // AOS.js 초기화
  AOS.init();
});
