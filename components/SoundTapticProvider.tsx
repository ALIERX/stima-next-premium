'use client'
import React, { createContext, useContext, useMemo, useRef, useState } from 'react'

type Ctx = { enabled: boolean; toggle: () => void; click: () => void; success: () => void; vibrate: (ms?: number) => void }
const C = createContext<Ctx>({ enabled: true, toggle: ()=>{}, click: ()=>{}, success: ()=>{}, vibrate: ()=>{} })
export function useFX(){ return useContext(C) }

export default function SoundTapticProvider({ children }: { children: React.ReactNode }){
  const [enabled, setEnabled] = useState(true)
  const audioClick = useRef<HTMLAudioElement | null>(null)

  function ensure(){ if(!audioClick.current) audioClick.current = new Audio('/sfx/click.wav') }
  function click(){ if(!enabled) return; ensure(); audioClick.current!.currentTime=0; audioClick.current!.play().catch(()=>{}); vibrate(10) }
  function success(){ if(!enabled) return; ensure(); audioClick.current!.play().catch(()=>{}); vibrate(20) }
  function vibrate(ms=8){ if(typeof window!=='undefined' && 'vibrate' in navigator) (navigator as any).vibrate(ms) }

  const value = useMemo(()=>({ enabled, toggle: ()=>setEnabled(v=>!v), click, success, vibrate }), [enabled])
  return <C.Provider value={value}>{children}</C.Provider>
}
