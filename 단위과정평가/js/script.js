$(function () {
  // 변수 선언
  // ⚡문제 : 변수 var 대신 let, const로 변경하시오.
  const $videoList = $('.video-list > li');
  const $dim = $('.dim');
  const $videoWrap = $('.video-wrap');
  const $btnClose = $('.btn-close');
  const $video = $('.video');
  const $iframe = $video.find('iframe');
  const $caption = $('.caption');
  let duration = 300;

  const arr = [
    'https://www.rollingstone.com/wp-content/uploads/2022/05/R1364Blackpink-Opener.jpg?resize=1800,1200&w=1800',
    'https://image.musinsa.com/mfile_s01/2021/05/13/3fb5ed13afe8714a7e5d13ee506003dd120913.jpg',
    'https://img.wkorea.com/w/2021/11/style_6189ebb2d3726.jpg',
    'http://image.yes24.com/images/chyes24/froala/0/48248/58165.jpg',
  ];

  const figcontent = `<figure><img src=""></figure>`;
  $videoList.prepend(figcontent);

  // ⚡문제
  $videoList.each(function (index, item) {
    // 1. 각 아이템의 배경이미지를 배열에서 적절하게 적용하시오.
    // 1. 코드를 작성하시오.

    $(this).find('img').attr('src', arr[index]);

    // ⚡문제 : 다음 코드의 빈공간에 적절한 코드를 넣어 완성하시오.
  });

  $videoList.on('click', function () {
    let idx = $(this).index();
    let videoUrl;
    // 1. 클릭한 요소의 인덱스를 변수 idx에 담는다.
    // 1. 코드를 작성하시오.

    // 2. 다음 코드를 주석을 통해 설명하시오.
    $('body').css('background-image', 'url(' + arr[idx]);
    // 2. 설명 : html요소 중 body를 선택하여 body내에 있는 배경화면을 url을 연결하여 요소를 추가시키는데 arr 배열 안에 있는 이미지 리스트들을 클릭하는 li에 맞춰 배경을 바꾸어주는 기능을 말함

    // 3. 클릭한 리스트의 data-mov 값을 받아서 videoUrl 변수에 담는다.
    // 3. 코드를 작성하시오.
    videoUrl = $(this).attr('data-mov');

    // videoUrl 변수값에 autoplay 옵션값 더해주기
    // iframe의 src 값으로 넣어준다.
    // 선택한 리스트에 있는 텍스트를 받아서 videoText 변수에 담는다.
    // $caption에 그 텍스트를 넣는다.
    // dim 실행

    // 4. 비디오 창 띄우기
    // 4. 코드를 작성하시오.

    const videoText = $(this).text();

    $videoWrap.addClass('active');
    videoUrl += '/?autoplay=1';
    $iframe.attr('src', videoUrl);
    $caption.text(videoText);
    $dim.fadeIn(duration);
  });

  // 닫기 버튼+dim을 클릭했을 때 동작
  $btnClose.add($dim).on('click', function () {
    // dim을 안 보이게
    $dim.fadeOut(duration);

    // 비디오 창을 닫기
    $videoWrap.removeClass('active');

    // 다시 비워두기
    $iframe.attr('src', '');

    $('body').css('background-image', 'url("")');
  });
});

// ⚡문제 : 어떻게 구현되는 프로그램인지 설명하시오.
// 1. HTML 구조의 특징
/* 설명 : 
body : 하위 클래스인 dim,video-wrap,video-list 존재 

dim : 클릭시 화면이 섀도우 형태, 즉 음영처리가 되기 위해 존재하는 더미 class 

video-wrap : dim class로 인해 화면이 음영처리가 됐을 시 비디오가 들어가는 video class와 비디오 제목과 내용이 들어가는 caption class가 있다 또한 video class안에 동영상이 삽입 / 재생시 비디오 화면을 끄게 만드는 닫기 버튼을 임시로 만든 btn-close class를 삽입 현재는 비어있는 상황이고 jQuery를 통하여 자동으로 배분 예정 

vidieo-list : 실질적으로 body 안에서 이미지와 텍스트를 초기화면에 보여주는 li와 설명란이 들어가있는 dl하위의 dt와 dd 태그가 있다
*/
// 2. CSS 디자인의 특징
/*
현재 *,ul,ol,li,img등에 모든 값을 초기화 하는 옵션들을 추가하였고
나머지 옵션들을 설명하자면 

body::before,.dim : 화면이 클릭시 음영 및 블라인드 처리가 될 

body : 뷰포트를 100% 상속 시키는 옵션을 가졌고 가로배치,중앙배치 옵션과 rgba를 통한 배경 화면을 지정해놓은 상태 

video-wrap : 현재 opacity 옵션을 통해 일시적으로 화면을 가린 상태 이지만 active 클래스를 부여하여 opacity 값을 살릴 예정 
(클릭과 동시에 active 클래스 부여 예정) 또한 역동적인 움직임을 위해 top 값을 -%값으로 바꾸었음 

.video-wrap.active : 해당 li 인덱스 중 하나를 클릭하였을 시 top값을 50% 중간 값으로 이동시켜 opacity로 화면을 보여지게 함 

.video-wrap .btn-close : video-wrap 하부에 위치하고 있는 버튼 으로 position absolute 값으로 위치는 뷰포를 기준으로 top,right 값을 동영상이 재생 될 위치 바로 오른쪽 바깥공간에 비치할 에정 

.video-wrap .video : 비디오가 재생될 공간으로 높이와 너비는 부모인 video wrap을 상속하여 각각 100%를 배정 또한 창 크기를 16:9 비율로 맞춰주는 aspect-ratio: 16/9; 옵션을 사용 

.video-list : 4팀의 걸그룹들을 모아놓은 li태그의 부모인  ul 태그로서 해당 요소들은 각각 가로배치 안여백 바깥여백을 지정했고, 해당 요소 중 이미지 파일들은 각각의 크기로 인해 이미지가 삐져나가는 것을 방지 하기 위해 overflow-hidden 값을 줬다 
또한 배경 이미지는 jQuery를 통해 자동적으로 배치시킬 예정이므로 배경 이미지의 위치를 0 0 으로 가로 세로 최상단에 위치 시키며 이미지가 반복되지 않게 본연의 이미지를 가득 채우는 옵션을 부여 시켰다 또한 flex 옵션은 아이템이 남는 공간을 균등하게 차지하면서, 컨테이너의 20%를 기본 크기로 갖도록 하는 Flexbox 레이아웃 속성을 나타냅니다.


.video-list li figure : aspect-ratio: 16/9; 옵션으로 화면의 비율 옵션을 16:9로 맞추었고 테두리 간격을 맞추기 위해 margin-top 비율을 마이너스 값으로 조정하였음 

.video-list li img : object-fit을 통해 불러온 이미지가 중간 적당한 부분으로 자리잡게끔 도와주는 옵션

*/

// 3. 자바스크립트 코드의 특징
/*
  const figcontent = `<figure><img src=""></figure>`;
  $videoList.prepend(figcontent);
  figcontent 안에 img 태그를 넣어준 후 videoList 안에 추가하는데 videoList 하위 맨 아래에 삽입 시켜준다 


  $videoList.each(function (index, item) {
    $(this).find('img').attr('src', arr[index]);

  });

  videoList들의 요소들을 each문을 통해 순회하면서 arr 배열안에 들어있는 이미지 링크 요소들을 인덱스로 만들어준 뒤 arr[index] 방식으로 하나하나 넣어준다 

  그것을 videoList의 img src= 구문을 찾아 그 안으로 넣어주는 명령문 


   $videoList.on('click', function () {
    let idx = $(this).index();
    let videoUrl;

    $('body').css('background-image', 'url(' + arr[idx]);
    videoUrl = $(this).attr('data-mov');
    const videoText = $(this).text();

    $videoWrap.addClass('active');
    videoUrl += '/?autoplay=1';
    $iframe.attr('src', videoUrl);
    $caption.text(videoText);
    $dim.fadeIn(duration);

    vidoList안에 있는 li 요소들을 클릭 하면, fadeIn 속성으로 dim이 적용되어 음영처리가 되고 그 안에 있는 index를 파악하여 idx라는 변수에 넣어준 후/ body의 요소 중 배경화면을 선택하여 방금 전 arr[index]와 같은 방식으로 arr 안에 있는 걸그룹 사진을 배경화면으로 지정할 수 있게 변경을 시킨다.

    또한 클릭 하면서 video-wrap에 active라는 클래스를 추가시킬 수 있는 addClass 구문을 사용하였고 
    
    video-list 안에 있는 li에 data-mov를 추출한 값을 videoUrl 이라는 변수에 담아 자동재생 옵션을 Url 값 안에 채워준 후 
    attr 속성을 사용하여 videoUrl을 삽입 시켜주면 동영상이 안전하게 들어간다 

    
    
  });
*/
