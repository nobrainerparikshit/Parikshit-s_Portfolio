import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="pb-4 sm:pb-6">
      <div className="grid grid-cols-2 h-[7rem] sm:h-[8rem]">
        <div className="flex flex-col justify-center items-end border-r border-foreground/80 pr-2 sm:pr-4 min-w-0">
          <Link
            to="/"
            className="group text-foreground transition-opacity hover:opacity-80 min-w-0"
          >
            <p className="font-serif uppercase leading-[1.5] tracking-[0.005em] text-[1rem] sm:text-[1.6rem] md:text-[1.85rem]">
              PARIKSHIT'S
              <br />
              POLYMATH
              <br/>
              PORTFOLIO
            </p>
          </Link>
        </div>

        <div className="flex items-center justify-start pl-2 sm:pl-4 min-w-0 self-stretch">
          <Link
            to="/"
            aria-label="Parikshit's Portfolio"
            className="hover:opacity-85 transition-opacity inline-flex max-w-full items-center justify-center"
          >
            <img
              src="headshot.jpg"
              alt="Parikshit Jadeja"
              className="h-24 sm:h-32 w-auto object-cover"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}