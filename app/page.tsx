import Hero3D from '@/components/Hero3D'
import NavDonut from '@/components/NavDonut'
import Ticker from '@/components/Ticker'
import assets from './data/assets.json'

function sum(arr:number[]){ return arr.reduce((a,b)=>a+b,0) }

export default function HomePage(){
  const total = sum(assets.map(a=>a.value))
  const byCat = Array.from(assets.reduce((m:any,a:any)=>m.set(a.category,(m.get(a.category)||0)+a.value), new Map()))
    .map(([k,v]:any)=>({ name: k[0].toUpperCase()+k.slice(1), value: total? v/total*100 : 0 }))

  return (
    <>
      <Hero3D minted={total/1000} nav={1} lastUpdate="00:00 UTC"/>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="glass p-4">
          <div className="text-sm font-medium mb-2">Market Ticker</div>
          <Ticker items={byCat.map(c=>c.name)} />
        </div>
        <div className="glass p-4">
          <div className="text-sm font-medium mb-2">NAV Composition</div>
          <NavDonut shares={byCat} />
        </div>
      </section>
    </>
  )
}
