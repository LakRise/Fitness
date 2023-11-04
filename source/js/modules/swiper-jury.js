const jury = document.querySelector('[data-swiper="jury"]');

const setSwiperJury = () => {
  const swiperJury = new Swiper(jury, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    autoHeight: true,
    slideActiveClass: 'slide-active',
    focusableElements: '.slide-active',
    breakpoints: {
      320: {
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 32,
      },
      1366: {
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: '[data-jury-button="right"]',
      prevEl: '[data-jury-button="left"]',
    },
  });
};

export {setSwiperJury};
