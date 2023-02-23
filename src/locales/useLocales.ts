import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// utils
import localStorageAvailable from '../utils/localStorageAvailable';
//
import { allLangs, defaultLang, Language } from './config-lang';

// ----------------------------------------------------------------------

export default function useLocales() {
  // ** Hooks
  const { i18n, t: translate } = useTranslation();

  // ** States
  const [langs, setLangs] = useState<Language[]>(allLangs);

  const storageAvailable = localStorageAvailable();

  const langStorage = storageAvailable ? localStorage.getItem('i18nextLng') : '';

  const currentLang = allLangs.find(_lang => _lang.value === langStorage) || defaultLang;

  const handleChangeLanguage = (newlang: string) => {
    i18n.changeLanguage(newlang);
  };

  useEffect(() => {
    setLangs(prev => prev.map(prevLang => ({ ...prevLang, label: translate(`languages.${prevLang.value}`) })));
  }, [currentLang, translate]);

  return {
    onChangeLang: handleChangeLanguage,
    translate: (text: string, options?: any) => translate(text, options),
    currentLang,
    allLangs: langs,
  };
}
