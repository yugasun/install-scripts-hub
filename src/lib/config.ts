/**
 * Application configuration
 */
const browser = typeof window !== 'undefined';

export const config = {
  /**
   * Application name
   */
  appName: 'Install Scripts Hub',

  /**
   * Application version
   */
  version: '1.0.0',

  /**
   * Base URL for the application
   */
  baseUrl: browser ? window.location.origin : 'https://install.yugasun.com',

  /**
   * API configuration
   */
  api: {
    /**
     * Cache duration in milliseconds
     */
    cacheDuration: 5 * 60 * 1000, // 5 minutes

    /**
     * Request timeout in milliseconds
     */
    timeout: 10000, // 10 seconds
  },

  /**
   * Feature flags
   */
  features: {
    /**
     * Enable analytics
     */
    analytics: false,

    /**
     * Enable service worker
     */
    serviceWorker: false,

    /**
     * Enable dark mode
     */
    darkMode: true,

    /**
     * Enable search
     */
    search: true,
  },

  /**
   * Social media links
   */
  social: {
    github: 'https://github.com/yugasun/install-scripts-hub',
    twitter: '',
  },

  /**
   * Contact information
   */
  contact: {
    email: 'yuga.sun.bj@gmail.com',
  },

  /**
   * SEO defaults
   */
  seo: {
    defaultTitle: 'Install Scripts Hub - One-line Installation Scripts',
    defaultDescription:
      'One-stop installation script collection platform for popular development tools and utilities. Quick, easy, and reliable.',
    defaultKeywords: [
      'install scripts',
      'shell scripts',
      'developer tools',
      'installation',
      'automation',
    ],
    twitterHandle: '@yugasun',
  },
} as const;

export type Config = typeof config;
