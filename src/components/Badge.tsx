'use client';

// No React imports needed

interface BadgeProps {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
	className?: string;
}

export function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
	const variantClasses = {
		primary: 'bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] border-[hsl(var(--primary)/0.2)]',
		secondary: 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] border-[hsl(var(--border)/0.5)]',
		success: 'bg-[hsl(var(--success)/0.1)] text-[hsl(var(--success))] border-[hsl(var(--success)/0.2)]',
		warning: 'bg-[hsl(var(--warning)/0.1)] text-[hsl(var(--warning))] border-[hsl(var(--warning)/0.2)]',
		error: 'bg-[hsl(var(--error)/0.1)] text-[hsl(var(--error))] border-[hsl(var(--error)/0.2)]',
	};

	return (
		<span className={`inline-flex items-center justify-center px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-lg border transition-all duration-300 ${variantClasses[variant]} ${className}`}>
			{children}
		</span>
	);
}
