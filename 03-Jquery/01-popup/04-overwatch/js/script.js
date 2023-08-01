$(function () {
  const heroes = [
    {
      name: '파라',
      pic: 'parah.png',
      bgImg: '960_Pharah.jpg',
      position: '공격',
      desc: '파리하 아마리의 사명감은 그 핏줄을 타고 흐릅니다. 유서 깊은 군인 가문 출신인 그녀에겐 명예롭게 조국을 섬기겠다는 열정이 타오릅니다.',
      vod: 'https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt079ff627ff7da109/633907a03917977bfd9861db/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_PharahBarrage_WEB_16x9_1920x1080p30_H264.mp4',
    },
    {
      name: '자리야',
      pic: 'zariya.png',
      bgImg: '960_Zarya.jpg',
      position: '돌격',
      desc: '세계에서 가장 강인한 여성 중 하나인 알렉산드라 자리야노바는 한때 장래가 촉망되던 운동선수였으나, 전쟁이 시작되자 개인의 영달을 버리고 가족과 친구, 조국을 보호하기 위해 나섰습니다.',
      vod: 'https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt040a5ea898321b4e/6339094bda1d806602f83f34/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_ZaryaEnergy_WEB_16x9_1920x1080p30_H264.mp4 ',
    },
    {
      name: '정크랫',
      pic: 'junk.png',
      bgImg: '960_Junkrat.jpg',
      position: '공격',
      desc: '정크랫은 폭발물에 광적으로 집착하며, 세상에 혼돈과 파괴를 불러오기 위해 살아가는 폭파 전문가입니다.',
      vod: 'https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blta4a8791f7dbba756/633905ef64fe5a7d4481a080/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_JunkratTotalMayhem_WEB_16x9_1920x1080p30_H264.mp4',
    },
    {
      name: '윈스턴',
      pic: 'winston.png',
      bgImg: '960_Winston.jpg',
      position: '돌격',
      desc: '윈스턴은 극도로 지적인 유전자 조작 고릴라입니다. 훌륭한 과학자이자 인류가 지닌 잠재력의 강력한 옹호자이기도 합니다.',
      vod: 'https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blteb7e41ad4b9f58ce/633909161ccd046877c0e52f/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_WinstonPrimalRage_WEB_16x9_1920x1080p30_H264.mp4',
    },
  ];

  // 배열, 객체에 접근
  console.log(heroes[0].name);

  $('.wrap').append('<ul class="hero-list"></ul>');

  const content = `
  <li>
    <figure><img src="./img/parah.png" alt="" /></figure>
    <dl>
      <dt>파라</dt>
      <dd>공격</dd>
      <dd>
        파리하 아마리의 사명감은 그 핏줄을 타고 흐릅니다. 유서 깊은 군인 가문 출신인 그녀에겐 명예롭게 조국을
        섬기겠다는 열정이 타오릅니다
      </dd>
    </dl>
  </li>
  `;

  for (let i = 0; i < heroes.length; i++) {
    $('.hero-list').append(content);
    $('.hero-list li').each(function (index, item) {
      $(this)
        .find('img')
        .attr('src', './img/' + heroes[index].pic);
      $(this).find('dt').text(heroes[index].name);
      $(this).find('dd').text(heroes[index].position);
      $(this).find('dd+dd').text(heroes[index].desc);

      // 영웅 카드 아이템을 클릭했을 때 이벤트
      $(this).on('click', function () {
        $('.dim').fadeIn();
        $('.popup').addClass('active');
        /* $('.popup').find('video').attr('src', heroes[index].vod); */
        $('.popup').find('.vod-con').html(`<video src = "${heroes[index].vod}" autoplay muted loop> </video>`);
        $('.hero-info').find('dd').text(heroes[index].desc);
        $('.hero-info').find('dt').text(heroes[index].name);
        $('.bg').html(`<img src= "./img/${heroes[index].bgImg}"`);
      });
    });
  }
  $('.btn-close').on('click', function () {
    $('.dim').fadeOut();
    $('.popup').removeClass('active');
    $('.bg').find('img').remove();
  });
  $('.dim').on('click', function () {
    $(this).fadeOut();
    $('.popup').removeClass('active');
  });
});
