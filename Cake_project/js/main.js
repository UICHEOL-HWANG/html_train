const cakeArr = [
  {
    name: "Strawberry cake",
    price: "5$",
    img: "https://cdn.mhns.co.kr/news/photo/202101/426341_561452_4615.jpg",
    category: "cakes",
    detail_img:
      "https://wimg.mk.co.kr/meet/neds/2022/07/image_readtop_2022_667436_16589991925122040.jpg",
    detail_name: "쿠키앤 크림",
    detail_desc:
      "프리미엄 디저트 카페 투썸플레이스는 국산 쌀로 만든 고소한 우리 미(米) 무스 등 케이크 2종을 새롭게 출시한다고 28일 밝혔다. 국산 쌀로 만든 고소한 우리 미(米) 무스 케이크는 최근 MZ세대 사이에서 각광받고 있는 로(Low) 푸드 트렌드를 접목한 글루텐 프리 제품이다. 고소하고 담백한 쌀과 우유 플레이버 조합으로 은은한 달콤함을 살렸다.",
  },
  {
    name: "Strawberry Cream Cake",
    price: "10$",
    img: "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3992588787/B.jpg?304000000",
    category: "cakes",
    detail_img:
      "https://youthpress.net/xe/files/attach/images/9794/433/670/a642246a1ad12f63845e4a4d0aee2ff7.png",
    detail_name: "생크림 우유 딸기 케이크",
    detail_desc:
      "트로베리 시즌 대표 케이크로 선보이는 딸기 우유 생크림(홀/피스)은 순백의 시트 사이사이 순 우유, 딸기우유 무스와 생크림을 가득 채우고 생딸기를 올린 제품이다. 시트에 난백란을 사용해 눈처럼 새하얀 비주얼이 특징이다. 딸기와 맛 페어링이 가장 좋은 순 우유를 활용, 딸기 제철 시기에 가장 맛있게 케이크를 즐기는 방법으로 제안하는 제품이다.",
  },
  {
    name: "chocolate real Cake",
    price: "15$",
    img: "https://cdn.emetro.co.kr/data2/content/image/2022/12/22/.cache/512/20221222500362.jpg",
    category: "cakes",
    detail_img: "https://img.newspim.com/news/2021/09/29/2109291657417191.jpg",
    detail_name: "초콜릿 리얼 케이크",
    detail_desc:
      "투썸플레이스는 8월에 단행했던 가격 인상분을 연말 시즌 한정판 제품에 반영한 것이라는 입장이다.앞서 투썸플레이스는 지난 8월에도 스트로베리 초콜릿 생크림 케이크(1호) 가격을 3만4000원에서 3만5000원으로 2.5%, 딸기 생크림 케이크(1호)의 가격은 2만9000원에서 3만1000원으로 6% 올린 바 있다. 다만 커피 가격은 동결했다.",
  },
  {
    name: "Mascarpone Cheesecake",
    price: "20$",
    img: "https://cdn.pinpointnews.co.kr/news/photo/202302/172763_188921_3847.jpg",
    category: "cakes",
    detail_img: "https://img.newspim.com/news/2021/09/29/2109291657417191.jpg",
    detail_name: "초콜릿 리얼 케이크",
    detail_desc:
      "투썸플레이스는 8월에 단행했던 가격 인상분을 연말 시즌 한정판 제품에 반영한 것이라는 입장이다.앞서 투썸플레이스는 지난 8월에도 스트로베리 초콜릿 생크림 케이크(1호) 가격을 3만4000원에서 3만5000원으로 2.5%, 딸기 생크림 케이크(1호)의 가격은 2만9000원에서 3만1000원으로 6% 올린 바 있다. 다만 커피 가격은 동결했다.",
  },
  {
    name: "repeat strawberry",
    price: "20$",
    img: "https://m.giftishow.com/Resource/goods/2022/G00001460987/G00001460987.jpg",
    category: "cakes",
    detail_img: "https://img.newspim.com/news/2021/09/29/2109291657417191.jpg",
    detail_name: "초콜릿 리얼 케이크",
    detail_desc:
      "투썸플레이스는 8월에 단행했던 가격 인상분을 연말 시즌 한정판 제품에 반영한 것이라는 입장이다.앞서 투썸플레이스는 지난 8월에도 스트로베리 초콜릿 생크림 케이크(1호) 가격을 3만4000원에서 3만5000원으로 2.5%, 딸기 생크림 케이크(1호)의 가격은 2만9000원에서 3만1000원으로 6% 올린 바 있다. 다만 커피 가격은 동결했다.",
  },

  {
    name: "real cup cake",
    price: "5$",
    img: "https://img.siksinhot.com/article/1436434206365435.jpg",
    category: "cupcakes",
    detail_img: "https://img.newspim.com/news/2021/09/29/2109291657417191.jpg",
    detail_name: "초콜릿 리얼 케이크",
    detail_desc:
      "투썸플레이스는 8월에 단행했던 가격 인상분을 연말 시즌 한정판 제품에 반영한 것이라는 입장이다.앞서 투썸플레이스는 지난 8월에도 스트로베리 초콜릿 생크림 케이크(1호) 가격을 3만4000원에서 3만5000원으로 2.5%, 딸기 생크림 케이크(1호)의 가격은 2만9000원에서 3만1000원으로 6% 올린 바 있다. 다만 커피 가격은 동결했다.",
  },
  {
    name: "Cheese muppin",
    price: "10$",
    img: "https://allbakery.co.kr/data/item/15-1049/7JWE652g7JWg7LmY7KaI66i47ZWA.png",
    category: "sweets",
    detail_img: "https://img.newspim.com/news/2021/09/29/2109291657417191.jpg",
    detail_name: "초콜릿 리얼 케이크",
    detail_desc:
      "투썸플레이스는 8월에 단행했던 가격 인상분을 연말 시즌 한정판 제품에 반영한 것이라는 입장이다.앞서 투썸플레이스는 지난 8월에도 스트로베리 초콜릿 생크림 케이크(1호) 가격을 3만4000원에서 3만5000원으로 2.5%, 딸기 생크림 케이크(1호)의 가격은 2만9000원에서 3만1000원으로 6% 올린 바 있다. 다만 커피 가격은 동결했다.",
  },
  {
    name: "straw doughnut",
    price: "2$",
    img: "https://m.anyway1974.com/web/product/big/201905/0e8d76430e0a8ad22c5315469b06be02.jpg",
    category: "doughnuts",
    detail_img: "https://img.newspim.com/news/2021/09/29/2109291657417191.jpg",
    detail_name: "초콜릿 리얼 케이크",
    detail_desc:
      "투썸플레이스는 8월에 단행했던 가격 인상분을 연말 시즌 한정판 제품에 반영한 것이라는 입장이다.앞서 투썸플레이스는 지난 8월에도 스트로베리 초콜릿 생크림 케이크(1호) 가격을 3만4000원에서 3만5000원으로 2.5%, 딸기 생크림 케이크(1호)의 가격은 2만9000원에서 3만1000원으로 6% 올린 바 있다. 다만 커피 가격은 동결했다.",
  },
  {
    name: "sweet doughnut",
    price: "5$",
    img: "https://trboard.game.onstove.com/Data/TR/20180117/18/636518102213037745.jpg",
    category: "doughnuts",
    detail_img: "https://img.newspim.com/news/2021/09/29/2109291657417191.jpg",
    detail_name: "초콜릿 리얼 케이크",
    detail_desc:
      "투썸플레이스는 8월에 단행했던 가격 인상분을 연말 시즌 한정판 제품에 반영한 것이라는 입장이다.앞서 투썸플레이스는 지난 8월에도 스트로베리 초콜릿 생크림 케이크(1호) 가격을 3만4000원에서 3만5000원으로 2.5%, 딸기 생크림 케이크(1호)의 가격은 2만9000원에서 3만1000원으로 6% 올린 바 있다. 다만 커피 가격은 동결했다.",
  },
  {
    name: "chocolate doughnut",
    price: "3$",
    img: "https://thingool123.godohosting.com/data/goods/20/10/43/1000015825/1000015825_detail_027.jpg",
    category: "doughnuts",
    detail_img: "https://img.newspim.com/news/2021/09/29/2109291657417191.jpg",
    detail_name: "초콜릿 리얼 케이크",
    detail_desc:
      "투썸플레이스는 8월에 단행했던 가격 인상분을 연말 시즌 한정판 제품에 반영한 것이라는 입장이다.앞서 투썸플레이스는 지난 8월에도 스트로베리 초콜릿 생크림 케이크(1호) 가격을 3만4000원에서 3만5000원으로 2.5%, 딸기 생크림 케이크(1호)의 가격은 2만9000원에서 3만1000원으로 6% 올린 바 있다. 다만 커피 가격은 동결했다.",
  },
  {
    name: "macarong",
    price: "3$",
    img: "https://m.sldessert.com/web/product/big/202109/0f16b48890f10e6538cad52d8abeb41a.jpg",
    category: "doughnuts",
    detail_img: "https://img.newspim.com/news/2021/09/29/2109291657417191.jpg",
    detail_name: "초콜릿 리얼 케이크",
    detail_desc:
      "투썸플레이스는 8월에 단행했던 가격 인상분을 연말 시즌 한정판 제품에 반영한 것이라는 입장이다.앞서 투썸플레이스는 지난 8월에도 스트로베리 초콜릿 생크림 케이크(1호) 가격을 3만4000원에서 3만5000원으로 2.5%, 딸기 생크림 케이크(1호)의 가격은 2만9000원에서 3만1000원으로 6% 올린 바 있다. 다만 커피 가격은 동결했다.",
  },
];

const cakeList = document.querySelector(".cake-list");
const cakeListli = document.querySelector(".cake-list li");
const filterInput = document.querySelector(".filter");
const btnSelect = document.querySelectorAll(".btn-form button");

const detailWrap = document.querySelector(".detail-wrap");
const dim = document.querySelector(".dim");
const btnClose = document.querySelector(".btn-close");
const detailList = document.querySelector(".detail-list");

btnClose.addEventListener("click", function () {
  detailWrap.classList.remove("active");
  dim.style.display = "none";
});

// 현재 이벤트 문제
cakeList.addEventListener("click", function (e) {
  const listItem = e.target.closest("li"); // li를 특정시킨 함수
  if (listItem) {
    const index = parseInt(listItem.dataset.index); // 클릭 했을 때 li의 인덱스가 무엇인지 확인해보려는 함수이나, 현재 NaN으로 출력됨
    console.log(index);
    const selectedCake = cakeArr[index];
    updateCakeDatail(selectedCake);
  }
});

// 클릭했을 때 dim 음영 처리 및 detail-img, detail-info (하위 dt + dd가 존재)함수
function updateCakeDatail(cake) {
  const detailView = detailWrap.querySelector(".detail-view");
  const detailInfo = detailWrap.querySelector(".detail-info");

  detailView.innerHTML = `
  <img class="detail-img" src="${cake.detail_img}" alt="" />
  `;

  detailInfo.innerHTML = `
    <dt>${cake.detail_name}</dt>
    <dd>${cake.detail_desc}</dd>
  `;

  detailWrap.classList.add("active");
  dim.style.display = "block";
}

// 케이크 객체 배열을 돌면서 li 생성 함수
function displayAllCakes() {
  cakeArr.forEach((cake) => {
    const content = `<li>
  <figure>
    <img
      src="${cake.img}"
      alt=""
    />
  </figure>
  <dl>
    <dt>${cake.name}</dt>
    <dd>${cake.price}</dd>
  </dl>
  </li>
  `;
    cakeList.insertAdjacentHTML("beforeend", content);
  });
}
displayAllCakes();

// 케이크 카테고리별 버튼을 클릭할 때마다 동일 카테고리만 소팅되는 이베늩
btnSelect.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const filter = e.target.dataset.filter; //li에 date-filter를 부여한 상태
    console.log(filter);

    cakeList.innerHTML = "";
    if (filter === "all") {
      displayAllCakes();
    } else {
      cakeList.innerHTML = "";
      const filterCakes = cakeArr.filter((cake) => cake.category === filter);
      filterCakes.forEach((cake) => {
        const content = `<li>
        <figure>
          <img
            src="${cake.img}"
            alt=""
          />
        </figure>
        <dl>
          <dt>${cake.name}</dt>
          <dd>${cake.price}</dd>
        </dl>
        </li>
        `;
        cakeList.insertAdjacentHTML("beforeend", content);
      });
    }
  });
});

// input 값에 검색어를 입력 할 때 입력한 단어와 cakeArr 안에 있는 cake.name과 비교하면서 일치하면 그 부분만 소팅되는 이벤트
filterInput.addEventListener("keyup", function (e) {
  const searchFilter = e.target.value.toLowerCase().trim();
  cakeList.innerHTML = "";

  const filterCakes = cakeArr.filter((item) => {
    const searchWords = searchFilter.split(" ");
    return searchWords.every((word) => item.name.toLowerCase().includes(word));
  });

  filterCakes.forEach((cake) => {
    const content = `<li>
    <figure>
      <img
        src="${cake.img}"
        alt=""
      />
    </figure>
    <dl>
      <dt>${cake.name}</dt>
      <dd>${cake.price}</dd>
    </dl>
    </li>`;
    cakeList.insertAdjacentHTML("beforeend", content);
  });
});
