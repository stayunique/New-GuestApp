// @mui
import { enUS, frFR, esES } from '@mui/material/locale';

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export type Language = {
  label: string;
  value: string;
  systemValue: any;
  icon: string;
};

export const allLangs: Language[] = [
  {
    label: 'Spanish',
    value: 'es',
    systemValue: esES,
    icon: '/assets/icons/flags/ic_flag_es.svg',
  },
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: '/assets/icons/flags/ic_flag_en.svg',
  },
  {
    label: 'French',
    value: 'fr',
    systemValue: frFR,
    icon: '/assets/icons/flags/ic_flag_fr.svg',
  },
];

export const defaultLang = allLangs[0]; // English
