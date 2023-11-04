import React from 'react'

interface GithubContributionGraphProps {
  contributions: any
}

export default function GithubContributionGraph(props:GithubContributionGraphProps) {
  const { contributions } = props
  
  
  const getColor = (count:number) => {
    switch (true) {
      case (count >= 0 && count <= 1):
        return "#ebedf0";
      case (count >= 2 && count <= 5):
        return "#c6e48b";
      case (count >= 6 && count <= 10):
        return "#7bc96f";
      case (count >= 11 && count <= 15):
        return "#239a3b";
      case (count >= 16):
        return "#196127";
      default:
        return "#ebedf0";
    }
  }

  return contributions && (
    <div className="my-12">
      <h2 className="text-4xl">Yearly Contributions</h2>
      <div className="grid gap-px md:gap-1 grid-rows-1 mt-8" style={{gridTemplateColumns: "repeat(53, auto)"}}>
         {/* weeks */}
        {contributions.contributionCalendar.weeks.map((week:any, index:number) => {
          return (
            <div key={index} className="grid grid-cols-1 gap-px md:gap-1" style={{}}>
              {/* days */}
              {week.contributionDays.map((day:any, index:number) => {
                return (
                  <div 
                    key={index} 
                    className="rounded-sm md:border w-full h-full"
                    style={{paddingTop: "100%", backgroundColor: getColor(day.contributionCount)}}
                  ></div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
