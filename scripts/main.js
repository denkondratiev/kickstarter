/* eslint-disable no-undef */
'use strict';

// Burger toggler
const burger = document.querySelector('.burger');
const navMobile = document.querySelector('.nav__mobile');

function toggleBurger() {
  burger.classList.toggle('burger--active');
  navMobile.classList.toggle('nav__mobile--active');
}

burger.addEventListener('click', toggleBurger);

// Technology slider
const techPhoto = document.querySelector('.technology__photo');
const prev = document.querySelector('.prev--technology');
const next = document.querySelector('.next--technology');
const gap = 300;

let position = -80;

function slideLeft(e) {
  position -= gap;

  if (Math.abs(position) > 1000) {
    position = -80;
  };

  techPhoto.style.transform = `translateX(${position}px)`;
};

function slideRight(e) {
  position += gap;

  if (position > 0) {
    position = -80;
  };

  techPhoto.style.transform = `translateX(${position}px)`;
};

next.addEventListener('click', slideLeft);
prev.addEventListener('click', slideRight);
// End technology slider

// Technology circles toggler
const circle = document.querySelectorAll('.circle');

function toggleTechnology(e) {
  e.target.classList.toggle('circle--active');
  e.target.parentElement.classList.toggle('square--active');
  e.target.nextElementSibling.classList.toggle('square__text--active');

  return false;
}

for (const item of circle.values()) {
  item.addEventListener('click', toggleTechnology);
}

// Form submit
$('.form').submit(function() {
  $('.success').addClass('success--active').hide().fadeIn();

  return false;
});

$('.success').click(function() {
  $('.success').removeClass('success--active').fadeOut('slow');
  $('.form').trigger('reset');

  return false;
});

$('.button--success').click(function() {
  $('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing');
});

// Slick slider
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
