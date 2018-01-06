/**
 * Created by sa on 09/24/2017.
 */

$(document).ready(function () {
   $(function () {
    // 1. Initialize fotorama manually.
    var $fotoramaDiv = $('#fotorama').fotorama();

    // 2. Get the API object.
    var fotorama = $fotoramaDiv.data('fotorama');
       var total=fotorama.size;
       var cu=fotorama.activeIndex;

    // 3. Inspect it in console.
       
   
       
       
       
       $('.fotorama')
        // Listen to the events
        .on('fotorama:ready ' +           // Fotorama is fully ready
            'fotorama:show ' +            // Start of transition to the new frame
            'fotorama:showend ' +         // End of the show transition
            'fotorama:load ' +            // Stage image of some frame is loaded
            'fotorama:error ' +           // Stage image of some frame is broken
            'fotorama:startautoplay ' +   // Slideshow is started
            'fotorama:stopautoplay ' +    // Slideshow is stopped
            'fotorama:fullscreenenter ' + // Fotorama is fullscreened
            'fotorama:fullscreenexit ' +  // Fotorama is unfullscreened
            'fotorama:loadvideo ' +       // Video iframe is loaded
            'fotorama:unloadvideo',       // Video iframe is removed
            function (e, fotorama, extra) {
           
              
              console.log('active frame', fotorama.activeIndex+1);
               console.log('total', total);
           
            var text = (fotorama.activeIndex+1) + " of " + total;

       
            $('#index2').text(text);
            }
        )
        // Initialize fotorama manually
        .fotorama();
 
  });

    
    var scrollButton=$("#scroll-top");
    var p = $( "#contact2:first" );
   var position = p.position();
    
   var x=position.top;
    console.log('total', x);
    var y=parseInt(x);
    console.log('total', y);
    //on window scrolling

    $(window).scroll(function () {
        if($(this).scrollTop()>= (y-300)) {
            scrollButton.hide();
        }
        else {
            scrollButton.show();
        }
    });



});
