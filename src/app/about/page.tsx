'use client';

import { useI18n } from '@/lib/i18n';
import Link from 'next/link';

export default function AboutPage() {
	const { t } = useI18n();

	return (
		<div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
			{/* Header */}
			<div className="text-center mb-20 animate-fade-in">
				<h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 bg-linear-to-r from-[hsl(var(--primary))] via-[hsl(var(--info))] to-[hsl(var(--primary))] bg-[length:200%_auto] animate-pulse-subtle bg-clip-text text-transparent">
					{t('about.title')}
				</h1>
				<p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto leading-relaxed font-medium">
					{t('about.subtitle')}
				</p>
			</div>

			<div className="space-y-16">
				{/* What is it */}
				<section className="relative group animate-slide-up" style={{ animationDelay: '100ms' }}>
					<div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-[hsl(var(--primary))] to-transparent rounded-full opacity-50" />
					<h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-3">
						<span className="text-[hsl(var(--primary))]">01.</span>
						{t('about.whatIs')}
					</h2>
					<div className="bg-[hsl(var(--card))] border border-[hsl(var(--border)/0.6)] rounded-3xl p-8 shadow-xl shadow-black/[0.02] dark:shadow-white/[0.01] group-hover:border-[hsl(var(--primary)/0.3)] transition-all duration-500">
						<p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed font-medium">
							{t('about.description')}
						</p>
					</div>
				</section>

				{/* How it works */}
				<section className="relative group animate-slide-up" style={{ animationDelay: '200ms' }}>
					<div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-[hsl(var(--info))] to-transparent rounded-full opacity-50" />
					<h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-3">
						<span className="text-[hsl(var(--info))]">02.</span>
						{t('about.howWorks')}
					</h2>
					<div className="bg-[hsl(var(--card))] border border-[hsl(var(--border)/0.6)] rounded-3xl p-8 shadow-xl shadow-black/[0.02] dark:shadow-white/[0.01] group-hover:border-[hsl(var(--info)/0.3)] transition-all duration-500">
						<p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed font-medium mb-8">
							{t('about.workingDescription')}
						</p>
						<div className="grid gap-6 md:grid-cols-3">
							{[1, 2, 3].map((i) => (
								<div key={i} className="p-6 rounded-2xl bg-[hsl(var(--muted)/0.3)] border border-[hsl(var(--border)/0.4)]">
									<div className="w-10 h-10 rounded-xl bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] flex items-center justify-center font-bold mb-4">
										{i}
									</div>
									<p className="text-sm font-bold text-[hsl(var(--foreground))] leading-snug">
										{t(`about.step${i}` as any)}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Security */}
				<section className="relative group animate-slide-up" style={{ animationDelay: '300ms' }}>
					<div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-[hsl(var(--error))] to-transparent rounded-full opacity-50" />
					<h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-3">
						<span className="text-[hsl(var(--error))]">03.</span>
						{t('about.security')}
					</h2>
					<div className="bg-[hsl(var(--card))] border border-[hsl(var(--border)/0.6)] rounded-3xl p-8 shadow-xl shadow-black/[0.02] dark:shadow-white/[0.01] group-hover:border-[hsl(var(--error)/0.3)] transition-all duration-500">
						<p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed font-medium mb-8">
							{t('about.securityDesc')}
						</p>
						<ul className="space-y-4">
							{[1, 2, 3].map((i) => (
								<li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-[hsl(var(--error)/0.03)] border border-[hsl(var(--error)/0.1)]">
									<div className="mt-1 w-5 h-5 rounded-full bg-[hsl(var(--error))] flex items-center justify-center flex-shrink-0">
										<svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<p className="text-base font-bold text-[hsl(var(--foreground))]">
										{t(`about.securityItem${i}` as any)}
									</p>
								</li>
							))}
						</ul>
					</div>
				</section>

				{/* Contribute */}
				<section className="relative group animate-slide-up" style={{ animationDelay: '400ms' }}>
					<div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-[hsl(var(--success))] to-transparent rounded-full opacity-50" />
					<h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-3">
						<span className="text-[hsl(var(--success))]">04.</span>
						{t('about.contribute')}
					</h2>
					<div className="bg-linear-to-br from-[hsl(var(--primary))] to-[hsl(var(--info))] rounded-[2.5rem] p-12 text-white shadow-2xl shadow-[hsl(var(--primary)/0.2)] text-center">
						<h3 className="text-3xl font-black mb-6">Want to help?</h3>
						<p className="text-xl font-medium opacity-90 mb-10 max-w-2xl mx-auto">
							{t('about.contributeDesc')}
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<a 
								href="https://github.com/yugasun/install-scripts-hub" 
								target="_blank" 
								rel="noreferrer"
								className="px-8 py-4 bg-white text-[hsl(var(--primary))] rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl"
							>
								GitHub Repository
							</a>
							<Link 
								href="/"
								className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black text-lg hover:bg-white/20 transition-all"
							>
								Back to Home
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

