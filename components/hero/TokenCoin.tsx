'use client'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
export default function TokenCoin({ radius=0.6, thickness=0.1, rotation=[0,0,0] as any, position=[0,0,0] as any }){
  const ref = useRef<any>(null)
  useFrame((_,dt)=>{ if(ref.current) ref.current.rotation.y += dt*0.4 })
  return (
    <group ref={ref} rotation={rotation} position={position}>
      <mesh><cylinderGeometry args={[radius, radius, thickness, 64]} /><meshStandardMaterial color="#B48C58" metalness={1} roughness={0.2} /></mesh>
      <mesh rotation={[Math.PI/2,0,0]} position={[0,0,0]}><torusGeometry args={[radius, thickness/3, 24, 96]} /><meshStandardMaterial color="#7a5d3b" metalness={0.9} roughness={0.3} /></mesh>
    </group>
  )
}
