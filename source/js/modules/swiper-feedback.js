const feedback = document.querySelector('[data-swiper="feedback"]');

function setSwiperFeedback() {
  if (feedback === null) {
    return;
  }
  const swiperFeedback = new window.Swiper(feedback, {
    direction: 'horizontal',
    loop: false,
    slidesPerView: '1',
    autoHeight: false,
    slideActiveClass: 'slide-active',
    focusableElements: '.slide-active',
    breakpoints: {
      1366: {
        allowTouchMove: false,
      },
    },
    navigation: {
      nextEl: '[data-feedback-button="right"]',
      prevEl: '[data-feedback-button="left"]',
    },
  });
}

export {setSwiperFeedback};
