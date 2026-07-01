import { NavLink } from 'react-router-dom'

const links = [
  { to: '/contact', label: 'Contact' },
  { to: '/projects', label: 'Projects' },
  { to: '/', label: 'Home', end: true },
  { to: '/blog', label: 'Blog' },
  { to: '/experience', label: 'Experience' },
  { to: '/awards', label: 'Awards', mobileLabel: 'Awards' },
]

export function Nav() {
  return (
    <nav aria-label="Main navigation" className="border-y border-foreground/88 py-[0.85rem] sm:py-4 w-full">
      <ul className="grid grid-cols-6 items-center w-full">
        {links.map((link) => (
          <li key={link.to} className="min-w-0 text-center">
            <NavLink
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                [
                  'inline-block font-sans text-[9px] sm:text-[13px] md:text-sm tracking-[0.02em] text-foreground hover:opacity-60 transition-opacity whitespace-nowrap',
                  isActive ? 'font-medium' : '',
                ].join(' ')
              }
            >
              {link.mobileLabel ? (
                <>
                  <span className="sm:hidden">{link.mobileLabel}</span>
                  <span className="hidden sm:inline">{link.label}</span>
                </>
              ) : (
                link.label
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
