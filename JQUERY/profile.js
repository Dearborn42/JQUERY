// .on, .css, .slideDown, .slideUp, .animate, .attr, .delay, 

$(window).on('load', function(){
    $('body').css('background', 'darkorchid');
    $('.profile-pic').on('click', function(){
        $(this).css('box-shadow', '0px 0px 10px 10px blue').animate({"opacity": '80%'}, 2000);
    })
    $('.right-box').slideDown(4000);
    $('.name, .hobbies, .about, .information').delay(5000).fadeIn(2000).on('click', function(){
        var $class = $(this).attr('class');
        $(this).slideUp(2000);
        $(`.${$class}-sub`).delay(2000).slideDown(2000);
    });
    $('.information-sub').on('click', function(){
        $(this).animate({"left": "200px"}).animate({"left": "0px", "right": "200px"});
    })
});