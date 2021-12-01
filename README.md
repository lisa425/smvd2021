# 2021 SMVD GRADUATION EXHIBITION WEBSITE
>[전시 사이트 바로가기](http://smvdgradshow.com/2021)
<p>2021년도 숙명여자대학교 시각영상디자인과 온라인 졸업전시회 웹사이트의 전체 프론트엔드 구현 작업 및 기획,디자인 진행을 담당하였습니다.</p>

## 사용 기술
### ⚙️ Front-end ⚙️
<div>
  <img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JAVASCRIPT&logoColor=white"/>
</div>
HTML,CSS,JavaScript만을 이용하여 전체 페이지 레이아웃과 인터랙션을 구현하였습니다.<br>

### ⚙️ Back-end ⚙️
<div>
<img src="https://img.shields.io/badge/PHP-1572B6?style=flat-square&logo=PHP&logoColor=white"/>
</div>
PHP를 이용하여 구현하였습니다.

## 기여도
<b>프론트엔드 : 100%</b><br>
> 디자인 : 50%<br>
> 기획 : 50%

## 구현 내용
### 1.인트로 오픈 인터랙션(open intro interaction)
✅ 메인 페이지에서 우측의 바 클릭 시 박스가 열리며 전시 개요의 내용을 보여주는 인터랙션을 구현하였습니다.
- 기본적으로 width를 0으로 설정해둔 다음, 클릭 시 해당 div의 width가 화면에 맞게 설정되는 이벤트를 구현했습니다.
- 박스가 열린 후 브라우저 resizing 이벤트 발생 시 브라우저 크기에 맞춰 박스의 크기를 조절하는 기능을 구현하여,사용자가 브라우저 사이즈를 조절하더라도 박스 컨트롤이 가능하도록 하였습니다.
- 열림/닫힘 상태에 따라 화살표의 방향이 0도,180도로 회전하여 열림/닫힘 상태를 알릴 수 있는 기능을 구현하였습니다.
- 모바일 디자인을 반영하여 모바일 사이즈에서는 height가 길어지는 이벤트를 발생시키도록 반응형 이벤트 기능을 구현하였습니다.

### 2.작품 스크롤 인터랙션(scroll event)
✅ 전시 작품 리스트 페이지에서 스크롤이 어느 카테고리의 섹션에 있는지에 따라 좌측 카테고리에 밑줄이 생기는 이벤트입니다.
- 자바스크립트에서 화면 전체의 height를 구하고,각 섹션의 height를 구한 다음, 각 섹션의 스크롤 위치를 자바스크립트 object 형식으로 저장합니다. 
- 사용자 스크롤이 해당 섹션들의 스크롤 높이에 위치할 때 마다 현재 어느 카테고리에 위치해 있는지를 카테고리 섹션 id명과 동일한 값으로 반환합니다.
- 반환된 값에 따라 카테고리 메뉴에 밑줄이 쳐집니다.</p>

### 3.반응형 웹(responsive web)
✅ 미술대학 졸업전시회 특성상 사용자들의 접속 환경이 매우 다양할 것을 고려하여 전체 웹페이지를 반응형으로 제작하였습니다.
- 웹 디자인이 컨셉츄얼한 디자인으로 구성된 관계로 고정된 px 그리드가 존재하지 않아, 페이지를 구성하는 요소들의 width,height,font-size 등을 모두 viewport 기준으로 계산되도록 vw,vh단위를 적극 사용하여 반응형으로 제작했습니다. 이를 통해 다양한 스크린 사이즈에서도 디자인이 깨지지 않고 호환될 수 있었습니다.  
- 작품 리스트 페이지는 기본적으로 hover를 통해 작품 정보를 볼 수 있도록 디자인 및 구현했습니다. 그러나 태블릿 및 모바일에서는 hover가 불가능한 점을 고려하여 작품 정보가 썸네일 밖으로 나타나도록 반응형 구현을 하였습니다.
- 이 외에도 모바일 크기의 전반적인 디자인 변경사항을 모두 CSS의 미디어 쿼리를 이용해 반응형으로 제작했습니다.

### 4.오픈 카운트다운(countdown)
✅ 오픈 전 접속자들의 전시 접근을 막고 전시 일정을 안내하기 위한 D-day 카운트다운 페이지를 구현하였습니다.
- Date 객체를 생성하고 해당 시간을 연산하여 이를 각각 d-day, 남은 시간으로 계산해 화면에 출력하도록 구현했습니다.

