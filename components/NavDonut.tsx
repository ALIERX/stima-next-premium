'use client'
import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Sector, Tooltip } from 'recharts'
export default function NavDonut({ shares }:{shares:{name:string,value:number}[]}){
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const renderActiveShape = (p:any) => {
    const RAD = Math.PI/180
    const {cx,cy,midAngle,innerRadius,outerRadius,startAngle,endAngle,payload,value} = p
    const sin = Math.sin(-RAD*midAngle), cos = Math.cos(-RAD*midAngle)
    const sx=cx+(outerRadius+8)*cos, sy=cy+(outerRadius+8)*sin
    const mx=cx+(outerRadius+18)*cos, my=cy+(outerRadius+18)*sin
    const ex=mx+(cos>=0?1:-1)*12, ey=my, ta=cos>=0?'start':'end'
    return (
      <g>
        <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle}/>
        <Sector cx={cx} cy={cy} innerRadius={outerRadius+4} outerRadius={outerRadius+8} startAngle={startAngle} endAngle={endAngle}/>
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} fill="none" stroke="#fff"/>
        <circle cx={ex} cy={ey} r={2} fill="#fff"/>
        <text x={ex+(cos>=0?6:-6)} y={ey} textAnchor={ta} className="fill-current text-sm">{payload.name}</text>
        <text x={ex+(cos>=0?6:-6)} y={ey+14} textAnchor={ta} className="fill-current text-xs">{value.toFixed? value.toFixed(1):value}%</text>
      </g>
    )
  }
  return (
    <div className="w-full h-[360px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={shares} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={110} outerRadius={150} activeIndex={activeIndex ?? undefined} activeShape={renderActiveShape} onMouseEnter={(_,i)=>setActiveIndex(i)} onMouseLeave={()=>setActiveIndex(null)} />
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
