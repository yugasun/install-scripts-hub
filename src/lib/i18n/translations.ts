import en from './translations/en';
import zh from './translations/zh';

// Export all translations
const translations: { [key: string]: Translation } = {
  en,
  zh,
};

// Translation interface
export interface Translation {
  nav: {
    home: string;
    about: string;
  };
  common: {
    menu: {
      home: string;
      about: string;
    };
    language: {
      en: string;
      zh: string;
      select: string;
    };
    theme: {
      light: string;
      dark: string;
      system: string;
    };
  };
  home: {
    title: string;
    subtitle: string;
    availableScripts: string;
    searchPlaceholder: string;
    clearSearch: string;
    loading: string;
    loadingError: string;
    noResults: string;
    scriptsFound: string;
    quickTips: string;
  };
  tips: {
    curl: string;
    sudo: string;
    verify: string;
  };
  script: {
    details: string;
    source: string;
  };
  install: {
    installCommand: string;
    copy: string;
    copied: string;
    copyFailed: string;
    selectScript: string;
    tip: string;
    clickToCopy: string;
  };
  detail: {
    backToList: string;
    howToUse: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    share: string;
    copyLink: string;
    socialShare: string;
  };
  about: {
    title: string;
    subtitle: string;
    whatIs: string;
    description: string;
    howWorks: string;
    workingDescription: string;
    step1: string;
    step2: string;
    step3: string;
    contribute: string;
    contributeDesc: string;
    security: string;
    securityDesc: string;
    securityItem1: string;
    securityItem2: string;
    securityItem3: string;
    contact: string;
    contactDesc: string;
  };
  error: {
    scriptNotFound: string;
    redirecting: string;
    returnHome: string;
  };
  footer: {
    rights: string;
    madeWith: string;
    author: string;
  };

}

export type TranslationKey = keyof Translation;

export default translations;