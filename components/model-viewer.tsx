"use client"

import { Suspense, useEffect, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, OrbitControls, ContactShadows, Float } from "@react-three/drei"
import { Box3, Vector3 } from "three"
import type { Group } from "three"

interface ModelProps {
  url: string
  scale?: number
  autoRotate?: boolean
}

function Model({ url, scale = 1, autoRotate = false }: ModelProps) {
  const { scene } = useGLTF(url)
  const ref = useRef<Group>(null)
  const { camera } = useThree()

  // Auto-center & fit camera to bounding box on load
  useEffect(() => {
    if (!ref.current) return

    const box = new Box3().setFromObject(ref.current)
    const center = new Vector3()
    const size = new Vector3()
    box.getCenter(center)
    box.getSize(size)

    // Shift model so its center is at world origin
    ref.current.position.sub(center)

    // Pull camera back enough to see full model
    const maxDim = Math.max(size.x, size.y, size.z)
    const fov = (camera as any).fov * (Math.PI / 180)
    const dist = Math.abs(maxDim / (2 * Math.tan(fov / 2))) * 1.5
    camera.position.set(0, 0, dist)
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()
  }, [scene, camera])

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
        camera={{ position: [0, 0, 5], fov: 45, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <ambientLight intensity={1.0} color="#fff8f0" />
        <directionalLight position={[5, 5, 5]} intensity={1.6} color="#ffffff" />
        <pointLight position={[-3, 2, -2]} intensity={0.6} color="#f97316" />
        <pointLight position={[3, 0, 3]} intensity={0.3} color="#ffe4b0" />

        <Suspense fallback={<Loader />}>
          {float ? (
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
              <Model url={src} scale={scale} autoRotate={autoRotate} />
            </Float>
          ) : (
            <Model url={src} scale={scale} autoRotate={autoRotate} />
          )}
          <ContactShadows
            position={[0, -1.2, 0]}
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
