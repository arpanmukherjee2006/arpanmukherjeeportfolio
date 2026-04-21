export default function ContributionGraph() {
  // Generate random contribution data
  const generateContributions = () => {
    const contributions = []
    const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']
    
    for (let month = 0; month < 12; month++) {
      for (let week = 0; week < 4; week++) {
        for (let day = 0; day < 7; day++) {
          const level = Math.floor(Math.random() * 5)
          contributions.push({ month, week, day, level })
        }
      }
    }
    return contributions
  }

  const contributions = generateContributions()
  const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']

  const getColor = (level) => {
    const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
    return colors[level]
  }

  return (
    <div className="py-12">
      <div className="relative">
        <div className="flex gap-1 text-xs text-text-secondary font-mono mb-2">
          {months.map((month, idx) => (
            <div key={idx} className="w-16 text-center">
              {month}
            </div>
          ))}
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 52 }).map((_, weekIdx) => (
            <div key={weekIdx} className="flex flex-col gap-1">
              {Array.from({ length: 7 }).map((_, dayIdx) => {
                const contrib = contributions[weekIdx * 7 + dayIdx]
                return (
                  <div
                    key={dayIdx}
                    className="w-3 h-3 rounded-sm transition-all hover:ring-1 hover:ring-text-primary cursor-pointer"
                    style={{ backgroundColor: contrib ? getColor(contrib.level) : '#161b22' }}
                    title={`${contrib?.level || 0} contributions`}
                  />
                )
              })}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-4 text-xs text-text-secondary font-mono">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: getColor(level) }}
              />
            ))}
          </div>
          <span>More</span>
        </div>
        <p className="text-xs text-text-secondary font-mono mt-2">
          Total 4636 contributions
        </p>
      </div>
    </div>
  )
}
