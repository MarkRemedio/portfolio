import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useRef } from 'react'
import type { Group } from 'three'

function SpinningStars() {
  const ref = useRef<Group>(null)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.01
      ref.current.rotation.x += delta * 0.004
    }
  })
  return (
    <group ref={ref}>
      <Stars radius={120} depth={60} count={6000} factor={4} saturation={0} fade speed={0.4} />
      <Stars radius={70} depth={40} count={1500} factor={2} saturation={0.4} fade speed={1.2} />
    </group>
  )
}

export default function Starfield() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#03060f']} />
        <fog attach="fog" args={['#03060f', 30, 110]} />
        <SpinningStars />
      </Canvas>
    </div>
  )
}
