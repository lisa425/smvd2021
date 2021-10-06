//scroll 유도 화살표.
function removeScrollArrow(){
	const scroll_arrow = document.getElementById('scroll_arrow');
	scroll_arrow.classList.remove('scroll_arrow');
}

//scroll에 따라 카테고리 밑줄 쳐지는 event
let yOffset = 0; //window.pageYOffset 역할
let prevScrollHeight = 0; //현재 스크롤 위치보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
let currentScene = 0; //현재 활성화된 씬(scroll section)
function setScrollUnderline(){
	//*********************변경*********************
    const categoryInfo = [
        {
            container:document.getElementById('branding'),
            scrollheight: 0
        },
        {
            container: document.getElementById('editorial'),
            scrollheight: 0
        }, 
        {
            container: document.getElementById('uxui'),
            scrollheight: 0
        }, 
        {
            container: document.getElementById('motion'),
            scrollheight: 0
        }, 
		{
            container:document.getElementById('graphic'),
            scrollheight: 0
        },
		{
            container: document.getElementById('game'),
            scrollheight: 0
        }, 
        {
            container: document.getElementById('illustration'),
            scrollheight: 0
        }
    ]

    function setLayout(){
		//각 스크롤 섹션 높이 세팅
		for (let i=0; i<categoryInfo.length; i++){
			categoryInfo[i].scrollheight = categoryInfo[i].container.clientHeight;
		}

		yOffset = window.pageYOffset;
		let totalScrollHeight = 0;
		for(let i = 0; i<categoryInfo.length; i++){
			totalScrollHeight += categoryInfo[i].scrollheight;
			if(totalScrollHeight >= yOffset){
				currentScene = i;
				break;
			}
		}
		document.body.setAttribute('id',`show-category-${currentScene}`);
	}

	//현재 보여주고 있는 카테고리의 값 설정
	function scrollLoop(){
		prevScrollHeight = 0;
		for(let i = 0; i < currentScene; i++){
			prevScrollHeight += categoryInfo[i].scrollheight;
		}

		if(yOffset > prevScrollHeight + categoryInfo[currentScene].scrollheight){
			currentScene++;
		}
		if(yOffset < prevScrollHeight){
			if(currentScene === 0) return; //바운스 효과로 인해 마이너스가 되는 것 방지
			currentScene--;
		}
		document.body.setAttribute('id',`show-category-${currentScene}`);
	}

	window.addEventListener('load',setLayout());
	window.addEventListener('resize',setLayout());
	window.addEventListener('scroll',()=>{
		yOffset = window.pageYOffset;
		scrollLoop();
		removeScrollArrow();
	})
};

//카테고리 버튼 클릭 시 현재 씬 변경
//*********************변경*********************
function clickCategory(id){
	switch(id){
		case 'branding_nav':
			currentScene = 0;
			document.body.setAttribute('id',`show-category-0`);
			break;
		case 'editorial_nav':
			currentScene = 1;
			document.body.setAttribute('id',`show-category-1`);
			break;
		case 'uxui_nav':
			currentScene = 2;
			document.body.setAttribute('id',`show-category-2`);
			break;
		case 'motion_nav':
			currentScene = 3;
			document.body.setAttribute('id',`show-category-3`);
			break;
		case 'graphic_nav':
			currentScene = 4;
			document.body.setAttribute('id',`show-category-4`);
			break;
		case 'game_nav':
			currentScene = 5;
			document.body.setAttribute('id',`show-category-5`);
			break;
		case 'illustration_nav':
			currentScene = 6;
			document.body.setAttribute('id',`show-category-6`);
			break;
	}
}

function removeScrollEvent(){
	document.body.removeAttribute('id',`show-category-0`);

	const graphic_nav = document.getElementById('graphic_nav');
	const branding_nav = document.getElementById('branding_nav');
	const editorial_nav = document.getElementById('editorial_nav');
	const uxui_nav = document.getElementById('uxui_nav');
	const game_nav = document.getElementById('game_nav');
	const motion_nav = document.getElementById('motion_nav');
	const illustration_nav = document.getElementById('illustration_nav');

	graphic_nav.removeAttribute("onclick");
	branding_nav.removeAttribute("onclick");
	editorial_nav.removeAttribute("onclick");
	uxui_nav.removeAttribute("onclick");
	game_nav.removeAttribute("onclick");
	motion_nav.removeAttribute("onclick");
	illustration_nav.removeAttribute("onclick");
}

function detectMobileDevice(agent) {
  const mobileRegex = [
    /Android/i,
    /iPhone/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ]
  return mobileRegex.some(mobile => agent.match(mobile))
}


//모바일이면 스크롤 이벤트를 제거, 웹이나 탭이면 스크롤 이벤트 활성화
const isMobile = detectMobileDevice(window.navigator.userAgent);
if (isMobile || window.innerWidth < 481) {
	removeScrollEvent();
} else {
	setScrollUnderline();
}