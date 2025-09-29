'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import dynamic from 'next/dynamic'
const TokenRing = dynamic(()=>import('./TokenRing'), { ssr:false })
export default function HeroScene(){
  return (
    <Canvas camera={{ position: [0, 2.4, 8], fov: 45 }}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5,5,5]} intensity={1.2} />
      <Lightformer intensity={1} position={[0,5,-5]} rotation={[0,0,0]} scale={[10,10,1]} />
      <group position={[0,0,0]}>
        <TokenRing count={12} radius={4.2} speed={0.12} />
        <TokenRing count={8} radius={2.8} speed={-0.18} />
      </group>
      <Environment preset="city" />
    </Canvas>
  )
}
