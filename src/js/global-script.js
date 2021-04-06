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
    arrows:false,
    dots: false,
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

  $('.product-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.product-carousel-nav'
  });
  $('.product-carousel-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-carousel',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
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

  // range-slider
  $(function () {

    var $range = $(".js-range-slider"),
      $inputFrom = $(".js-input-from"),
      $inputTo = $(".js-input-to"),
      instance,
      min = 0,
      max = 100000,
      from = 0,
      to = 0;

    $range.ionRangeSlider({
      type: "double",
      skin: "round",
      min: min,
      max: max,
      from: 0,
      to: 100000,
      hide_min_max: true,
      hide_from_to: true,

      onStart: updateInputs,
      onChange: updateInputs,
      step: 100,
      prettify_enabled: true,
      prettify_separator: ".",
      values_separator: " - ",
      force_edges: true
    });

    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
      from = data.from;
      to = data.to;

      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function () {
      var val = $(this).prop("value");

      // validate
      if (val < min) {
        val = min;
      } else if (val > to) {
        val = to;
      }

      instance.update({
        from: val
      });
    });

    $inputTo.on("input", function () {
      var val = $(this).prop("value");

      // validate
      if (val < from) {
        val = from;
      } else if (val > max) {
        val = max;
      }

      instance.update({
        to: val
      });
    });

  });
});

(function( $ ){
  $.fn.appendAround = function(){
    return this.each(function(){

      var $self = $( this ),
          att = "data-set",
          $parent = $self.parent(),
          parent = $parent[ 0 ],
          attval = $parent.attr( att ),
          $set = $( "["+ att +"='" + attval + "']" );

      function isHidden( elem ){
        return $(elem).css( "display" ) === "none";
      }

      function appendToVisibleContainer(){
        if( isHidden( parent ) ){
          var found = 0;
          $set.each(function(){
            if( !isHidden( this ) && !found ){
              $self.appendTo( this );
              found++;
              parent = this;
            }
          });
        }
      }

      appendToVisibleContainer();

      $(window).bind( "resize", appendToVisibleContainer );

    });
  };
}( jQuery ));

$( function(){
  $( document ).trigger( "enhance" );

  $( '#left' ).offcanvas( {
    modifiers: "left,overlay",
    triggerButton: '.js-offcanvas-toggler',
    onInit :  function() {
      $(this).removeClass('is-hidden');
    }
  } );
  $( ".filter-group" ).appendAround();
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
