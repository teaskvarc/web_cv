// SIDE MENU SCRIPTS

$(document).ready(function () {
   $('.menu-close-icon, .side-menu-transparent').click(function (e) {
      e.preventDefault();
       $('#side-menu').animate({left: '-250px', top:'-1000px'});
       $('.side-menu-transparent').fadeOut(300);
   });
    $('.menu-open-icon').click(function (e) {
        e.preventDefault();
        $('#side-menu').animate({left:'0px', top:'0px'});
        $('.side-menu-transparent').fadeIn(300);
    });
});


$(document).ready(function () {
   $(window).scroll(function () {
       if($(this).scrollTop() > 500){
           $('#back-to-top').fadeIn();
       }else {
           $('#back-to-top').fadeOut();
       }
   });

    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

});



// Preloader

$(window).load(function () {
    $('#loading-center').click(function () {
        $('#loading').fadeOut(500);
    });
});

$(window).load(function () {
   $('#loading').fadeOut(500);
});

$(window).load(function () {
   //$('#loading').delay(2000).fadeOut(500);
    $('#loading-center').click(function () {
        $('#loading').fadeOut(500);
    });
});

