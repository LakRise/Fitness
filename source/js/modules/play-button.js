const videoContainer = document.querySelector('[data-video="container"');
const video = videoContainer.querySelector('[data-video="video"]');
const videoButton = videoContainer.querySelector('[data-video="play-button"');

const onButtonClick = () => {
  videoContainer.classList.add('is-active');
  video.tabIndex = 0;
  video.setAttribute('src', `${video.getAttribute('src')}?autoplay=1`);
  videoButton.removeEventListener('click', onButtonClick);
};

const setVideo = () => {
  videoButton.addEventListener('click', onButtonClick);
};

export {setVideo};
