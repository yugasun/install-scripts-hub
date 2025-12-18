'use client';

import { useState } from 'react';
import { useI18n, availableLanguages } from '@/lib/i18n';

export function LanguageSelector() {
	const { language, setLanguage, t } = useI18n();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="h-12 px-4 rounded-2xl text-sm font-bold text-[hsl(var(--foreground))] bg-[hsl(var(--muted)/0.5)] hover:bg-[hsl(var(--primary)/0.1)] hover:text-[hsl(var(--primary))] transition-all duration-300 flex items-center gap-2.5 border border-[hsl(var(--border)/0.5)] shadow-sm group"
			>
				<svg className="w-5 h-5 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				<span className="uppercase tracking-wider">{language}</span>
				<svg className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
				</svg>
			</button>

			{isOpen && (
				<>
					<div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
					<div className="absolute right-0 mt-3 w-40 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border)/0.6)] shadow-2xl z-50 overflow-hidden animate-scale-in backdrop-blur-xl">
						<div className="p-1.5 space-y-1">
							{availableLanguages.map((lang) => (
								<button
									key={lang}
									onClick={() => {
										setLanguage(lang);
										setIsOpen(false);
									}}
									className={`w-full text-left px-4 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 flex items-center justify-between group/item ${
										language === lang
											? 'bg-[hsl(var(--primary))] text-white shadow-lg shadow-[hsl(var(--primary)/0.2)]'
											: 'text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary)/0.1)] hover:text-[hsl(var(--primary))]'
									}`}
								>
									{t(`common.language.${lang}`)}
									{language === lang && (
										<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
										</svg>
									)}
								</button>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
}
