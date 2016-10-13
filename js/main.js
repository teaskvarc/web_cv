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


/* go to top */

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
    })
});

$(window).load(function () {
   $('#loading').fadeOut(500);
});

$(window).load(function () {
   $('#loading').delay(2000).fadeOut(500);
    $('#loading-center').click(function () {
        $('#loading').fadeOut(100);
    })
});



$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

// One page scroll
 $(function () {
   $.srSmoothscroll({
     // defaults
     step: 55,
     speed: 300,
     ease: 'swing',
     target: $('body'),
     container: $(window)
   })
 });

new WOW().init();