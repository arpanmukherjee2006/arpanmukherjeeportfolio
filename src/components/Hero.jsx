export default function Hero() {
  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience')
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20 animate-pulse-slow"></div>
      
      <div className="space-y-4 sm:space-y-6 relative z-10 w-full">
        <p className="text-text-secondary text-xs sm:text-sm font-mono animate-fade-in">
          Hola, I'm 👋
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-text-primary tracking-tight animate-slide-up leading-tight">
          <span className="inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-text-primary hover:to-text-secondary transition-all duration-300">
            ARPAN
          </span>
          <br />
          <span className="inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-text-primary hover:to-text-secondary transition-all duration-300">
            MUKHERJEE
          </span>
        </h1>
        <p className="text-text-secondary text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-mono animate-fade-in-delay">
          I BUILD WEBSITES, DIGITAL PRODUCTS & GROW THEM WITH PERFORMANCE MARKETING
        </p>
        <button 
          onClick={scrollToExperience}
          className="mt-4 sm:mt-8 bg-dark-card border border-dark-border px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-mono text-xs sm:text-sm hover:border-text-primary hover:shadow-lg hover:shadow-text-primary/20 transition-all duration-300 animate-fade-in-delay-2 group"
        >
          View My Works →
        </button>
      </div>
      
      {/* Decorative elements - hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-20 w-64 h-64 bg-text-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="hidden md:block absolute bottom-20 left-20 w-96 h-96 bg-text-secondary/5 rounded-full blur-3xl animate-float-delay"></div>
    </section>
  )
}
