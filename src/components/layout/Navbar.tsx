import { NavLink } from 'react-router-dom';
import { siteConfig } from '../../data/site';
import { CodeIcon, ExternalLinkIcon } from '../ui/Icons';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative py-3 text-sm transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-accent after:transition-transform ${
    isActive
      ? 'text-text-primary after:scale-x-100'
      : 'text-text-secondary after:scale-x-0 hover:text-text-primary'
  }`;

export function Navbar() {
  return (
    <header className="border-b border-border bg-page/95">
      <nav className="page-shell flex h-12 items-center justify-between" aria-label="Main navigation">
        <NavLink
          to="/"
          className="flex items-center gap-3 text-text-primary"
          aria-label={`${siteConfig.name}, projects`}
        >
          <CodeIcon className="h-7 w-7" />
          <span className="hidden text-base font-semibold sm:inline">{siteConfig.name}</span>
        </NavLink>

        <div className="flex h-full items-center gap-5 sm:gap-9">
          <NavLink to="/" end className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            GitHub
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
