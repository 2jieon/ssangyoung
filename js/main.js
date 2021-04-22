
$(document).ready(function(){
    
    //슬릭
    //con02
    $('.center').slick({
      centerMode: true,
      autoplay: true,
      swipeToSlide: true,  
      dots: true,    
      centerPadding: '60px',
      slidesToShow: 3.65,
      pauseOnHover: false,
    });
    
    //con03
    $('.con03List').slick({
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear', 
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: false,
    });
    
    //con04
    $('.con04List').slick({
        variaBleWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear', 
        slidesToShow: 1.5,//height이상해서con03SlideSize랑비슷하게눈대중으로줌
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: false,
    });
    
    //main_slider_hover
    $('.hovBox').eq(0).hover(function(){
        $('.mainSlider').css('background', "url('images/main/mainSlidBg03.png')");
    });
    $('.hovBox').eq(1).hover(function(){
        $('.mainSlider').css('background', "url('images/main/mainSlidBg00.png')");
    });
    $('.hovBox').eq(2).hover(function(){
        $('.mainSlider').css('background', "url('images/main/mainSlidBg02.png')");
    });
    $('.hovBox').eq(3).hover(function(){
        $('.mainSlider').css('background', "url('images/main/mainSlidBg04.png')");
    });
    

//WOW
new WOW().init();
    
});