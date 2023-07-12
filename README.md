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
