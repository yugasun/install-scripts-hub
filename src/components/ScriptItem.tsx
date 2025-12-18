'use client';

import type { Script } from '@/lib/types';

interface ScriptItemProps {
	script: Script;
	isSelected?: boolean;
	onSelect?: (script: Script) => void;
	index?: number;
}

export function ScriptItem({ script, isSelected = false, onSelect, index = 0 }: ScriptItemProps) {
	return (
		<li
			onClick={() => onSelect?.(script)}
			style={{ animationDelay: `${index * 40}ms` }}
			className={`group relative px-5 py-5 cursor-pointer transition-all duration-300 animate-slide-up ${
				isSelected
					? 'bg-linear-to-r from-[hsl(var(--primary)/0.12)] to-[hsl(var(--primary)/0.02)] border-l-4 border-[hsl(var(--primary))] shadow-[inset_0_1px_0_0_hsl(var(--primary)/0.05)]'
					: 'hover:bg-[hsl(var(--muted)/0.5)] border-l-4 border-transparent hover:border-[hsl(var(--border)/0.5)]'
			}`}
		>
			<div className="flex items-start gap-5">
				{/* Icon */}
				<div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
					isSelected 
						? 'bg-[hsl(var(--primary))] shadow-lg shadow-[hsl(var(--primary)/0.25)] rotate-0'
						: 'bg-[hsl(var(--muted))] group-hover:bg-[hsl(var(--secondary)/0.1)] group-hover:scale-105 group-hover:rotate-3'
				}`}>
					<svg className={`w-6 h-6 transition-transform duration-300 ${
						isSelected ? 'text-white scale-110' : 'text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))]'
					}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
				</div>

				{/* Content */}
				<div className="flex-grow min-w-0 pt-0.5">
					<h3 className={`text-base font-bold mb-1.5 transition-colors duration-300 ${
						isSelected ? 'text-[hsl(var(--foreground))]' : 'text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))]'
					}`}>
						{script.name}
					</h3>
					<p className={`text-sm leading-relaxed transition-colors duration-300 ${
						isSelected ? 'text-[hsl(var(--foreground)/0.8)]' : 'text-[hsl(var(--muted-foreground))]'
					} line-clamp-2`}>
						{script.description}
					</p>
				</div>

				{/* Selected Indicator */}
				<div className="flex-shrink-0 pt-1">
					{isSelected ? (
						<div className="w-6 h-6 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center animate-scale-in shadow-sm">
							<svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
							</svg>
						</div>
					) : (
						<div className="w-6 h-6 rounded-full border-2 border-transparent group-hover:border-[hsl(var(--border))] flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
							<svg className="w-3.5 h-3.5 text-[hsl(var(--muted-foreground))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</div>
					)}
				</div>
			</div>
		</li>
	);
}
