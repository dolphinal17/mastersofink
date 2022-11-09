$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbars').addClass("sticky");
        }else{
            $('.navbars').removeClass("sticky");
        }
    });

    // toggle menu/navbar script
    $('.dmenu-btn').click(function(){
        $('.navbars .menu').toggleClass("active");
        $('.dmenu-btn i').toggleClass("active");
    });
})