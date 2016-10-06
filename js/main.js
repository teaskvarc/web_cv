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
