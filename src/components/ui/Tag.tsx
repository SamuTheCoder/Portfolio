import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  tone?: 'neutral' | 'accent' | 'violet';
  className?: string;
}

const tones = {
  neutral: 'border-border-strong bg-surface-raised text-text-secondary',
  accent: 'border-accent-muted/40 bg-accent-muted/25 text-accent-bright',
  violet: 'border-violet-400/30 bg-violet-500/25 text-violet-200',
};

export function Tag({ children, tone = 'neutral', className = '' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium leading-none ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

