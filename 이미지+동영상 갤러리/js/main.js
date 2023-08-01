$(function () {
  // 대상을 변수에 저장
  const $dim = $('.dim');
  const $popup = $('.popup');
  const $galleryContent = $('.gallery-content');
  const $btnClose = $('.btn-close');
  const $gallery = $('.gallery-list li');

  //이벤트
  $gallery.on('click', function () {
    $dim.fadeIn();
    $popup.addClass('active');
    //동작

    //1. 클릭한 요소에 관한 정보를 저장한다

    const $tarGet = $(this).find('img');
    //2. 이미지의 경우는 그냥 뿌려주고
    const imgSrc = $tarGet.attr('src');
    const imgTitle = $tarGet.attr('alt');
    const videoSrc = $tarGet.attr('data-link');

    if (videoSrc) {
      $galleryContent.html(`<iframe src="${videoSrc}?autoplay=1;loop=1" allow="autoplay;"></iframe>`);
      $popup.css('width', $(window).outerWidth() / 2);
      $galleryContent.append(videoSrc);
    } else {
      $galleryContent.html(`<img src="${imgSrc}"/>`);
      $popup.css('width', $(window).outerWidth() / 3);
      $galleryContent.append(imgTitle);
    }
    //3. 동영상 정보가 있는 경우, iframe 태그로 조합한다

    // const videoSrc = $tarGet.data('link');도 가능함
    console.log(imgSrc, imgTitle, videoSrc);
  });

  $btnClose.on('click', function () {
    $dim.fadeOut();
    $popup.removeClass('active');
    setTimeout(() => {
      $galleryContent.html('');
    }, 400);
  });

  $dim.on('click', function () {
    $dim.fadeOut();
    $popup.removeClass('active');
    setTimeout(() => {
      $galleryContent.html('');
    }, 400);
  });
});
