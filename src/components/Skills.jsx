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
    <section id="skills" className="py-20">
      <h2 className="text-3xl mb-8 text-text-primary font-mono">
        Skills & Technologies
      </h2>
      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-text-secondary text-xs font-mono tracking-wider mb-4">
              {category.title}
            </h3>
            {category.description && (
              <p className="text-text-secondary text-sm font-mono mb-4 max-w-4xl">
                {category.description}
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-dark-card border border-dark-border px-4 py-2 rounded text-sm text-text-primary font-mono hover:border-text-primary transition-colors"
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
