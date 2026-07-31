import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const NODE_COUNT = 42
const CONNECT_DIST = 2.6

function NeuralField({ isDark }) {
  const pointsRef = useRef()
  const linesRef = useRef()
  const groupRef = useRef()

  const nodes = useMemo(() => {
    const arr = []
    for (let i = 0; i < NODE_COUNT; i++) {
      arr.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 9,
          (Math.random() - 0.5) * 5.5,
          (Math.random() - 0.5) * 4,
        ),
      )
    }
    return arr
  }, [])

  const velocities = useMemo(
    () => nodes.map(() => new THREE.Vector3((Math.random() - 0.5) * 0.004, (Math.random() - 0.5) * 0.004, (Math.random() - 0.5) * 0.002)),
    [nodes],
  )

  const positions = useMemo(() => new Float32Array(NODE_COUNT * 3), [])
  const linePositions = useMemo(() => new Float32Array(NODE_COUNT * NODE_COUNT * 6), [])

  useFrame((state) => {
    for (let i = 0; i < NODE_COUNT; i++) {
      const n = nodes[i]
      n.add(velocities[i])
      if (n.x > 4.5 || n.x < -4.5) velocities[i].x *= -1
      if (n.y > 2.75 || n.y < -2.75) velocities[i].y *= -1
      if (n.z > 2 || n.z < -2) velocities[i].z *= -1
      positions[i * 3] = n.x
      positions[i * 3 + 1] = n.y
      positions[i * 3 + 2] = n.z
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true

    let lineIdx = 0
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const d = nodes[i].distanceTo(nodes[j])
        if (d < CONNECT_DIST) {
          linePositions[lineIdx++] = nodes[i].x
          linePositions[lineIdx++] = nodes[i].y
          linePositions[lineIdx++] = nodes[i].z
          linePositions[lineIdx++] = nodes[j].x
          linePositions[lineIdx++] = nodes[j].y
          linePositions[lineIdx++] = nodes[j].z
        }
      }
    }
    linesRef.current.geometry.setDrawRange(0, lineIdx / 3)
    linesRef.current.geometry.attributes.position.needsUpdate = true

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
    }
  })

  const nodeColor = isDark ? '#5C8CFF' : '#2E6FFF'
  const lineColor = isDark ? '#2E6FFF' : '#5C8CFF'

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={NODE_COUNT} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color={nodeColor} size={0.06} sizeAttenuation transparent opacity={0.9} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={NODE_COUNT * NODE_COUNT}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={lineColor} transparent opacity={0.18} />
      </lineSegments>
    </group>
  )
}

export default function NeuralHero({ isDark = true }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      >
        <Suspense fallback={null}>
          <NeuralField isDark={isDark} />
        </Suspense>
      </Canvas>
    </div>
  )
}
