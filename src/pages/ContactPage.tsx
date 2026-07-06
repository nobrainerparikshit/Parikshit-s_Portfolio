export function ContactPage() {
  return (
    <div className="space-y-8 animate-fade-up">
      <section>
        <p className="eyebrow mb-2">Let's Connect</p>

        <h1 className="section-title mb-4">
          Contact
        </h1>

        <p className="font-serif text-[16px] leading-[1.8] text-foreground/80 max-w-[40rem]">
          Whether you have a question, want to collaborate, found a bug,
          need mentorship, or simply want to say hello, I'd love to hear
          from you.
        </p>
      </section>

      <hr className="hairline" />

      <form
        action="https://formspree.io/f/xkolvqlj"
        method="POST"
        className="space-y-6 max-w-[42rem]"
      >

        <input
          type="hidden"
          name="_redirect"
          value="https://pariksh1t.netlify.app/thank-you"/>
     
        <div>
          <label>Name</label>

          <input
            type="text"
            name="name"
            required
            className="w-full mt-2 border border-foreground/20 p-3 bg-transparent"
          />
        </div>

        <div>
          <label>Email</label>

          <input
            type="email"
            name="email"
            required
            className="w-full mt-2 border border-foreground/20 p-3 bg-transparent"
          />
        </div>

        <div>
          <label>Subject</label>

          <input
            type="text"
            name="subject"
            className="w-full mt-2 border border-foreground/20 p-3 bg-transparent"
          />
        </div>

        <div>
          <label>Message</label>

          <textarea
            name="message"
            rows={8}
            required
            className="w-full mt-2 border border-foreground/20 p-3 bg-transparent"
          />
        </div>

        <button
          type="submit"
          className="cta-link"
        >
          Send Message →
        </button>
      </form>
    </div>
  )
}