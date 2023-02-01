$( document ).ready(function() {      

  
  var menu = $('.menu');
    var menuToggle = $('.main-nav-wrap__toggle');
    var overlay = $('.modal-overlay');  
    var window = $(window);

    menu.removeClass('no-js');

    menuToggle.click(function() {       
        if (menu.hasClass('menu--closed')) {
          overlay.fadeIn(600, // 
            function() { // 
                $('.menu').removeClass('menu--closed');
                $('.menu').addClass('menu--opened').animate({ opacity: 1}, 300);   
                menuToggle.addClass('main-nav-wrap__toggle--active');       
            });            
        }  else {
          overlay.fadeOut(600, // 
            function() { // 
                $('.menu').removeClass('menu--opened');
                $('.menu').addClass('menu--closed');
                $('.main-nav__logo').css('display', 'block');
                menuToggle.removeClass('main-nav-wrap__toggle--active');     
          });
        }	       
    });   

  
});


