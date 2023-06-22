export default function initSwiper() {
  let swiper = new Swiper('.mySwiper', {
    centerSlide: false,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  let swiperParceiros = new Swiper('.swiperParceiros', {
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      grabCursor: false,
    },
    speed: 6000,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
      },
      // when window width is >= 500px
      // 500: {
      //   slidesPerView: 4,
      //   spaceBetween: 20,
      // },

      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
      },
    },
  });
}
