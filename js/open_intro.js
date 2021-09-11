(() => {
    let content_width = window.innerWidth - 195;

    window.addEventListener('resize',function(event){
        if(isOpen){
            //개요 창이 열려있는 경우, 박스 안의 컨텐츠 너비를 창이 resize 될 때 마다 조절한다.
            content_width = window.innerWidth - 195;
            content.style.width = content_width+'px';
        }
    },true);

    const label = document.getElementById('label'); //주황색 label
    const content = document.getElementById('content'); //전시 개요 내용
    const arrow = document.getElementById('entry-arrow'); //label 하단 화살표
    let isOpen = false; //개요 창이 열려있는지 판별

    label.onclick = () => {
        if(isOpen){
            //열린 상태에서 클릭->close
            content.style.width=0+'px';
            content.style.visibility='hidden';
            isOpen = false;
            arrow.style.transform='rotate('+180+'deg)';
        }else{
            //닫힌 상태에서 클릭->open
            content.style.width = content_width+'px';
            content.style.visibility='visible';
            isOpen = true;
            arrow.style.transform='rotate('+0+'deg)';
        }
    }
})();
