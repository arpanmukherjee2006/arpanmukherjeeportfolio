export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
      <h2 className="text-2xl sm:text-3xl mb-6 sm:mb-8 text-text-primary font-mono">
        Get In Touch
      </h2>
      <div className="max-w-2xl">
        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-mono mb-4 sm:mb-6">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
          Feel free to reach out if you want to connect!
        </p>
        <a 
          href="mailto:mukherjeearpan206@gmail.com"
          className="inline-block bg-dark-card border border-dark-border px-4 sm:px-6 py-2 sm:py-3 rounded text-xs sm:text-sm text-text-primary hover:border-text-primary transition-colors font-mono"
        >
          Say Hello →
        </a>
      </div>
    </section>
  )
}
