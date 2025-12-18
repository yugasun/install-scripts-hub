'use client';

import type { Script } from '@/lib/types';
import { useI18n } from '@/lib/i18n';
import { CopyButton } from './CopyButton';

interface InstallExampleProps {
	script: Script | null;
}

export function InstallExample({ script }: InstallExampleProps) {
	const { t } = useI18n();

	if (!script) {
		return (
			<div className="rounded-3xl border-2 border-dashed border-[hsl(var(--border))] bg-[hsl(var(--card)/0.3)] backdrop-blur-md p-12 shadow-sm animate-fade-in">
				<div className="flex flex-col items-center justify-center text-center space-y-4">
					<div className="w-20 h-20 rounded-3xl bg-[hsl(var(--muted))] flex items-center justify-center animate-pulse-subtle">
						<svg className="w-10 h-10 text-[hsl(var(--muted-foreground))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
						</svg>
					</div>
					<div className="space-y-1">
						<p className="text-[hsl(var(--foreground))] font-semibold text-lg">{t('install.selectScript')}</p>
						<p className="text-[hsl(var(--muted-foreground))] text-sm max-w-[200px]">{t('install.selectScriptDesc') || 'Choose a script from the list to see installation details.'}</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="rounded-3xl border border-[hsl(var(--border)/0.6)] bg-linear-to-br from-[hsl(var(--card))] to-[hsl(var(--muted)/0.3)] backdrop-blur-md p-8 shadow-2xl shadow-[hsl(var(--primary)/0.05)] transition-all duration-500 hover:shadow-[hsl(var(--primary)/0.1)] animate-scale-in">
			{/* Header */}
			<div className="mb-8">
				<div className="flex items-start justify-between mb-4">
					<div className="flex-1">
						<div className="flex items-center gap-3 mb-2">
							<span className="flex h-3 w-3">
								<span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[hsl(var(--primary))] opacity-75"></span>
								<span className="relative inline-flex rounded-full h-3 w-3 bg-[hsl(var(--primary))]"></span>
							</span>
							<h2 className="text-2xl font-black tracking-tight text-[hsl(var(--foreground))]">
								{script.name}
							</h2>
						</div>
						<p className="text-base text-[hsl(var(--muted-foreground))] leading-relaxed font-medium">{script.description}</p>
					</div>
				</div>
			</div>

			{/* Command Box */}
			<div className="relative group mb-8">
				<div className="absolute -inset-1 bg-linear-to-r from-[hsl(var(--primary))] to-[hsl(var(--info))] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />
				<div className="relative bg-[hsl(var(--secondary))] rounded-2xl overflow-hidden border border-[hsl(var(--border)/0.5)] shadow-inner">
					{/* Terminal Header */}
					<div className="flex items-center justify-between px-4 py-3 bg-[hsl(var(--foreground)/0.05)] border-b border-[hsl(var(--border)/0.3)]">
						<div className="flex gap-1.5">
							<div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
							<div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
							<div className="w-3 h-3 rounded-full bg-[#27c93f]" />
						</div>
						<div className="text-[10px] font-bold uppercase tracking-widest text-[hsl(var(--muted-foreground))] opacity-50">bash</div>
					</div>
					<div className="p-5 overflow-x-auto scrollbar-thin">
						<pre className="font-mono text-sm text-[hsl(var(--foreground))] leading-relaxed selection:bg-[hsl(var(--primary)/0.3)]">
							<code className="flex gap-3">
								<span className="text-[hsl(var(--primary))] select-none opacity-50">$</span>
								<span>{script.command}</span>
							</code>
						</pre>
					</div>
				</div>
			</div>

			{/* Actions */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<CopyButton text={script.command || ''} className="w-full py-3 text-base shadow-lg shadow-[hsl(var(--primary)/0.2)] hover:shadow-[hsl(var(--primary)/0.3)]" />
				{script.sourceUrl && (
					<a
						href={script.sourceUrl}
						target="_blank"
						rel="noreferrer"
						className="w-full px-6 py-3 rounded-2xl text-sm font-bold text-[hsl(var(--foreground))] bg-[hsl(var(--muted))] hover:bg-[hsl(var(--border))] border border-[hsl(var(--border))] transition-all duration-300 text-center flex items-center justify-center gap-2 group"
					>
						{t('script.source')}
						<svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
					</a>
				)}
			</div>
		</div>
	);
}
