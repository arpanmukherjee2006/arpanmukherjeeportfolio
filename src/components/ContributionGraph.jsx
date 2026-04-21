export default function ContributionGraph() {
  // Generate random contribution data
  const generateContributions = () => {
    const contributions = []
    
    for (let week = 0; week < 52; week++) {
      for (let day = 0; day < 7; day++) {
        const level = Math.floor(Math.random() * 5)
        contributions.push({ week, day, level })
      }
    }
    return contributions
  }

  const contributions = generateContributions()
  const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']

  const getColor = (level) => {
    const colors = [
      '#1a1a1a',        // Level 0 - dark background
      '#2a2a2a',        // Level 1 - slightly lighter
      '#4a4a4a',        // Level 2 - medium gray
      '#8a8a8a',        // Level 3 - light gray
      '#EDEDED'         // Level 4 - text-primary color
    ]
    return colors[level]
  }

  return (
    <div className="py-8 sm:py-12">
      <h3 className="text-lg sm:text-xl text-text-primary font-mono mb-4">
        GitHub Contributions
      </h3>
      <div className="relative overflow-x-auto bg-dark-card/30 border border-dark-border rounded-lg p-3 sm:p-4">
        <div className="hidden sm:flex gap-1 text-xs text-text-secondary font-mono mb-2">
          {months.map((month, idx) => (
            <div key={idx} className="w-16 text-center">
              {month}
            </div>
          ))}
        </div>
        <div className="flex gap-0.5 sm:gap-1">
          {Array.from({ length: 52 }).map((_, weekIdx) => (
            <div key={weekIdx} className="flex flex-col gap-0.5 sm:gap-1">
              {Array.from({ length: 7 }).map((_, dayIdx) => {
                const contrib = contributions[weekIdx * 7 + dayIdx]
                return (
                  <div
                    key={dayIdx}
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm transition-all hover:ring-1 hover:ring-text-primary cursor-pointer"
                    style={{ backgroundColor: contrib ? getColor(contrib.level) : '#1a1a1a' }}
                    title={`${contrib?.level || 0} contributions`}
                  />
                )
              })}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-3 sm:mt-4 text-xs text-text-secondary font-mono">
          <span>Less</span>
          <div className="flex gap-0.5 sm:gap-1">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-sm"
                style={{ backgroundColor: getColor(level) }}
              />
            ))}
          </div>
          <span>More</span>
        </div>
        <p className="text-xs text-text-secondary font-mono mt-2">
          118 contributions in the last year
        </p>
      </div>
    </div>
  )
}
