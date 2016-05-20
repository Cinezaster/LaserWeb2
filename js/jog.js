function initJog() {

    $('#xP').on('click', function() {
       if (isConnected) {
         var dist = $('input[name=stp]:checked', '#stepsize').val()
         console.log('Jog Distance', dist);
         sendGcode('G91\nG0 X'+ dist + '\nG90\n');
       }
    });

    $('#yP').on('click', function() {
       if (isConnected) {
         var dist = $('input[name=stp]:checked', '#stepsize').val()
         console.log('Jog Distance', dist);
         sendGcode('G91\nG0 Y'+ dist + '\nG90\n');
       }
    });

    $('#zP').on('click', function() {
       if (isConnected) {
         var dist = $('input[name=stp]:checked', '#stepsize').val()
         console.log('Jog Distance', dist);
         sendGcode('G91\nG0 Z'+ dist + '\nG90\n');
       }
    });

    $('#xM').on('click', function() {
       if (isConnected) {
         var dist = $('input[name=stp]:checked', '#stepsize').val()
         console.log('Jog Distance', dist);
         sendGcode('G91\nG0 X-'+ dist + '\nG90\n');
       }
    });

    $('#yM').on('click', function() {
       if (isConnected) {
         var dist = $('input[name=stp]:checked', '#stepsize').val()
         console.log('Jog Distance', dist);
         sendGcode('G91\nG0 Y-'+ dist + '\nG90\n');
       }
    });

    $('#zM').on('click', function() {
       if (isConnected) {
         var dist = $('input[name=stp]:checked', '#stepsize').val()
         console.log('Jog Distance', dist);
         sendGcode('G91\nG0 Z-'+ dist + '\nG90\n');
       }
    });

    // Jog Widget
    $('#stepsize input').on('change', function() {
       printLog('Jog will use ' +$('input[name=stp]:checked', '#stepsize').val() + ' mm per click', successcolor);
       $(".stepsizeval").empty();
       $(".stepsizeval").html($('input[name=stp]:checked', '#stepsize').val() + 'mm');
    });



}
