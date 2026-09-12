import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
}

const variants = {
  primary:
    'border-accent bg-accent-soft text-accent-bright hover:bg-accent/20',
  secondary:
    'border-border-strong bg-surface-raised text-text-primary hover:border-accent-muted hover:text-accent-bright',
  ghost: 'border-transparent text-text-muted hover:text-text-primary',
};

export function Button({
  children,
  className = '',
  variant = 'secondary',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

