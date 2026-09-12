import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const iconDefaults = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export function CodeIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="m8 5-6 7 6 7M16 5l6 7-6 7M14 2l-4 20" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

export function FilterIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M4 5h16l-6 7v5l-4 2v-7L4 5Z" />
    </svg>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M15 4h5v5M20 4l-9 9" />
      <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.3-5.27-1.29-5.27-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0C17.03 4.98 18 5.3 18 5.3c.62 1.59.23 2.76.11 3.05a4.45 4.45 0 0 1 1.18 3.09c0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.06.79 2.15v3.19c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

