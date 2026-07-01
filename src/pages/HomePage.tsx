import { Link } from 'react-router-dom'
import { BackToTop } from '../components/Footer'

export function HomePage() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="animate-fade-up">
        <p className="font-serif text-[1.55rem] sm:text-[1.55rem] leading-[1.32] text-foreground">
          Hi, I'm Parikshit<span className="highlight-link"> a student, researcher & innovator</span> from India
          advancing research in robotics, artificial intelligence, machine learning, & AI ethics. I aspire to be a polymath, constantly seeking knowledge across diverse fields. The quote 
          <span className="highlight-link"> "jack of all trades, master of none, but oftentimes better than a master of one" </span> 
          defines my philosophy toward learning, innovation, and interdisciplinary thinking.
        </p>
      </section>

      <section className="animate-fade-up" style={{ animationDelay: '160ms' }}>
        <hr className="hairline mb-6" />
        <p className="eyebrow mb-2">My Story</p>
        <h2 className="section-title mb-4">How I Got Started</h2>
        <div className="space-y-4 font-serif text-[25px] sm:text-[20px] leading-[1.5] text-foreground/85 max-w-[45rem]">
          <p>
            My Journey began in september of 2024
            when i signed up for a robotics workshop that was ₹500, that one workshop changed my life forever, 
            it was the first time i was exposed to robotics and i was fascinated by it, 
            i started learning more about robotics and soon i was building my own robots and participating in competitions.
          </p>
          <p>
            Looking back, it's crazy how a ₹500 workshop ended up changing my entire life, that one small opportunity has already given me a return of more than 50× what I paid.
            That single decision led me to opportunities I never thought were possible. The skills I learned opened doors to competitions, scholarships, research, and experiences 
            worth far more than what I had invested. It taught me a lesson I'll always carry with me: never underestimate a small opportunity. 
            Sometimes the smallest decisions end up changing everything.
          </p>
          <p>
            The more I built, the more I realized that robotics wasn't just a hobby anymore, 
            it had become my way of contributing to the world. Every project since has been an attempt to solve a problem, 
            learn something new, and hopefully make someone's life a little better. I built robots that clean water, detect diseases, and ..... (read about it in my <Link to="/projects" className="highlight-link">projects : )</Link> section).
          </p>
        </div>
      </section>

      <section className="animate-fade-up" style={{ animationDelay: '240ms' }}>
        <hr className="hairline mb-6" />
        <h2 className="section-title mb-5">Get involved</h2>
        <ul className="space-y-3">
          {[
            { to: '/contact', label: 'Contact' },
            { to: '/Awards', label: 'Awards' },
            { to: '/projects', label: 'Projects' },
            { to: '/blog', label: 'Blog' },
          ].map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="cta-link">
                {item.label}
                <span aria-hidden="true"> →</span>
              </Link>
            </li>
          ))}
        </ul>
        <BackToTop />
      </section>
    </div>
  )
}
