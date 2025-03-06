"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Center, Bounds } from "@react-three/drei";
import * as THREE from "three";

interface ThreeComponentsProps {
  tintLevel: number;
  autoRotate: boolean;
}

function Car3D({ tintLevel }: { tintLevel: number }) {
  const windowMaterial = new THREE.MeshPhysicalMaterial({
    color: '#000000',
    transparent: true,
    opacity: tintLevel / 100,
    roughness: 0.1,
    metalness: 0.8,
    clearcoat: 0.5,
    clearcoatRoughness: 0.1
  });

  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: '#4a4a4a',
    metalness: 0.6,
    roughness: 0.4
  });

  return (
    <group>
      {/* Car body */}
      <mesh material={bodyMaterial}>
        <boxGeometry args={[4, 1.2, 2]} />
      </mesh>
      <mesh material={bodyMaterial} position={[0, 0.8, 0]}>
        <boxGeometry args={[3, 0.8, 1.8]} />
      </mesh>

      {/* Windows */}
      {/* Windshield */}
      <mesh material={windowMaterial} position={[0.8, 0.8, 0]} rotation={[0, 0, Math.PI * 0.1]}>
        <planeGeometry args={[1.2, 0.8]} />
      </mesh>
      <mesh material={windowMaterial} position={[0.8, 0.8, 0]} rotation={[0, Math.PI, -Math.PI * 0.1]}>
        <planeGeometry args={[1.2, 0.8]} />
      </mesh>

      {/* Side windows */}
      <mesh material={windowMaterial} position={[0, 0.8, 0.9]} rotation={[0, -Math.PI * 0.5, 0]}>
        <planeGeometry args={[1.8, 0.6]} />
      </mesh>
      <mesh material={windowMaterial} position={[0, 0.8, -0.9]} rotation={[0, Math.PI * 0.5, 0]}>
        <planeGeometry args={[1.8, 0.6]} />
      </mesh>

      {/* Wheels */}
      <mesh material={bodyMaterial} position={[-1.5, -0.5, -1]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI * 0.5, 0, 0]} />
      </mesh>
      <mesh material={bodyMaterial} position={[1.5, -0.5, -1]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI * 0.5, 0, 0]} />
      </mesh>
      <mesh material={bodyMaterial} position={[-1.5, -0.5, 1]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI * 0.5, 0, 0]} />
      </mesh>
      <mesh material={bodyMaterial} position={[1.5, -0.5, 1]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} rotation={[Math.PI * 0.5, 0, 0]} />
      </mesh>
    </group>
  );
}

export function ThreeComponents({ tintLevel, autoRotate }: ThreeComponentsProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [5, 3, 5], fov: 45 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: true
      }}
    >
      <Stage
        environment="sunset"
        intensity={0.5}
        adjustCamera={false}
        shadows={false}
      >
        <Bounds fit clip observe margin={1.2}>
          <Center>
            <Car3D tintLevel={tintLevel} />
          </Center>
        </Bounds>
      </Stage>
      <OrbitControls 
        autoRotate={autoRotate}
        autoRotateSpeed={4}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}

export default ThreeComponents;