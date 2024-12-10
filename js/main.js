//   navbar function 
$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(Window).scrollTop()  >  30){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
    });

    
});
// Wait for the entire page to load
// Wait for the page to load
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    // Set a 10-second delay before hiding the loader
    setTimeout(function () {
        loader.style.display = "none";
    },5000); // 10000ms = 10 seconds
});
