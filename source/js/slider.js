'use strict';

(function () {
  if (window.$) {
    var $ = window.$;

    var headerSlider = $('.header__slider');
    headerSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: true,
      centerMode: true,
      variableWidth: true,
      responsive: [{
        breakpoint: 1118,
        settings: {
            centerMode: false,
            variableWidth: false
        }
      }]
    });   
  }

  $(window).on('resize', function(e){
    // Переменная, по которой узнаем запущен слайдер или нет.
    var initLib = $('.news__slider').data('init-slider');
  
    if(window.innerWidth < 768){
      // Если слайдер не запущен
      if(initLib != 1){
        // Запускаем слайдер и записываем в data init-slider = 1
        $('.news__slider').slick({
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
          responsive: [            
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
          ]
        }).data({'init-slider': 1});
      }
    }
    // Если десктоп
    else {
      // Если слайдер запущен
      if(initLib == 1){
        // Разрушаем слайдер и записываем в data init-slider = 0
        $('.news__slider').slick('unslick').data({'init-slider': 0});
      }
    }
  }).trigger('resize')
    
    
})();
