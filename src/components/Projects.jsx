export default function Projects() {
  const projects = [
    {
      title: 'CrackWise',
      link: 'crackwise.in',
      url: 'https://crackwise.in',
      description: 'CrackWise is an interactive JEE and NEET preparation platform built from the ground up to help students study smarter. Instead of overwhelming students with endless content, CrackWise prioritizes chapters by weightage — ensuring you focus on the topics that matter most in the actual exam.',
      details: 'Built using PYQ analysis spanning 15 years, the platform offers 50+ concept sheets, 1000+ practice questions with step-by-step solutions, and covers over 80% of exam-relevant marks — all optimized for fast access and easy progress tracking.',
      tags: ['Next.js', 'Supabase', 'JavaScript', 'JEE / NEET', 'EdTech']
    },
    {
      title: 'Taskumi — AI-Powered Task Manager',
      link: 'taskumi.vercel.app',
      url: 'https://taskumi.vercel.app',
      description: 'Taskumi is a modern task management application with an integrated AI assistant. It features a clean, dark-themed interface with a sidebar navigation including My Tasks, Notes, History, and AI Tools sections.',
      details: 'The app displays today\'s tasks with date and time, offers multiple view options (list and grid), and includes a built-in Task Assistant that helps users add tasks using natural language commands. Users can type commands like "add [task]" or "add [task1], [task2]" to quickly create multiple tasks. The interface includes theme switching and a command-based interaction system for power users.',
      tags: ['React', 'AI Assistant', 'Task Management', 'Dark UI', 'Productivity']
    }
  ]

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20">
      <h2 className="text-2xl sm:text-3xl mb-8 sm:mb-12 text-text-primary font-mono">
        Projects
      </h2>
      <div className="space-y-8 sm:space-y-12 md:space-y-16">
        {projects.map((project, idx) => (
          <div 
            key={project.title} 
            className="group bg-dark-card/30 border border-dark-border rounded-lg p-4 sm:p-6 md:p-8 hover:border-text-primary/50 transition-all duration-500 hover-lift scroll-reveal"
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            <div className="mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl md:text-2xl text-text-primary font-mono mb-2 sm:mb-3 group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary text-xs sm:text-sm font-mono hover:underline inline-flex items-center gap-1 sm:gap-2 group/link break-all"
              >
                <span className="group-hover/link:translate-x-1 transition-transform">{project.link}</span>
                <span className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
              </a>
            </div>
            <div className="space-y-3 sm:space-y-4 max-w-4xl">
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-mono">
                {project.description}
              </p>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-mono">
                {project.details}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-dark-bg border border-dark-border px-2 sm:px-3 py-1 rounded text-xs text-text-secondary font-mono hover:border-text-primary/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
