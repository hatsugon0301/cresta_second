// スティッキーヘッダー
$(function(){
  
  var mvHeight = $('.mv').outerHeight();
  
  $(window).on('load scroll',function(){

  if($(this).scrollTop() > mvHeight ){
    $('header').addClass('fixed');
  } else{
    $('header').removeClass('fixed');
  }
});

});/*jquery*/

// スライダー
$('.slider').slick({
autoplay: true,
autoplaySpeed: 2000,
speed: true,
cssEase: 'linear'
});

// ハンバーガーメニュー
$('.burger-btn').on('click',function() {
 $('.headerInner-nav').fadeToggle(300);
 $(this).toggleClass('cross');
 $('body').toggleClass('noscroll');
});
