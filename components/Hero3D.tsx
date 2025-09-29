'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import OracleRings from './OracleRings'
import CounterRoll from './CounterRoll'

const HeroScene = dynamic(()=>import('./hero/HeroScene'), { ssr:false })

export default function Hero3D({ minted=0, nav=1, lastUpdate='00:00 UTC' }:{minted?:number, nav?:number, lastUpdate?:string}){
  return (
    <section className="relative overflow-hidden glass">
      <div className="grid lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-5 p-8 flex flex-col justify-center gap-6">
          <motion.h1 initial={{x:-20,opacity:0}} animate={{x:0,opacity:1}} transition={{type:'spring',stiffness:120,damping:16}} className="text-4xl md:text-5xl font-semibold">
            Tokenize <span className="bg-clip-text text-transparent bg-gold-sheen">Reality</span>.
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2}} className="text-sm text-slate-300">
            From vintage Rolex to Da Vinci — minted, verified, liquid. Daily deterministic valuation secured by on-chain oracle.
          </motion.p>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-slate-400">Minted supply</div>
              <div className="text-xl font-semibold"><CounterRoll value={minted} suffix=" STIMA" decimals={2}/></div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-slate-400">NAV / token</div>
              <div className="text-xl font-semibold">€ <CounterRoll value={nav} decimals={4}/></div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-slate-400">Last update</div>
              <div className="text-sm">⏳ {lastUpdate}</div>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="/assets" className="px-5 py-3 rounded-xl border border-gold/30 bg-white/5 hover:bg-white/10 transition">Explore Assets</a>
            <a href="/mint" className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition">Tokenize Now</a>
          </div>
        </div>
        <div className="lg:col-span-7 relative min-h-[420px]">
          <div className="absolute inset-0"><HeroScene/></div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><OracleRings active={true}/></div>
        </div>
      </div>
    </section>
  )
}
