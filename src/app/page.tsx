'use client';

import { useEffect, useState } from 'react';
import type { Script } from '@/lib/types';
import { ScriptService } from '@/lib/services/ScriptService';
import { useI18n } from '@/lib/i18n';
import { SearchInput } from '@/components/SearchInput';
import { ScriptItem } from '@/components/ScriptItem';
import { InstallExample } from '@/components/InstallExample';
import { ErrorMessage } from '@/components/ErrorMessage';
import { Badge } from '@/components/Badge';

export default function HomePage() {
	const { language, t } = useI18n();
	const [scripts, setScripts] = useState<Script[]>([]);
	const [selectedScript, setSelectedScript] = useState<Script | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [searchKeyword, setSearchKeyword] = useState('');

	const filteredScripts = searchKeyword ? ScriptService.searchScripts(scripts, searchKeyword) : scripts;

	const loadScripts = async () => {
		setLoading(true);
		setError(false);

		try {
			const loadedScripts = await ScriptService.getScripts(language);
			setScripts(loadedScripts);

			// Update selected script if it exists in new list
			if (selectedScript) {
				const newSelectedScript = loadedScripts.find((s) => s.id === selectedScript.id);
				setSelectedScript(newSelectedScript || loadedScripts[0] || null);
			} else if (loadedScripts.length > 0) {
				setSelectedScript(loadedScripts[0]);
			}

			setLoading(false);
		} catch (err) {
			console.error('Failed to load scripts:', err);
			setError(true);
			setLoading(false);
		}
	};

	useEffect(() => {
		loadScripts();
	}, [language]);

	const badgeLabel = searchKeyword ? `${filteredScripts.length}/${scripts.length}` : `${scripts.length}`;

	return (
		<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
			{/* Page Title */}
			<div className="text-center mb-16 animate-fade-in">
				<h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-6 bg-linear-to-r from-[hsl(var(--primary))] via-[hsl(var(--info))] to-[hsl(var(--primary))] bg-[length:200%_auto] animate-pulse-subtle bg-clip-text text-transparent">
					{t('home.title')}
				</h1>
				<p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto leading-relaxed font-medium">
					{t('home.subtitle')}
				</p>
			</div>

			<div className="grid gap-12 lg:grid-cols-[1fr_460px] lg:items-start">
				{/* Scripts List */}
				<section className="min-w-0 space-y-6">
					<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
						<div className="space-y-1">
							<div className="flex items-center gap-3">
								<div className="w-1.5 h-8 bg-linear-to-b from-[hsl(var(--primary))] to-[hsl(var(--info))] rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
								<h2 className="text-3xl font-black tracking-tight">{t('home.availableScripts')}</h2>
								{!loading && scripts.length > 0 && (
									<Badge className="px-3 py-1 text-sm font-bold bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] border-[hsl(var(--primary)/0.2)]">
										{badgeLabel}
									</Badge>
								)}
							</div>
							<p className="text-[hsl(var(--muted-foreground))] text-sm font-medium ml-4">
								{t('home.scriptsDescription') || 'Browse and search for installation scripts.'}
							</p>
						</div>

						<div className="w-full sm:w-80">
							<SearchInput
								value={searchKeyword}
								onChange={setSearchKeyword}
								onClear={() => setSearchKeyword('')}
								resultsCount={filteredScripts.length}
								totalCount={scripts.length}
							/>
						</div>
					</div>

					{/* Scripts Container */}
					<div className="border border-[hsl(var(--border)/0.6)] rounded-[2rem] overflow-hidden bg-[hsl(var(--card))] shadow-2xl shadow-black/[0.03] dark:shadow-white/[0.02] transition-all duration-500 hover:border-[hsl(var(--primary)/0.3)]">
						<div className="max-h-[600px] overflow-auto scrollbar-thin">
							<ul className="divide-y divide-[hsl(var(--border)/0.4)]" role="list">
								{loading && (
									<div className="p-12 space-y-4">
										{[1, 2, 3, 4, 5].map((i) => (
											<div key={i} className="flex gap-4 animate-pulse">
												<div className="w-12 h-12 bg-[hsl(var(--muted))] rounded-2xl" />
												<div className="flex-1 space-y-2 py-1">
													<div className="h-4 bg-[hsl(var(--muted))] rounded w-1/4" />
													<div className="h-3 bg-[hsl(var(--muted))] rounded w-3/4" />
												</div>
											</div>
										))}
									</div>
								)}

								{error && (
									<li className="p-12">
										<ErrorMessage message={t('home.loadingError')} onRetry={loadScripts} />
									</li>
								)}

								{!loading && !error && filteredScripts.length === 0 && (
									<li className="p-20 text-center">
										<div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[hsl(var(--muted))] mb-4">
											<svg className="w-10 h-10 text-[hsl(var(--muted-foreground))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
											</svg>
										</div>
										<p className="text-[hsl(var(--muted-foreground))] font-bold text-lg">{t('home.noScriptsFound') || t('home.noResults')}</p>
										{searchKeyword && (
											<button 
												onClick={() => setSearchKeyword('')}
												className="mt-4 text-[hsl(var(--primary))] font-bold hover:underline"
											>
												{t('home.clearSearch') || 'Clear search'}
											</button>
										)}
									</li>
								)}

								{!loading && !error && filteredScripts.length > 0 &&
									filteredScripts.map((script, index) => (
										<ScriptItem
											key={script.id}
											script={script}
											index={index}
											isSelected={selectedScript?.id === script.id}
											onSelect={setSelectedScript}
										/>
									))}
							</ul>
						</div>
					</div>
				</section>

				{/* Detail Section - Sticky */}
				<aside className="lg:sticky lg:top-24">
					<InstallExample script={selectedScript} />
					
					{/* Additional Info Card */}
					<div className="mt-6 p-6 rounded-3xl border border-[hsl(var(--border)/0.4)] bg-[hsl(var(--muted)/0.2)] backdrop-blur-sm">
						<h3 className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-4 flex items-center gap-2">
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							{t('home.quickTips')}
						</h3>
						<ul className="space-y-3">
							{[
								t('tips.curl'),
								t('tips.sudo'),
								t('tips.verify')
							].map((tip, i) => (
								<li key={i} className="text-sm text-[hsl(var(--muted-foreground))] flex gap-3 font-medium">
									<span className="text-[hsl(var(--primary))]">•</span>
									{tip}
								</li>
							))}
						</ul>
					</div>
				</aside>
			</div>
		</div>
	);
}
