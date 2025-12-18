'use client';

import { ChangeEvent } from 'react';
import { useI18n } from '@/lib/i18n';

interface SearchInputProps {
	value: string;
	onChange: (value: string) => void;
	onClear?: () => void;
	resultsCount?: number;
	totalCount?: number;
}

export function SearchInput({ value, onChange, onClear, resultsCount, totalCount }: SearchInputProps) {
	const { t } = useI18n();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<div className="space-y-3">
			<div className="relative w-full group">
				<div className="absolute -inset-0.5 bg-linear-to-r from-[hsl(var(--primary))] to-[hsl(var(--info))] rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-500" />
				<div className="relative flex items-center">
					<div className="absolute left-4 flex items-center pointer-events-none">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-[hsl(var(--muted-foreground))] group-focus-within:text-[hsl(var(--primary))] transition-colors duration-300"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2.5}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>
					<input
						type="text"
						placeholder={t('home.searchPlaceholder')}
						className="relative w-full h-14 px-4 pl-12 pr-12 border-2 border-[hsl(var(--border)/0.5)] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] rounded-2xl text-base font-semibold
							focus:outline-none focus:ring-4 focus:ring-[hsl(var(--primary)/0.1)] focus:border-[hsl(var(--primary))]
							hover:border-[hsl(var(--primary)/0.3)]
							placeholder:text-[hsl(var(--muted-foreground))] placeholder:font-medium
							transition-all duration-300 shadow-sm"
						value={value}
						onChange={handleChange}
					/>
					{value && (
						<button
							className="absolute right-3 w-8 h-8 flex items-center justify-center rounded-xl bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--error))] hover:text-white transition-all duration-300 group/clear"
							onClick={() => onClear?.()}
							aria-label="Clear search"
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover/clear:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					)}
				</div>
			</div>
			{/* Results Count */}
			{value && resultsCount !== undefined && (
				<div className="flex items-center gap-2 px-1 animate-fade-in">
					<div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
					<span className="text-xs font-bold tracking-wider uppercase text-[hsl(var(--muted-foreground))]">
						{resultsCount} / {totalCount} {t('home.scriptsFound') || 'scripts found'}
					</span>
				</div>
			)}
		</div>
	);
}
