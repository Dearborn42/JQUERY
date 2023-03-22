$(window).on("load", function() {
    $("p").on("click", function(){
        $(this).html("Hello");
    }).on("dblclick", function(){
        $(this).html("World");
    })
	$(".templar").animate({left: '300px'});
});
