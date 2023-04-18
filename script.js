'use strict'

$(function () {
    var width = 720;
    var pause = 1000;
    var animateSpeed = 2500;
    var currentSlide = 1;
    var $slideContainer=$('.slides')
    var $slides = $('.slide');
    var dbclick = true;
    var interval;
    
    function startSlide() {
        if(dbclick == true) animateSpeed = 250;
        else animateSpeed = 5000;
        interval = setInterval(function () {
            $slideContainer.animate({'margin-left':'-='+width}, animateSpeed, 
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
        if(dbclick == true) animateSpeed = 5000;
        else animateSpeed = 250;
    }

    startSlide();
    
    $slideContainer.on('dblclick', ()=>{dbclick = !dbclick; clearInterval(interval)})

    $slideContainer.on('mouseenter', pauseSlider).on('mouseleave', startSlide);
})