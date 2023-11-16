const container = document.querySelector('[data-subscription="container"]');
const tabs = container.querySelector('[data-subscription="tabs"]');
const coachPrice = container.querySelector('[data-subscription="coach"]');
const dailyPrice = container.querySelector('[data-subscription="daily"]');
const fullPrice = container.querySelector('[data-subscription="full"]');

const Prices = {
  'tab-1month': {
    coach: 5000,
    daily: 1700,
    full: 2700,
  },
  'tab-6months': {
    coach: 30000,
    daily: 10200,
    full: 16200,
  },
  'tab-12months': {
    coach: 60000,
    daily: 20400,
    full: 32400,
  },
};

const onTabClick = (evt) => {
  if (!evt.target.closest('[data-subscription="tab-1month"]')
    && !evt.target.closest('[data-subscription="tab-6months"]')
    && !evt.target.closest('[data-subscription="tab-12months"]')
    || evt.target.closest('.is-active')) {
    return;
  }
  let activeTab = '';
  if (evt.target.closest('[data-subscription="tab-1month"]')) {
    activeTab = 'tab-1month';
  }
  if (evt.target.closest('[data-subscription="tab-6months"]')) {
    activeTab = 'tab-6months';
  }
  if (evt.target.closest('[data-subscription="tab-12months"]')) {
    activeTab = 'tab-12months';
  }
  const {coach, daily, full} = Prices[activeTab];
  coachPrice.innerHTML = coach;
  coachPrice.setAttribute('data-title', coach.toString());
  dailyPrice.innerHTML = daily;
  dailyPrice.setAttribute('data-title', daily.toString());
  fullPrice.innerHTML = full;
  fullPrice.setAttribute('data-title', full.toString());
  tabs.querySelector('.is-active').classList.remove('is-active');
  evt.target.closest('[data-tab="tab"]').classList.add('is-active');
};

const setSubscriptionTabs = () => {
  if (tabs === null) {
    return;
  }
  tabs.addEventListener('click', onTabClick);
};

export {setSubscriptionTabs};
