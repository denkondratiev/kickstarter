/* eslint-disable no-undef */
'use strict';

$('.form').submit(function() {
  $('.form__success').addClass('form__success--active').hide().fadeIn();

  setTimeout(function() {
    $('.form__success').removeClass('form__success--active').fadeOut();
    $('.form').trigger('reset');
  }, 2000);

  return false;
});
