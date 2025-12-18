'use client';

import { useEffect, useState } from 'react';
import { useI18n } from '@/lib/i18n';

export function ThemeToggle() {
	const { t } = useI18n();
	const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark' | 'system') || 'system';
			setTheme(savedTheme);
			setMounted(true);
			applyTheme(savedTheme);
		}
	}, []);

	const applyTheme = (newTheme: 'light' | 'dark' | 'system') => {
		const html = document.documentElement;
		let colorScheme: 'light' | 'dark' | 'light dark' = 'light dark';

		if (newTheme === 'light') {
			html.classList.remove('dark');
			colorScheme = 'light';
		} else if (newTheme === 'dark') {
			html.classList.add('dark');
			colorScheme = 'dark';
		} else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (prefersDark) {
				html.classList.add('dark');
				colorScheme = 'dark';
			} else {
				html.classList.remove('dark');
				colorScheme = 'light';
			}
		}

		html.style.colorScheme = colorScheme;
	};

	const handleToggle = () => {
		const themes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
		const currentIndex = themes.indexOf(theme);
		const nextTheme = themes[(currentIndex + 1) % themes.length];

		setTheme(nextTheme);
		localStorage.setItem('theme', nextTheme);
		applyTheme(nextTheme);
	};

	if (!mounted) return null;

	return (
		<button
			onClick={handleToggle}
			className="w-12 h-12 flex items-center justify-center rounded-2xl text-[hsl(var(--foreground))] bg-[hsl(var(--muted)/0.5)] hover:bg-[hsl(var(--primary)/0.1)] hover:text-[hsl(var(--primary))] hover:scale-105 active:scale-95 transition-all duration-300 border border-[hsl(var(--border)/0.5)] shadow-sm"
			aria-label={t('common.theme.light')}
		>
			{theme === 'light' && (
				<svg className="h-5 w-5 animate-scale-in" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2.5}
						d="M12 3v1m0 16v1m9-9h-1m-16 0H1m15.364 1.636l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			)}
			{theme === 'dark' && (
				<svg className="h-5 w-5 animate-scale-in" fill="currentColor" viewBox="0 0 24 24">
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
				</svg>
			)}
			{theme === 'system' && (
				<svg className="h-5 w-5 animate-scale-in" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			)}
		</button>
	);
}
