'use strict';

(function () {

    var overlay = $('.modal-overlay');  
    var totalHeight=0;
    

    $(window).on('resize', function(e){

      $('.menu').hover(function() {
          overlay.fadeIn();
        },
        function(){
          overlay.fadeOut();        
        })
                
      
        if(window.innerWidth < 768){
            $('.site-list__item--submenu').hover(
      
                function() {
                    $(this).children().each(function(){ totalHeight += $(this).outerHeight(true) - 50;}) 
                    $(this).css('padding-bottom', totalHeight+='px');
                    $('.main-nav-wrap__logo-wrapper').css('padding-bottom', '30px');                                       
                    },
                  function() {
                    $(this).css('padding-bottom', '0');
                    $('.main-nav-wrap__logo-wrapper').css('padding-bottom', '30px');
                    totalHeight = 0;                    
                  }   
              )
        }
        // Если десктоп
        else {
            
            $('.site-list__item--submenu').hover(
      
                function() {     
                    $(this).children().each(function(){ totalHeight += $(this).outerHeight(true) - 30;})      
                    $('.main-nav-wrap__logo-wrapper').css('padding-bottom', totalHeight+='px');
                    $('.main-nav-wrap__logo-wrapper').css('transition', '1s');
                    },
                  function() {
                    $('.main-nav-wrap__logo-wrapper').css('padding-bottom', '65px');
                    totalHeight = 0;
                  }     
              )
        }
      }).trigger('resize')     

})();    