(()=>{
	//scroll 유도 화살표.
	function removeScrollArrow(){
		const scroll_arrow = document.querySelector('#scroll_arrow');
		scroll_arrow.classList.remove('scroll_arrow');
	}

	//scroll에 따라 카테고리 밑줄 쳐지는 event
    let yOffset = 0; //window.pageYOffset 역할
	let prevScrollHeight = 0; //현재 스크롤 위치보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
	let currentScene = 0; //현재 활성화된 씬(scroll section)

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
})();