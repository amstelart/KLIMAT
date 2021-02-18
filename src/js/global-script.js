// Если на проекте jQuery
$( document ).ready(function() {
  // code
  $('.header-nav__toggler').click(function(event) {
    $('.header-nav__toggler, .header-nav').toggleClass('active');
    $('body').toggleClass('lock');
  });

  // fix top-menu
  var shrinkHeader = 150;
  var head = $('.page-header');
  var heightHeader = head.height();
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    if ( scroll >= shrinkHeader ) {
        // $('body').css('paddingTop',heightHeader);
        head.addClass('shrink');
      }
      else {
          // $('body').css('paddingTop',0);
          head.removeClass('shrink');
      }
  });
  // fix top-menu === end

  $('.product-box__carousel').slick({
    arrows:true,
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: 'dots-style',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.brand__carousel').slick({
    arrows:false,
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.brand-left').click(function(){
    $('.brand__carousel').slick('slickPrev');
  });

  $('.brand-right').click(function(){
    $('.brand__carousel').slick('slickNext');
  });

  'use strict';
  $(window).on('ariaAccordion.initialised', function (event, element) {
    console.log('initialised');
  });

  $('.accordion-group').ariaAccordion({
    contentRole: ['document', 'application', 'document'],
    slideSpeed: 400
  });
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
