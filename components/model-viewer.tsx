"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls, ContactShadows, Float } from "@react-three/drei"
import type { Group } from "three"

interface ModelProps {
  url: string
  scale?: number
  autoRotate?: boolean
}

function Model({ url, scale = 1, autoRotate = false }: ModelProps) {
  const { scene } = useGLTF(url)
  const ref = useRef<Group>(null)

  useFrame((_, delta) => {
    if (autoRotate && ref.current) {
      ref.current.rotation.y += delta * 0.4
    }
  })

  return <primitive ref={ref} object={scene} scale={scale} />
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
  /** Path to the .glb file, relative to /public. E.g. "/model.glb" */
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
        camera={{ position: [0, 0.8, 2.8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        {/* Lighting — warm for cream background */}
        <ambientLight intensity={1.0} color="#fff8f0" />
        <directionalLight position={[5, 5, 5]} intensity={1.6} color="#ffffff" />
        <pointLight position={[-3, 2, -2]} intensity={0.6} color="#f97316" />
        <pointLight position={[3, 0, 3]} intensity={0.3} color="#ffe4b0" />

        <Suspense fallback={<Loader />}>
          {float ? (
            <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
              <group position={[0, -0.3, 0]}>
                <Model url={src} scale={scale} autoRotate={autoRotate} />
              </group>
            </Float>
          ) : (
            <group position={[0, -0.3, 0]}>
              <Model url={src} scale={scale} autoRotate={autoRotate} />
            </group>
          )}
          <ContactShadows
            position={[0, -1.8, 0]}
            opacity={0.25}
            scale={5}
            blur={2.5}
            color="#f97316"
          />
        </Suspense>

        {orbitControls && (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.8}
            autoRotate={false}
          />
        )}
      </Canvas>
    </div>
  )
}
