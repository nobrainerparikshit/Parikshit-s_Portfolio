export function Footer() {
  return (
    <footer className="mt-12 sm:mt-16 pt-6 border-t border-foreground/20">
      <ul className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm text-foreground/80">
        <li>
          <a
            href="https://www.instagram.com/nobra1nerpar1ksh1t/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/parikshitsinh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  )
}
export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="mt-8 font-sans text-sm text-foreground/60 hover:text-foreground transition-colors">
      ↑ Back to top
    </button>
  )
}
