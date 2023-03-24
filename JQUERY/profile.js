// .on, .css, .slideDown, .slideUp, .animate, .attr, .delay, .html, .fadeIn, .fadeOut, .toggle, .show(), .hide(), .clone, .appendTo, .trigger

$(window).on('load', function(){
    $('body').css('background', 'darkorchid').on('click', function(){
        $('.container').clone().appendTo('body').trigger();
    });
    $('.profile-pic').on('click', function(){
        $(this).css('box-shadow', '0px 0px 10px 10px blue').animate({"opacity": '80%'}, 2000).on('click', function(){$(this).hide().show().toggle();});
    })
    $('.right-box').slideDown(4000);
    $('.name, .hobbies, .about, .information').delay(5000).fadeIn(2000).on('click', function(){
        var $class = $(this).attr('class');
        $(this).slideUp(2000);
        $(`.${$class}-sub`).delay(2000).slideDown(2000).on('click', function(){
            $(this).html('Thanks for reading').fadeOut(2000);
        });
    });
});