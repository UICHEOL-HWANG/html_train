# HTML 기초

## DAY 1

- HTML 기초

```html
<hn></hn>
```

- 콘텐츠가 제목의 의미일 때 사용
- h1이 가장 중요한 제목
- 헤딩은 검색엔진 로봇에게 중요한 정보 구성에 따라 적절하게 사용

```html
<p></p>
<p>텍스트를 모아서 붙여버리자</p>
```

- 록 요소를 포함 불가
- a,img등 인라인 요소와 텍스트만 포함

> lorem : 더미텍스트 소환
>
> > alt+Z : 자동 줄바꿈
> >
> > > Ctrl + Space : emmet 실행을 위한 단축키

````html
<br>
<!-- 강제 줄 바꾸기 -->
<p>Lorem ipsum dolor sit amet consectetur a
dipisicing elit. Odit minima itaque optio doloremque<br>
atque dolorum  molestiae adipisci vitae repellat reiciendis qui suscipit,
dolorem, pariatur sunt recusandae similique aliquam cumque maxime.
</p>
```html
<title>
  <!-- 웹 문서의 정보를 가리키는 것  -->
  <head>
    <!-- 웹문서의 정보를 집어넣음 -->
    <meta charset="UTF-8">
    <!-- 언어 지원 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--   -->
    <title>HTML 첫 번째 시간</title>
    <!-- 들여쓰기를 잘 해야 한다. -->
</head>
````

```html
<head>
  <!-- 문서의 시작과 끝을 의미하는 태그  -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>쓸쓸한 날에</title>
  </head>
</head>
```

body

- 내용물을 보관하는 보관소 같은 의미
- h~,br,p등 을 넣음

```html
<body>
  <h1>Hello World!</h1>
</body>
```

strong

```html
<p>
  <strong>날마다 하는 일을 바꾸지 않는 한 인생은 절대로 바뀌지 않는다.</strong>
</p>
```

img

- 문서를 이미지에 삽입

```html
<p>
  <strong>날마다 하는 일을 바꾸지 않는 한 인생은 절대로 바뀌지 않는다.</strong>
</p>
```

> 상대경로 <-> 절대경로

```html
<상대경로>
<img src="vision.png" alt="vision.png" />
<!-- 이미지 태그의 속성이 2개가 존재한다  -->

<절대경로>
<img src="https://i.ytimg.com/vi/QS7ic8y4Cr8/maxresdefault.jpg" alt="허윤진" />

기준이 바뀌지 않는다 → 페이지 안에서만 존재 (절대경로) 기준이 바뀐다 → 페이지를
바뀌어도 존재한다 (상대경로)
```

! figure

- 사진,도표,삽화,오디오,비디오,코드 등을 담는 컨테이너
- 보통 alt에서 못 다한 설명을 다해줌

```html
<figure>
  <img src="이미지" alt="블랙핑크" />
  <figcaption>노래하는 블랙핑크</figcaption>
</figure>
```

! a

- 하이퍼링크를 연결하기 위한 태그

```html
<a href="url"> <!-- wrap으로 감쌀 수 있음 --> </a>
```

> a 태그 안에서 target = “\_blank”는 새 페이지로 이동시키는 명령어

## DAY2

```html
<ul>
  - 비 순서형 목록 : 순서가 중요하지 않은 목록 - 예) 비슷한 태그끼리 묶어 놓음
  요리재료,기사목록 ..
  <ul>
    <li>하위 태그</li>
  </ul>
  <!-- 보통 이런식으로 부모와 자식으로 묶임 -->
</ul>
```

ol

- 순서형 리스트
- 실시간 검색 순위 성적등을 나열 할 때 사용

```html
<ol>
  <li>li는 list item란 뜻</li>
</ol>
```

dl

- 정의형 목록
- 용어 제목, 용어 설명 등

```html
<dl>
  <dt>용어</dt>
  <dd>설명</dd>
</dl>
```

## ul,li 중첩 사용시 주의사항

- ul,ol은 자식요소로 li만 넣을 수 있음

```html
<ul>
  <ol></ol>
</ul>
X 사용할수 없음

<ul>
  <li>
    <ol></ol>
  </li>
</ul>
O 사용가능
```

- HTML 태그 정리 ❗

  - 태그는 컨텐츠에 의미를 부여하는 행위
  - 태그별로 의미가 있다.
  - h1~h6 (hn) : 제목의 의미
  - p : 문단( 글 덩어리)
  - br : 줄바꿈을 위해 사용
  - img : 이미지 삽입 src = 루트를 통해 상대,절대로 나뉜다 → figure > img 보통은 이런 형식으로 쓰인다.
  - a : 링크 삽입
  - strong : 내용 강조를 위해 사용 (em도 혼용 / 약한강조)
  - ul>li : 순서는 상관 없이 아이템끼리의 연관성이 있을 때
  - ol>li : 순서가 중요 하고 아이템끼리의 연관성도 있을 때
  - dl>dt+dd : dt에 대한 설명 dd

  > 강조사항
  > emmet 단축어 사용시

> > 꺽쇠 사용하고 이후 부모자식간의 관계가 아닌 그 다음 태그로 설정하기 위해서는 연산자 우선순위를 사용해야함

예)

```html
<!-- ol>li*3(figure>img)+dl>dt+dd -->
<ol>
    <li>
      <figure><img src="" alt=""></figure>
      <dl>
        <dt>
          <dd></dd>
        </dt>
      </dl>
    </li>
    <li>
      <figure><img src="" alt=""></figure>
      <dl>
        <dt>
          <dd></dd>
        </dt>
      </dl>
    </li>
    <li>
      <figure><img src="" alt=""></figure>
      <dl>
        <dt>
          <dd></dd>
        </dt>
      </dl>
    </li>
  </ol>
O 올바른 예

<!-- ol>li*3>figure>img+dl>dt>dD -->
<ol>
    <li>
      <figure>
        <img src="" alt="">
        <dl>
          <dt>
            <dD></dD>
          </dt>
        </dl>
      </figure>
    </li>
    <li>
      <figure>
        <img src="" alt="">
        <dl>
          <dt>
            <dD></dD>
          </dt>
        </dl>
      </figure>
    </li>
    <li>
      <figure>
        <img src="" alt="">
        <dl>
          <dt>
            <dD></dD>
          </dt>
        </dl>
      </figure>
    </li>
  </ol>

<!-- 보면 dl이 figure 자식으로 승계가 되었음 -->
```

### - 선택자

— 웹페이지의 제목, 문단, 링크, 목록, 이미지 요소들을 선택

- 전체 선택자 : \*
- 요소 선택자 : 요소(태그) 이름
- class , id : 작업자 전용
- 기타 선택자 : 자식. 형제,속성 ,가상 요소,가상 클래스

가상 클래스

```css
a:link {
  color: blue;
} /* 특정 링크에 적용 */
a:visted {
  color: gray;
} /* 링크 눌렀을 경우 */
a:hover {
  color: gray;
} /* 만약 마우스 오버가 됐을 경우 */
a:active {
  color: gray;
}
```

### 선택자 조합

```css
div > a {
  color: black;
}

/* div 자식인 a 태그다 싶은 것들에게 일괄적으로 적용 */
```

필수 암기 css 옵션

```css
flex
position absolute relative
margin 0 auto; <-> 가운데 정렬
min-hegiht : 최소한 넓어지게 만듦
```

---

## DAY3

### 마진 margin

- 마진(margin)은 현재 요소 주변의 여백 공간을 의미합니다. 마진을 조절하면 현재 요소와 다른 요소간의 공간을 조절할 수 있습니다.

중요 부분
!!

1. Box-Model

   - 대부분의 태그는 블록과 인라인으로 나뉨
   - 블록은 부모 기준 가로 크기 100%를 상속 받는다.
   - 세로크기는 자손의 크기의 합
   - 인라인은 자신이 감싸고 있는 콘텐츠 만큼의 가로 크기
   - 오직 블록만 중요한 디자인을 적용할 수 있다. (레이아웃을 결정지음 / 크기/ 여백 결정)
   - **오직 블록만 크기와 여백을 적용 가능**

   🚨 인라인은 블록을 감쌀 수 없음

   🚨 그렇지만 인라인 ↔ 블록 서로 트랜스가 가능

2. diplay:flex → 요소를 가로(혹은 세로)로 배치 하고 싶을 때

   - 배치시킬 요소의 부모에게 주는 명령
   - 배치될 요소를 flex에 item이라 부른다. (flex item)
   - 배치 시키는 부모 요소를 flex의 컨테이너라고 부른다. (flex container)

   - flex 실행시 : 부모 요소가 flex container가 되면 축이 생긴다
   - 메인축이라고 부름
   - 메인축의 기본 방향을 가로(row) ← flex item은 그 메인축을 기준으로 배치가 됨
   - 항상 메인축과 반대되는 축도 생겨난다, 그 축을 교차축이라고 한다.
   - 메인 축 방향의 정렬 : justify-content
   - 교차 축 방향의 정렬 : align-item

3. position : absolute → 요소를 겹쳐 놓고 싶을 때, 혹은 원하는 곳 어디나 놓고 싶을 때

- CSS X축 Y축을 동시에 표시하는 경우 : 항상 X가 먼저 언급된다.
