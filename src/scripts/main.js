/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

$('.burger').click(function() {
  $(this).toggleClass('burger--active');
  $('.nav__mobile').toggleClass('nav__mobile--active');

  return false;
});

$('.form').submit(function() {
  $('.success').addClass('success--active').hide().fadeIn();

  return false;
});

$('.success').click(function() {
  $('.success').fadeOut('slow');
  $('.form').trigger('reset');

  return false;
});

$('.button--success').click(function() {
  $('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing');
});

$('.circle').click(function() {
  $(this).toggleClass('circle--active');
  $(this).parent().toggleClass('square--active');
  $(this).parent().toggleClass('square__text--active');

  return false;
});

$('.services').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 686,
      settings: 'unslick',
    },
  ],
});

$('.features__gallery').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  prevArrow: $('.features__prev'),
  nextArrow: $('.features__next'),
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 686,
      settings: 'unslick',
    },
  ],
});
