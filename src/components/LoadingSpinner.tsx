'use client';

// No React imports needed

export function LoadingSpinner() {
	return (
		<div className="flex flex-col items-center justify-center py-8 animate-pulse">
			<div className="relative mb-4">
				<svg
					className="animate-spin h-12 w-12 text-[hsl(var(--primary))]"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
					<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
				</svg>
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="w-4 h-4 bg-[hsl(var(--primary))] rounded-full animate-ping opacity-75" />
				</div>
			</div>
			<p className="text-base font-medium">Loading...</p>
		</div>
	);
}
