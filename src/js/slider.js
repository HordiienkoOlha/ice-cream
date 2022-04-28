// core version + navigation, pagination modules:
import Swiper from 'swiper';

// new Swiper('.swiper')
let swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 120,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
                return '<span class="'+ className + '">' + (index + 1) + '</span>'
            }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });




    //     spaceBetween: 120,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //   });