'use strict'

$(function () {
    var width = 720;
    var animateSpeed = 2000;
    var pause = animateSpeed + 50;
    var currentSlide = 1;
    var $slideContainer=$('.slides')
    var $slides = $('.slide');
    var interval;
    function startSlide() {
        interval = setInterval(function () {
            $slideContainer.animate({'margin-left':'-='+width}, animateSpeed)
        }, animateSpeed);
    }
})