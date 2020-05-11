// Если на проекте jQuery
$(document).ready(function () {

    // mobile menu
    $('.main-nav__toggler').click(function(e){
        e.preventDefault();
        // $(this).toggleClass('burger--close');
        $('.page-backdrop').toggleClass('page-backdrop__open');
        $('.page-overlay').toggleClass('page-overlay__open');
      });
    // ./mobile menu

    //   main-slider
    $('.gallery-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        asNavFor: '.gallery-slider-nav'
      });
      $('.gallery-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.gallery-slider-for',
        dots: false,
        arrows: false,
        centerMode: false,
        vertical: true,
        infinite: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                centerMode: false,
                infinite: true,
                centerMode: false,
                vertical: false,
              }
            },
            {
              breakpoint: 510,
              settings: {
                slidesToShow: 2,
                centerMode: false,
                infinite: true,
                centerMode: false,
                vertical: false,
              }
            }
      
          ]
      });
    //   ./main-slider
});