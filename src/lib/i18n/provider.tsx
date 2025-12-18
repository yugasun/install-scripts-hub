'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import translations from './translations';

export interface Translation {
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
		loading: string;
		loadingError: string;
		noResults: string;
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

type TranslationOptions = {
	values?: Record<string, string | number>;
};

interface I18nContextType {
	language: string;
	setLanguage: (lang: string) => void;
	t: (key: string, options?: TranslationOptions) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
	const [language, setLanguageState] = useState<string>('en');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const savedLanguage = localStorage.getItem('language') || 'en';
			setLanguageState(savedLanguage);
			setMounted(true);
		}
	}, []);

	const setLanguage = (lang: string) => {
		setLanguageState(lang);
		if (typeof window !== 'undefined') {
			localStorage.setItem('language', lang);
		}
	};

	const replaceVariables = (text: string, values?: Record<string, string | number>): string => {
		if (!values) return text;
		return text.replace(/{([^}]+)}/g, (match, key) => {
			return values[key] !== undefined ? String(values[key]) : match;
		});
	};

	const t = (key: string, options?: TranslationOptions): string => {
		const lang = language in translations ? language : 'en';
		const translation = translations[lang];

		const keys = key.split('.');
		let result: any = translation;

		for (const k of keys) {
			if (result && typeof result === 'object' && k in result) {
				result = result[k];
			} else {
				if (lang !== 'en') {
					const fallback = translations['en'];
					result = fallback;
					for (const fk of keys) {
						if (result && typeof result === 'object' && fk in result) {
							result = result[fk];
						} else {
							return key;
						}
					}
				} else {
					return key;
				}
			}
		}

		const translatedText = typeof result === 'string' ? result : key;
		return replaceVariables(translatedText, options?.values);
	};

	return (
		<I18nContext.Provider value={{ language, setLanguage, t }}>
			{mounted ? children : null}
		</I18nContext.Provider>
	);
}

export function useI18n() {
	const context = useContext(I18nContext);
	if (!context) {
		throw new Error('useI18n must be used within I18nProvider');
	}
	return context;
}

export const availableLanguages = Object.keys(translations);
