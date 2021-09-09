let content_width = window.innerWidth - 195;

window.addEventListener('resize',function(event){
    content_width = window.innerWidth - 195;
},true);

const label = document.getElementById('label');
const content = document.getElementById('content');
const arrow = document.getElementById('entry-arrow');
let isOpen = false;

label.onclick = () => {
    if(isOpen){
        content.style.width=0+'px';
        content.style.visibility='hidden';
        isOpen = false;
        arrow.style.transform='rotate('+180+'deg)';
    }else{
        content.style.width = content_width+'px';
        content.style.visibility='visible';
        isOpen = true;
        arrow.style.transform='rotate('+0+'deg)';
    }
}

