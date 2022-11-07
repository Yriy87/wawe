$(function () {
  
  $(".menu a, .footer__logo").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.slider-blog__inner').slick({
    dots:true,
    prevArrow: false,
    nextArrow: false,
  });

  $('.menu__btn').on('click',function(){
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });

  var mixer = mixitup('.gallery__content');
});
