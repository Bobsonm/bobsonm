import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Environment, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function MorphingSphere({ scrollY }: { scrollY: React.MutableRefObject<number> }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    const s = scrollY.current;
    mesh.current.rotation.y = t * 0.15 + s * 0.005;
    mesh.current.rotation.x = Math.sin(t * 0.2) * 0.2 + s * 0.002;
    const scale = 1 + Math.sin(t * 0.6) * 0.04 - Math.min(s * 0.0008, 0.4);
    mesh.current.scale.setScalar(scale);
    mesh.current.position.y = Math.sin(t * 0.4) * 0.1 - s * 0.003;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <Sphere ref={mesh} args={[1.6, 128, 128]}>
        <MeshDistortMaterial
          color="#4F46E5"
          attach="material"
          distort={0.45}
          speed={1.8}
          roughness={0.15}
          metalness={0.85}
          emissive="#1E1E5A"
          emissiveIntensity={0.4}
        />
      </Sphere>
    </Float>
  );
}

function Particles({ count = 1500 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    points.current.rotation.x = state.clock.getElapsedTime() * 0.01;
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#7C75FF"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function Smoke({ scrollY }: { scrollY: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.z = t * 0.05;
    group.current.position.x = Math.sin(t * 0.3) * 0.5;
    group.current.scale.setScalar(1 + Math.min(scrollY.current * 0.001, 0.6));
  });

  return (
    <group ref={group}>
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={i} position={[Math.cos(i) * 2.5, Math.sin(i) * 1.5, -2 - i * 0.4]}>
          <sphereGeometry args={[1.2 + i * 0.2, 32, 32]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? "#4F46E5" : "#7C75FF"}
            transparent
            opacity={0.04}
          />
        </mesh>
      ))}
    </group>
  );
}

interface Hero3DProps {
  scrollY: React.MutableRefObject<number>;
}

export function Hero3D({ scrollY }: Hero3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#7C75FF" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#4F46E5" />
        <Smoke scrollY={scrollY} />
        <MorphingSphere scrollY={scrollY} />
        <Particles />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
