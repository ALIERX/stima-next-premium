'use client'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import AssetRadar from './AssetRadar'
import { useFX } from './SoundTapticProvider'

export default function AssetCard({ a }:{a:any}){
  const ref = useRef<HTMLDivElement>(null)
  const { click } = useFX()
  function move(e: React.MouseEvent){
    const el = ref.current; if(!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    const rx = (y - 0.5) * 6
    const ry = (x - 0.5) * -6
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`
  }
  function leave(){ const el = ref.current; if(el) el.style.transform = `rotateX(0deg) rotateY(0deg)` }
  return (
    <Link href={`/assets/${a.id}`} onClick={click}>
      <motion.div ref={ref} className="glass tilt p-4" onMouseMove={move} onMouseLeave={leave} whileHover={{ scale: 1.02 }} transition={{ type:'spring', stiffness:180, damping:18 }}>
        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black/40">
          <img src={a.image} alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="mt-3">
          <div className="text-[10px] uppercase tracking-wide text-slate-400">{a.category}</div>
          <div className="text-sm font-semibold">{a.brand} — {a.name}</div>
          <div className="text-xs text-slate-400">{a.year || 'N/A'}</div>
        </div>
        <div className="mt-2"><AssetRadar asset={a} height={160}/></div>
      </motion.div>
    </Link>
  )
}
