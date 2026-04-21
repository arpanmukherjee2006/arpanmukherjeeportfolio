export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <h2 className="text-2xl sm:text-3xl mb-6 sm:mb-8 text-text-primary font-mono">
        About Me
      </h2>
      <div className="space-y-3 sm:space-y-4 text-text-secondary text-xs sm:text-sm leading-relaxed max-w-4xl font-mono">
        <p>
          I'm Arpan Mukherjee — a software developer, founder, and builder based in Jharkhand, India. I build web 
          applications that solve real problems, with a focus on clean UI, performance, and user experience.
        </p>
        <p>
          I founded <span className="text-text-primary">CrackWise</span>, a JEE and NEET preparation platform designed 
          to help students study smarter — not harder — by prioritizing high-weightage topics and providing 15 years of 
          PYQ-backed question banks. Beyond product development, I work as a freelance web developer building custom 
          websites for businesses and institutions across various industries.
        </p>
        <p>
          I'm equally comfortable in the frontend (React, HTML/CSS, Astro) and backend (Node.js, Supabase), and I layer 
          in SEO and performance marketing to ensure the products I build actually get discovered and used.
        </p>
        <p>
          I believe in building in public, learning through shipping, and creating tools that genuinely make a difference 
          in people's lives.
        </p>
        <p className="pt-3 sm:pt-4">
          My <span className="text-text-primary underline cursor-pointer">social links</span> if you wish to connect with me
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
          <a href="https://x.com/Mukherjee_ar" target="_blank" rel="noopener noreferrer" className="bg-dark-card border border-dark-border px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs hover:border-text-primary transition-colors flex items-center gap-1.5 sm:gap-2">
            <span>𝕏</span> Twitter
          </a>
          <a href="https://github.com/arpanmukherjee2006" target="_blank" rel="noopener noreferrer" className="bg-dark-card border border-dark-border px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs hover:border-text-primary transition-colors flex items-center gap-1.5 sm:gap-2">
            <span>⚡</span> GitHub
          </a>
          <a href="https://www.linkedin.com/in/arpan-mukherjee-3b12aa236/" target="_blank" rel="noopener noreferrer" className="bg-dark-card border border-dark-border px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs hover:border-text-primary transition-colors flex items-center gap-1.5 sm:gap-2">
            <span>💼</span> LinkedIn
          </a>
          <a href="https://www.instagram.com/berozgarengineerrr/" target="_blank" rel="noopener noreferrer" className="bg-dark-card border border-dark-border px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs hover:border-text-primary transition-colors flex items-center gap-1.5 sm:gap-2">
            <span>📷</span> Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
