// $(function(){

//     $("#panel2").on("click", function(){
//         $(this).animate({"opacity": '0%'}, 1000).animate({"opacity": '80%'}, 2000);
//     })
//     $("#panel3").on("click", function(){
//         $(this).slideUp(1000).delay(1000).slideDown(1500);
//     })
//     $("#panel4").on("click", function(){
//         $(this).animate({"opacity": '30%'}, 1000).slideUp(2000).slideDown(2000).animate({"opacity": '10%'}, 2000).animate({"opacity": '100%'}, 2000)
//     });

//     $(".tabs-panels .tabs li").on("click", function(){
//         var $panel = $(this).closest('.tabs-panels');
//         $panel.find('.tabs li.active').removeClass('active');
//         $(this).addClass('active');

//         var panelToShow = $(this).attr('rel');

//         $panel.find('.panel.active').slideUp(300, showNext);

//         function showNext() {
//             $(this).removeClass('active');
//             $("#"+panelToShow).slideDown(300, function() {
//                 $(this).addClass('active');
//             });
//         }
//     });
// });


$('li').on('click', function(){
    $('li').removeClass('highlight');
    $(this).addClass('highlight');
});