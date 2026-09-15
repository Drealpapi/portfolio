"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls, ContactShadows, Float, Center } from "@react-three/drei"
import type { Group } from "three"

function Model({ url, scale = 1, autoRotate = false }: { url: string; scale?: number; autoRotate?: boolean }) {
  const { scene } = useGLTF(url)
  const ref = useRef<Group>(null)

  useFrame((_, delta) => {
    if (autoRotate && ref.current) {
      ref.current.rotation.y += delta * 0.4
    }
  })

  return (
    <Center>
      <primitive ref={ref} object={scene} scale={scale} />
    </Center>
  )
}

function Loader() {
  return (
    <mesh>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial color="#f97316" wireframe />
    </mesh>
  )
}

interface ModelViewerProps {
  src: string
  width?: string | number
  height?: string | number
  scale?: number
  orbitControls?: boolean
  autoRotate?: boolean
  float?: boolean
  className?: string
  style?: React.CSSProperties
}

export default function ModelViewer({
  src,
  width = "100%",
  height = 400,
  scale = 1,
  orbitControls = true,
  autoRotate = true,
  float = true,
  className,
  style,
}: ModelViewerProps) {
  return (
    <div style={{ width, height, ...style }} className={className}>
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 50, near: 0.01, far: 1000 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <ambientLight intensity={1.2} color="#fff8f0" />
        <directionalLight position={[5, 5, 5]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-3, 2, -2]} intensity={0.7} color="#f97316" />
        <pointLight position={[3, 0, 3]} intensity={0.4} color="#ffe4b0" />

        <Suspense fallback={<Loader />}>
          {float ? (
            <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3}>
              <Model url={src} scale={scale} autoRotate={autoRotate} />
            </Float>
          ) : (
            <Model url={src} scale={scale} autoRotate={autoRotate} />
          )}
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.2}
            scale={6}
            blur={3}
            color="#f97316"
          />
        </Suspense>

        {orbitControls && (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 1.6}
          />
        )}
      </Canvas>
    </div>
  )
}
