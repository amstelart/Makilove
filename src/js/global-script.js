(function(a){a.fn.rating=function(b){b=b||function(){};this.each(function(d,c){a(c).data("rating",{callback:b}).bind("init.rating",a.fn.rating.init).bind("set.rating",a.fn.rating.set).bind("hover.rating",a.fn.rating.hover).trigger("init.rating")})};a.extend(a.fn.rating,{init:function(h){var d=a(this),g="",j=null,f=d.children(),c=0,b=f.length;for(;c<b;c++){g=g+'<a class="star" title="'+a(f[c]).val()+'" />';if(a(f[c]).is(":checked")){j=a(f[c]).val()}}f.hide();d.append('<div class="stars">'+g+"</div>").trigger("set.rating",j);a("a",d).bind("click",a.fn.rating.click);d.trigger("hover.rating")},set:function(f,g){var c=a(this),d=a("a",c),b=undefined;if(g){d.removeClass("fullStar");b=d.filter(function(e){if(a(this).attr("title")==g){return a(this)}else{return false}});b.addClass("fullStar").prevAll().addClass("fullStar")}return},hover:function(d){var c=a(this),b=a("a",c);b.bind("mouseenter",function(f){a(this).addClass("tmp_fs").prevAll().addClass("tmp_fs");a(this).nextAll().addClass("tmp_es")});b.bind("mouseleave",function(f){a(this).removeClass("tmp_fs").prevAll().removeClass("tmp_fs");a(this).nextAll().removeClass("tmp_es")})},click:function(g){g.preventDefault();var f=a(g.target),c=f.parent().parent(),b=c.children("input"),d=f.attr("title");matchInput=b.filter(function(e){if(a(this).val()==d){return true}else{return false}});matchInput.attr("checked",true);c.trigger("set.rating",matchInput.val()).data("rating").callback(d,g)}})})(jQuery);

// Если на проекте jQuery
$(document).ready(function () {

    $('#star-rating').rating();

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

    // mobile menu
    $('.top-header__search-link').click(function(e){
        e.preventDefault();
        // $(this).toggleClass('burger--close');
        $('.page-backdrop').toggleClass('page-backdrop__open');
        $('.page-header').toggleClass('page-header--search');
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
  $('.nav-carousel').slick({
    dots: false,
    infinite: true,
    variableWidth: true,
    centerPadding: '45px'
  });

  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    fade: false
  });

  $('.zoom').zoom();

  // mobile-menu
  $('.mobile-menu .sub-menu ul').hide();
  $(".mobile-menu .sub-menu a").click(function () {
    $(this).parent(".mobile-menu .sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });

  $('.product-structure .product-structure__caption').hide();
  $('.product-structure .product-structure__btn').click(function(e){
    e.preventDefault();
    $(".product-structure .product-structure__caption").slideToggle("100");
  });
  
});


"use strict";

var fields = document.querySelectorAll('.field-num');

if (fields.length) {
  Array.prototype.forEach.call(fields, function (field) {
    var input = field.querySelector('.field-num__input');
    var valueMin = input.getAttribute('min') ? +input.getAttribute('min') : -Infinity;
    var valueMax = input.getAttribute('max') ? +input.getAttribute('max') : Infinity;
    var valueStep = input.getAttribute('step') ? +input.getAttribute('step') : 1;
    field.addEventListener('click', function (event) {
      if (event.target.classList.contains('field-num__btn') && !input.getAttribute('disabled')) {
        var num = parseInt(input.value);
        if (isNaN(num)) num = 0;

        if (event.target.classList.contains('field-num__btn--plus')) {
          if (num < valueMax) input.value = num + valueStep;
        }

        if (event.target.classList.contains('field-num__btn--minus')) {
          if (num > valueMin) input.value = num - valueStep;
        }
      }
    });
  });
}