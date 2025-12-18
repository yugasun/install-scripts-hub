import type { Translation } from '../translations';

const en: Translation = {
  nav: {
    home: 'Home',
    about: 'About',
  },
  common: {
    menu: {
      home: 'Home',
      about: 'About',
    },
    language: {
      en: 'English',
      zh: 'Chinese',
      select: 'Select language',
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    },
  },
  home: {
    title: 'Install Scripts Hub',
    subtitle: 'One-line installation scripts for popular tools and software',
    availableScripts: 'Available Scripts',
    searchPlaceholder: 'Search scripts...',
    clearSearch: 'Clear search',
    loading: 'Loading scripts...',
    loadingError: 'Failed to load scripts. Please try again.',
    noResults: 'No scripts found matching your search.',
    scriptsFound: 'scripts found',
    quickTips: 'Quick Tips',
  },
  tips: {
    curl: 'Make sure curl is installed on your system.',
    sudo: 'Some scripts might require sudo privileges.',
    verify: 'Always verify script content before running.',
  },
  script: {
    details: 'View details',
    source: 'View source',
  },
  install: {
    installCommand: 'Installation Command',
    copy: 'Copy',
    copied: 'Copied!',
    copyFailed: 'Failed to copy',
    selectScript: 'Please select a script to see the installation command.',
    tip: 'Click to copy the command, or use the copy button. Running this command will install <strong>{name}</strong>.',
    clickToCopy: 'Click to copy',
  },
  detail: {
    backToList: 'Back to scripts',
    howToUse: 'How to Use',
    step1: 'Copy the command above',
    step2: 'Open your terminal',
    step3: 'Paste and run the command',
    step4: 'Follow any additional instructions',
    share: 'Share',
    copyLink: 'Copy link',
    socialShare: 'Or share on social media:',
  },
  about: {
    title: 'About Install Scripts Hub',
    subtitle: 'Learn more about this project and how it works',
    whatIs: 'What is Install Scripts Hub?',
    description: 'Install Scripts Hub is a platform that provides one-line installation commands for popular tools and software. It makes it easy to install developer tools, utilities, and applications on your system without having to remember complex installation procedures.',
    howWorks: 'How does it work?',
    workingDescription: 'Install Scripts Hub works by providing curated shell scripts that are hosted on our servers. When you run the installation command, it downloads and executes the script, which handles the installation process for you.',
    step1: 'We maintain a collection of installation scripts for popular software.',
    step2: 'You run a simple curl command that downloads and executes the appropriate script.',
    step3: 'The script handles all the necessary steps to install and configure the software on your system.',
    contribute: 'How to contribute',
    contributeDesc: 'This project is open source and contributions are welcome. If you would like to add a new installation script or improve an existing one, please visit our repository on ',
    security: 'Security considerations',
    securityDesc: 'We take security seriously. Here\'s how we ensure the safety of our scripts:',
    securityItem1: 'All scripts are open source and can be reviewed before execution.',
    securityItem2: 'We verify scripts work as expected and don\'t contain malicious code.',
    securityItem3: 'We encourage users to review scripts before running them.',
    contact: 'Contact',
    contactDesc: 'For any questions, suggestions or feedback, please reach out to ',
  },
  error: {
    scriptNotFound: 'Script not found',
    redirecting: 'Redirecting to home page',
    returnHome: 'Return to home page',
  },
  footer: {
    rights: 'All rights reserved',
    madeWith: 'Made with',
    author: 'Created by Yuga Sun'
  }
};

export default en;