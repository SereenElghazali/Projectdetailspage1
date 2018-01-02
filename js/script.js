/**
 * Created by sa on 09/24/2017.
 */

$(document).ready(function () {

  
   $('.Show-more').click(function () {
        $(this).addClass('Show-more-hidden');
        $('.fade-out-p').addClass('fade-hidden');
       $(this).parent().children().css("height", "auto");
       
    });
 




});
