//scroll 유도 화살표.
function removeScrollArrow(){
	const scroll_arrow = document.querySelector('#scroll_arrow');
	scroll_arrow.classList.remove('scroll_arrow');
}


let yOffset = 0; //window.pageYOffset 역할
let prevScrollHeight = 0; //현재 스크롤 위치보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
let currentScene = 0; //현재 활성화된 씬(scroll section)
function setScrollUnderline(){
	//scroll에 따라 카테고리 밑줄 쳐지는 event
    const categoryInfo = [
        {
            container:document.querySelector('#graphic'),
            scrollHeight: 0
        },
        {
            container:document.querySelector('#branding'),
            scrollHeight: 0
        },
        {
            container: document.querySelector('#editorial'),
            scrollHeight: 0
        }, 
        {
            container: document.querySelector('#uxui'),
            scrollHeight: 0
        }, 
        {
            container: document.querySelector('#game'),
            scrollHeight: 0
        }, 
        {
            container: document.querySelector('#motion'),
            scrollHeight: 0
        }, 
        {
            container: document.querySelector('#illustration'),
            scrollHeight: 0
        }
    ]

    function setLayout(){
		//각 스크롤 섹션 높이 세팅
		for (let i=0; i<categoryInfo.length; i++){
			categoryInfo[i].scrollHeight = categoryInfo[i].container.clientHeight;
		}

		yOffset = window.pageYOffset;
		let totalScrollHeight = 0;
		for(let i = 0; i<categoryInfo.length; i++){
			totalScrollHeight += categoryInfo[i].scrollHeight;
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
			prevScrollHeight += categoryInfo[i].scrollHeight;
		}

		if(yOffset > prevScrollHeight+categoryInfo[currentScene].scrollHeight){
			currentScene++;
		}
		if(yOffset < prevScrollHeight){
			if(currentScene === 0) return; //바운스 효과로 인해 마이너스가 되는 것 방지
			currentScene--;
		}
		document.body.setAttribute('id',`show-category-${currentScene}`);
	}


	window.addEventListener('resize',setLayout());
	window.addEventListener('scroll',()=>{
		yOffset = window.pageYOffset;
		scrollLoop();
		removeScrollArrow();
	})
	window.addEventListener('load',setLayout);
	window.addEventListener('resize',setLayout);
};

//카테고리 버튼 클릭 시 현재 씬 변경
function clickCategory(id){
	switch(id){
		case 'graphic_nav':
			currentScene = 0;
			document.body.setAttribute('id',`show-category-0`);
			break;
		case 'branding_nav':
			currentScene = 1;
			document.body.setAttribute('id',`show-category-1`);
			break;
		case 'editorial_nav':
			currentScene = 2;
			document.body.setAttribute('id',`show-category-2`);
			break;
		case 'uxui_nav':
			currentScene = 3;
			document.body.setAttribute('id',`show-category-3`);
			break;
		case 'game_nav':
			currentScene = 4;
			document.body.setAttribute('id',`show-category-4`);
			break;
		case 'motion_nav':
			currentScene = 5;
			document.body.setAttribute('id',`show-category-5`);
			break;
		case 'illustration_nav':
			currentScene = 6;
			document.body.setAttribute('id',`show-category-6`);
			break;
	}
}

setScrollUnderline();