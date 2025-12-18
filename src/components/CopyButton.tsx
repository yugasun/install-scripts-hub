'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';

interface CopyButtonProps {
	text: string;
	className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
	const { t } = useI18n();
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};

	return (
		<button
			onClick={handleCopy}
			className={`relative px-6 py-3 rounded-2xl text-sm font-black tracking-tight transition-all duration-500 flex items-center justify-center gap-2.5 overflow-hidden group ${
				copied
					? 'bg-[hsl(var(--success))] text-white shadow-xl shadow-[hsl(var(--success)/0.3)] scale-[1.02]'
					: 'bg-linear-to-r from-[hsl(var(--primary))] to-[hsl(var(--info))] text-white hover:shadow-2xl hover:shadow-[hsl(var(--primary)/0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95'
			} ${className}`}
		>
			<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
			<div className="relative flex items-center gap-2.5">
				{copied ? (
					<>
						<svg className="w-5 h-5 animate-scale-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
						</svg>
						<span className="animate-fade-in">{t('install.copied')}</span>
					</>
				) : (
					<>
						<svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
						</svg>
						<span>{t('install.copy')}</span>
					</>
				)}
			</div>
		</button>
	);
}
