( function( $ ) {
    $( document ).ready(function() {

        // kodas rašosi čia
        //$('img').button();
        /*$('.atsirask').click(function () {
            var img2 = $('.img1');
            $('p:nth-child(2)').after(img2);
            $(img2).toggle('slow');
            $('.atsirask').css('background-color', 'blue');

        });*/
        //Kitas uzdavinys
        $('#istrinti').click(function () {
            $('#istrinti').css('background-color', '#00ffdb');
            $(".hwh-items-wrapper div ,a").removeClass();
            $(".hwh-items-wrapper div").addClass("keisti");
            $("p ,h3").addClass("tekstas");
        });

        //Kitas uzdavinys
        $('#menu').slicknav ({

        })



    });


} )( jQuery );