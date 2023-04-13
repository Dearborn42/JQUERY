'use strict'

$(function () {
    var width = 720;
    var animateSpeed = 2000;
    var pause = 100;
    var currentSlide = 1;
    var $slideContainer=$('.slides')
    var $slides = $('.slide');
    var interval;
    function startSlide() {
        interval = setInterval(function () {
            $slideContainer.animate({'margin-left':'-='+width}, 100, 
            function(){
                currentSlide++;
                if (currentSlide === $slides.length){
                    currentSlide = 1;
                    $slideContainer.css({'margin-left': 0})
                }
            })
        }, pause);
    }

    function pauseSlider() {
        clearInterval(interval);
    }

    startSlide();

    $slideContainer.on('mouseenter', pauseSlider).on('mouseleave', startSlide);
})