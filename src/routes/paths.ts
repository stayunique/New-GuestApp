// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  checkIn: {
    root: path(ROOTS_DASHBOARD, '/check-in'),
  },
  services: {
    root: path(ROOTS_DASHBOARD, '/services'),
    suggestions: {
      covidTest: path(ROOTS_DASHBOARD, '/services/new-suggestions/covid-test'),
      moneyExchange: path(ROOTS_DASHBOARD, '/services/new-suggestions/money-exchange'),
      battery: path(ROOTS_DASHBOARD, '/services/new-suggestions/battery'),
      translator: path(ROOTS_DASHBOARD, '/services/new-suggestions/translator'),
    },
    babyEquipment: {
      backpackBaby: path(ROOTS_DASHBOARD, '/services/baby-equipment/backpack-baby'),
      babyBoo: path(ROOTS_DASHBOARD, '/services/baby-equipment/baby-boo'),
      strollAround: path(ROOTS_DASHBOARD, '/services/baby-equipment/stroll-around'),
      diaperBag: path(ROOTS_DASHBOARD, '/services/baby-equipment/diaper-bag'),
    },
    transportation: {
      transfer: path(ROOTS_DASHBOARD, '/services/transportation/transfer'),
      airportPickup: path(ROOTS_DASHBOARD, '/services/transportation/airport-pickup'),
      parking: path(ROOTS_DASHBOARD, '/services/transportation/parking'),
    },
  },
  whatsApp: {
    root: path(ROOTS_DASHBOARD, '/whats-app'),
  },
  wifi: {
    root: path(ROOTS_DASHBOARD, '/wifi'),
  },
  guideAndActivities: {
    root: path(ROOTS_DASHBOARD, '/guide-and-activities'),
  },
  entranceToTheApartment: {
    root: path(ROOTS_DASHBOARD, '/entrance-to-the-apartment'),
  },
};

export const PATH_DOCS = {
  root: 'https://docs.minimals.cc',
  changelog: 'https://docs.minimals.cc/changelog',
};
