const container = document.querySelector('[data-subscription="container"]');
const tabs = container.querySelector('[data-subscription="tabs"]');
const coachPrice = container.querySelector('[data-subscription="coach"]');
const dailyPrice = container.querySelector('[data-subscription="daily"]');
const fullPrice = container.querySelector('[data-subscription="full"]');

const Prices = {
  'tab-1month': {
    COACH: 5000,
    DAILY: 1700,
    FULL: 2700,
  },
  'tab-6months': {
    COACH: 30000,
    DAILY: 10200,
    FULL: 16200,
  },
  'tab-12months': {
    COACH: 60000,
    DAILY: 20400,
    FULL: 32400,
  },
};

const onTabClick = (evt) => {
  if (!evt.target.closest('[data-subscription="tab-1month"]')
    && !evt.target.closest('[data-subscription="tab-6months"]')
    && !evt.target.closest('[data-subscription="tab-12months"]')) {
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
  const { COACH, DAILY, FULL } = Prices[activeTab];
  coachPrice.innerHTML = COACH;
  coachPrice.setAttribute('data-title', COACH.toString());
  dailyPrice.innerHTML = DAILY;
  dailyPrice.setAttribute('data-title', DAILY.toString());
  fullPrice.innerHTML = FULL;
  fullPrice.setAttribute('data-title', FULL.toString());
};

const setSubscriptionTabs = () => {
  tabs.addEventListener('click', onTabClick);
};

setSubscriptionTabs();
