const list = document.querySelector('[data-subscription-list]');

const setPriceSelect = () => {
  list.addEventListener('click', (evt) => {
    const target = evt.target.closest('[data-subscription-item]');
    if (!target || target.classList.contains('is-active')) {
      return;
    }
    list.querySelector('.is-active').classList.remove('is-active');
    target.classList.add('is-active');
  });
};

export {setPriceSelect};
