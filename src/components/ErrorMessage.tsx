'use client';

// No React imports needed

interface ErrorMessageProps {
	message: string;
	onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
	return (
		<div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[hsl(var(--error-bg))] text-[hsl(var(--error))] border border-[hsl(var(--error)/0.2)]">
			<svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<div className="flex-grow">
				<p className="text-sm font-medium">{message}</p>
			</div>
			{onRetry && (
				<button onClick={onRetry} className="text-sm font-medium underline hover:no-underline">
					Retry
				</button>
			)}
		</div>
	);
}
