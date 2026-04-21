export default function Experience() {
  const experiences = [
    {
      role: 'Social Media Manager',
      company: 'Vrita Ventures Private Limited',
      period: 'Mar 2026 – Present',
      description: 'Managing and growing Vrita Ventures\' digital presence across social media platforms. Responsible for creating engaging posts and reels, scheduling content, maintaining brand consistency, running and optimizing ad campaigns, and implementing data-driven strategies to increase reach, engagement, and lead generation. Vrita Ventures is a DPIIT-recognized, ISO-certified GovTech and EdTech company with clients including the Jharkhand Government, CCL, and the Indian Army.'
    }
  ]

  const freelanceWork = [
    {
      title: 'White Horse Events Management',
      location: 'Ranchi, Jharkhand',
      description: 'Designed and developed the complete website for White Horse Events Management, handling everything from layout and visual design to front-end development. Also managed SEO strategy and on-page optimization to improve organic visibility and search rankings for local event management queries in Ranchi.',
      link: 'whitehorseworld.com',
      url: 'https://whitehorseworld.com'
    },
    {
      title: 'Cell Security Care',
      description: 'Designed and developed a complete website for Cell Security Care — a mobile security service. Built a responsive, fast-loading site with clean UI to effectively showcase their services and drive customer inquiries.',
      link: 'cellsecuritycare.vercel.app',
      url: 'https://cellsecuritycare.vercel.app'
    },
    {
      title: 'Institute of Forest Productivity',
      description: 'Developed the official website for the Institute of Forest Productivity, a government research institution. Created a professional, structured web presence with clear information architecture suited for an academic and institutional audience.',
      link: 'instituteofforestproductivity.netlify.app',
      url: 'https://instituteofforestproductivity.netlify.app'
    }
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20">
      <h2 className="text-2xl sm:text-3xl mb-6 sm:mb-8 text-text-primary font-mono">
        Experience
      </h2>
      
      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx}>
            <h3 className="text-lg sm:text-xl text-text-primary font-mono mb-1">
              {exp.role}
            </h3>
            <p className="text-text-secondary text-xs sm:text-sm font-mono mb-1">
              {exp.company}
            </p>
            <p className="text-text-secondary text-xs font-mono mb-3 sm:mb-4">
              {exp.period}
            </p>
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-mono max-w-4xl">
              {exp.description}
            </p>
          </div>
        ))}

        <div>
          <h3 className="text-lg sm:text-xl text-text-primary font-mono mb-4 sm:mb-6">
            Freelance Work
          </h3>
          <div className="space-y-6 sm:space-y-8">
            {freelanceWork.map((work, idx) => (
              <div key={idx}>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-1">
                  <h4 className="text-base sm:text-lg text-text-primary font-mono">
                    {work.title}
                  </h4>
                  {work.location && (
                    <span className="text-text-secondary text-xs font-mono">
                      {work.location}
                    </span>
                  )}
                </div>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-mono mb-2 max-w-4xl">
                  {work.description}
                </p>
                <a 
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary text-xs sm:text-sm font-mono hover:underline inline-flex items-center gap-1 break-all"
                >
                  {work.link} <span>↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
