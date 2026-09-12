import type { ReactNode, SVGProps } from 'react';

export type DetailIconName =
  | 'box'
  | 'calendar'
  | 'check'
  | 'code'
  | 'database'
  | 'devices'
  | 'kanban'
  | 'layers'
  | 'lightbulb'
  | 'lock'
  | 'server'
  | 'shield'
  | 'users';

interface DetailIconProps extends SVGProps<SVGSVGElement> {
  name: DetailIconName;
}

const paths: Record<DetailIconName, ReactNode> = {
  box: <><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="m4 7 8 4 8-4M4 7v10l8 4 8-4V7M12 11v10"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
  check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 6-7"/></>,
  code: <><path d="m8 5-6 7 6 7M16 5l6 7-6 7M14 2l-4 20"/></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></>,
  devices: <><rect x="3" y="4" width="13" height="11" rx="1"/><path d="M7 20h5M9.5 15v5"/><rect x="16" y="9" width="5" height="11" rx="1"/></>,
  kanban: <><rect x="3" y="4" width="4" height="16" rx="1"/><rect x="10" y="4" width="4" height="11" rx="1"/><rect x="17" y="4" width="4" height="14" rx="1"/></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
  lightbulb: <><path d="M9 18h6M10 22h4"/><path d="M8.2 15.5A7 7 0 1 1 15.8 15.5c-.8.6-.8 1.5-.8 2.5H9c0-1 0-1.9-.8-2.5Z"/></>,
  lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
  server: <><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6"/></>,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></>,
};

export function DetailIcon({ name, ...props }: DetailIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
