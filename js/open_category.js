let isCategoryOpen = false;
function openCategory(){
    const category = document.querySelector('#category');
    const openCategoryBtn = document.querySelector('.nav-open-btn');

    isCategoryOpen = !isCategoryOpen;
    if(isCategoryOpen){
        category.style.visibility = 'visible';
        openCategoryBtn.style.transform = 'rotate(180deg)';
        openCategoryBtn.style.transition = '0.2s';
    }else{
        category.style.visibility = 'hidden';
        openCategoryBtn.style.transform = 'rotate(0deg)';
        openCategoryBtn.style.transition = '0.2s';
    }
}