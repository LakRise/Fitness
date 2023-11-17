const jury = document.querySelector('[data-swiper="jury"]');

const setSwiperJury = () => {
  if (jury === null) {
    return;
  }
  const swiperJury = new window.Swiper(jury, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    autoHeight: false,
    slideActiveClass: 'slide-active',
    focusableElements: '.slide-active',
    breakpoints: {
      320: {
        spaceBetween: 20,
        initialSlide: 2,
        allowTouchMove: true,
      },
      768: {
        spaceBetween: 32,
        initialSlide: 2,
        allowTouchMove: true,
      },
      1366: {
        initialSlide: 0,
        spaceBetween: 40,
        allowTouchMove: false,
      },
    },
    navigation: {
      nextEl: '[data-jury-button="right"]',
      prevEl: '[data-jury-button="left"]',
    },
  });
};

export {setSwiperJury};
