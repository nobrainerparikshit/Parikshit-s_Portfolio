export function ThankYouPage() {
  return (
    <div className="max-w-[42rem] space-y-8 animate-fade-up">
      <section>
        <p className="eyebrow mb-2">Message Sent</p>
        <h1 className="page-title mb-4">
          Thank You.
        </h1>
        <p className="font-serif text-[17px] leading-[1.8] text-foreground/80">
          Thank you for reaching out. I've successfully received your message
          and will get back to you as soon as possible.
        </p>
        <p className="font-serif text-[17px] leading-[1.8] text-foreground/80">
          Whether it's about research, collaborations, speaking opportunities,
          projects, or simply saying hello, I appreciate you taking the time to
          write.
        </p>
        <p className="font-serif italic text-foreground/60">
          Have a wonderful day 🫡
        </p>
      </section>
    </div>
  )
}