

# 😉 버거킹 클론 사이트


html, css, javascript, react를 연습하기위해 만든 버거킹 클론 사이트 입니다. 

<br>
<br>

 `#버거킹` 



---

<br>

# 📖 Contents

- [😉 EASYME.md](#-easymemd)
- [📖 Contents](#-contents)
- [🌈 Background](#-background)
- [🔗 Link](#-link)
- [🛠 Features](#-features)
- [📈 Release Note](#-release-note)
- [🪃 Skills](#-skills)
- [🪛 Project Control](#-project-control)
- [🧗 Challenges](#-challenges)
  - [1. swiper-slider-라이브러리-사용하기](#1-swiper-slider-라이브러리-사용하기)
  - [2. 주문예약내역-기능-구현](#2-주문예약내역-기능-구현)



<br>

# 🌈 Background
html, css, javascript를 막 배우기 시작할때 연습하기 위해 만든 클론사이트입니다. <br> 
평소에 자주먹는 버거킹을 따라하고 싶어서 버거킹사이트로 정했습니다.

<br>

# 🔗 Link

- [https://legendary-marshmallow-aacddc.netlify.app/]


# 🛠 Features
- Screen
    - 상단에는 다양한 메뉴바가 있습니다.
    - 메뉴바로 마우스를 가져가면 다양한 하위 메뉴바가 나타납니다.
    - 홈 화면에서 유튜브 광고동영상을 볼 수 있습니다.
    - 홈 화면에서 메인 이미지가 자동으로 옆으로 넘어갑니다.
    - 오른쪽 상단에서 회원가입/로그인을 할 수 있습니다. 
    - 주문/예약내역을 확인 할 수 있습니다.
    - 신제품/프리미엄 메뉴로 이동시 각 메뉴를 보여줍니다.

<br>

# 📈 Release Note
| version | log |
| --- | --- |
| 0.1.0 | 프리미엄/신제품 데이터 추가 |
| ~ 0.0.1 | 주문/예약내역 기능추가 |

<br>

# 🪃 Skills

## Client
- Html
- Javascript
- React
- Redux

<br>

## Server

- Nodemon
- netlify

<br>

# 🪛 Project Control

- Version Control: Git, Github

<br>

# 🧗 Challenges

대략 50일 동안 기능 개발을 하면서 겪은 어려움 또는 도전은 아래와 같습니다.

<br>



## 1 swiper-slider 라이브러리 사용하기

처음 html/css/javascript를 막 배우기 시작하고 처음으로 사용한 라이브러리가 swiper-slider라는 라이브러리 였습니다. <br>
처음으로 사용한 라이브러리라 그런지 복붙하고 가져다 쓰는것도 힘들었습니다. 하지만 기본적으로 똑같은 html구조라는걸 알고 복붙하고 조금씩 작동하는 화면을 보면서 힘을얻고 다양한 기능을 추가할 수 있게 되었습니다.

<br>



## 2. 주문/예약내역 기능 구현

주문/예약내역을 구현할때 처음으로 redux를 사용해봤습니다. 처음 써보는 reducer와 store는 어렵게 느껴지고 지금당장은 필요 없어보였지만, <br>
프로젝트의 규모가 커졌을 때 보이는 컴포넌트의 개수가 늘어나면서 다루는 데이터도 늘어나고 그 데이터를 업데이트하는 함수들도 늘어나면 앞으로 도움이 될거라 생각하고 써봤습니다.<br>
리듀서 함수는 두 가지의 파라미터를 받는데 state는 현재 상태,  action는 액션 객체로 위의 두가지 파라미터를 참조하여 새로운 상태 객체를 만들어 반환하는걸 알았습니다.
action객체를 이용 아이템을 누르면 장바구니에 추가해줬고, 장바구니에서 +버튼을 누르면 개수를 늘려줬습니다. dispatch로 데이터 상태를 업데이트하고 payload로 액션에 따라 데이터로 사용되는 값

<br><br><br><br>

  







