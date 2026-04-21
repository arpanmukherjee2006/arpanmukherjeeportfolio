export default function Skills() {
  const skillCategories = [
    {
      title: "FRONTEND DEVELOPMENT",
      skills: ["HTML & CSS", "JavaScript", "React", "Astro", "Responsive Design", "UI/UX"]
    },
    {
      title: "BACKEND & DATABASE",
      skills: ["Node.js", "Supabase", "REST APIs"]
    },
    {
      title: "DESIGN & CREATIVE",
      description: "Social media post design, brand creatives, thumbnails, and motion graphics for reels and short-form video content.",
      skills: ["Canva", "Adobe Photoshop", "Figma", "Social Media Design", "Poster & Banner Design", "Brand Creatives", "Thumbnail Design", "Reel Editing", "Motion Graphics"]
    },
    {
      title: "MARKETING & GROWTH",
      skills: ["SEO", "Meta Ads", "Performance Marketing", "Social Media Management", "Content Strategy"]
    },
    {
      title: "TOOLS & PLATFORMS",
      skills: ["Git & GitHub", "Netlify / Vercel", "WordPress"]
    }
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 relative">
      <h2 className="text-2xl sm:text-3xl mb-8 sm:mb-12 text-text-primary font-mono">
        Skills & Technologies
      </h2>
      <div className="space-y-8 sm:space-y-12">
        {skillCategories.map((category, idx) => (
          <div key={category.title} className="scroll-reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <h3 className="text-text-secondary text-xs font-mono tracking-wider mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-6 sm:w-8 h-px bg-text-secondary"></span>
              {category.title}
            </h3>
            {category.description && (
              <p className="text-text-secondary text-xs sm:text-sm font-mono mb-3 sm:mb-4 max-w-4xl">
                {category.description}
              </p>
            )}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-dark-card border border-dark-border px-2.5 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm text-text-primary font-mono hover:border-text-primary hover:shadow-lg hover:shadow-text-primary/10 transition-all duration-300 hover-lift"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
