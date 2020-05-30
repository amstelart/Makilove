// Если на проекте jQuery
$(document).ready(function () {

    $('[data-toggle="datepicker"]').datepicker({
      language: 'ru-RU'
    });

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
    var custom_values = [9, 21, 31, 41, 51];
    $(".js-range-slider").ionRangeSlider({
      skin: "round",
      type: "single",
      step: 2,
      min: 9,
      max: 51,
      grid: true,
      values: custom_values
  });


  $('.rev-c__carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    fade: false
  });
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '0px',
    infinite: true,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
});