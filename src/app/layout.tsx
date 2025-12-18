'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { I18nProvider, useI18n } from '@/lib/i18n';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSelector } from '@/components/LanguageSelector';
import './globals.css';

function Header() {
	const { t } = useI18n();
	
	return (
		<header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--border)/0.5)] bg-[hsl(var(--background)/0.7)] backdrop-blur-2xl shadow-sm">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between">
					<nav className="flex items-center gap-8">
						<Link href="/" className="flex items-center gap-3 text-2xl font-black tracking-tighter text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-all duration-300 group">
							<div className="w-10 h-10 rounded-xl bg-linear-to-br from-[hsl(var(--primary))] to-[hsl(var(--info))] flex items-center justify-center shadow-lg shadow-[hsl(var(--primary)/0.2)] group-hover:shadow-xl group-hover:shadow-[hsl(var(--primary)/0.3)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
							</div>
							<span className="hidden sm:inline bg-linear-to-r from-[hsl(var(--foreground))] to-[hsl(var(--foreground)/0.7)] bg-clip-text text-transparent">Install Scripts Hub</span>
						</Link>
						<Link href="/about" className="text-sm font-bold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-all duration-300 px-4 py-2 rounded-xl hover:bg-[hsl(var(--primary)/0.05)]">
							{t('nav.about') || 'About'}
						</Link>
					</nav>
					<div className="flex items-center gap-3">
						<LanguageSelector />
						<ThemeToggle />
						<a
							href="https://github.com/yugasun/install-scripts-hub"
							target="_blank"
							rel="noreferrer"
							className="w-10 h-10 flex items-center justify-center rounded-xl border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] hover:border-[hsl(var(--primary)/0.3)] hover:shadow-lg hover:shadow-[hsl(var(--primary)/0.1)] transition-all duration-300 group"
							aria-label="GitHub Repository"
						>
							<svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}

function Footer() {
	const { t } = useI18n();
	return (
		<footer className="border-t border-[hsl(var(--border)/0.5)] bg-[hsl(var(--muted)/0.2)] py-12">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					<div className="flex flex-col items-center md:items-start gap-2">
						<div className="flex items-center gap-2 text-lg font-black tracking-tighter">
							<div className="w-6 h-6 rounded-lg bg-linear-to-br from-[hsl(var(--primary))] to-[hsl(var(--info))] flex items-center justify-center">
								<svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
							</div>
							<span>Install Scripts Hub</span>
						</div>
						<p className="text-sm text-[hsl(var(--muted-foreground))] font-medium">
							© {new Date().getFullYear()} All rights reserved Created by Yuga Sun | Made with ❤️
						</p>
					</div>
					<div className="flex gap-8">
						<a href="https://github.com/yugasun/install-scripts-hub" target="_blank" rel="noreferrer" className="text-sm font-bold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors">GitHub</a>
						<Link href="/about" className="text-sm font-bold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors">{t('nav.about') || 'About'}</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Install Scripts Hub</title>
				<meta name="description" content="One-click install scripts for popular tools and software" />
			</head>
			<body className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] antialiased">
				<I18nProvider>
					<div className="flex flex-col min-h-screen">
						<Header />
						<main className="flex-grow">{children}</main>
						<Footer />
					</div>
				</I18nProvider>
			</body>
		</html>
	);
}
