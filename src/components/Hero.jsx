export default function Hero() {
  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience')
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20 animate-pulse-slow"></div>
      
      <div className="space-y-6 relative z-10">
        <p className="text-text-secondary text-sm font-mono animate-fade-in">
          Hola, I'm 👋
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-text-primary tracking-tight animate-slide-up">
          <span className="inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-text-primary hover:to-text-secondary transition-all duration-300">
            ARPAN
          </span>
          <br />
          <span className="inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-text-primary hover:to-text-secondary transition-all duration-300">
            MUKHERJEE
          </span>
        </h1>
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed font-mono animate-fade-in-delay">
          I BUILD WEBSITES, DIGITAL PRODUCTS & GROW THEM WITH PERFORMANCE MARKETING
        </p>
        <button 
          onClick={scrollToExperience}
          className="mt-8 bg-dark-card border border-dark-border px-6 py-3 rounded-lg font-mono text-sm hover:border-text-primary hover:shadow-lg hover:shadow-text-primary/20 transition-all duration-300 animate-fade-in-delay-2 group"
        >
          View My Works →
        </button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-text-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-text-secondary/5 rounded-full blur-3xl animate-float-delay"></div>
    </section>
  )
}
