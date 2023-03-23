$(function(){

    $(".tabs-panels .tabs li").on("click", function(){
        var $panel = $(this).closest('.tabs-panels');
        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        var panelToShow = $(this).attr('rel');

        $panel.find('.panel.active').slideUp(300, showNext);

        function showNext() {
            $(this).removeClass('active');
            $("#"+panelToShow).slideDown(300, function() {
                $(this).addClass('active');
            });
        }
    });
});
