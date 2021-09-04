// var isVisible = false;

// $(window).on('scroll',function() {
//     if (checkVisible($('#uxui'))&&!isVisible) {
//         alert("Visible!!!");
//         isVisible=true;
//     }
// });

// function checkVisible( elm, eval ) {
//     eval = eval || "object visible";
//     var viewportHeight = $(window).height(), // Viewport Height
//         scrolltop = $(window).scrollTop(), // Scroll Top
//         y = $(elm).offset().top,
//         elementHeight = $(elm).height();   
    
//     if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
//     if (eval == "above") return ((y < (viewportHeight + scrolltop)));
// }


//2차시도

// document.addEventListener('scroll',()=>{
//     var uxuiOffset = parseInt($('#uxui').offset().top);
//     var scrolltop = ($(window).scrollTop()-35);
    
//     if (scrolltop == uxuiOffset) {
//         alert("uxui!");
//     }
// })