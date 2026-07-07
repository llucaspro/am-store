import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sparkles, Stars, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

export function GeometricGarment() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <PresentationControls
      global
      rotation={[0.13, 0.1, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]}
      config={{ mass: 2, tension: 400 }}
      snap={{ mass: 4, tension: 400 }}
    >
      <Float
        speed={2} 
        rotationIntensity={0.5} 
        floatIntensity={1}
        floatingRange={[-0.1, 0.1]}
      >
        <group dispose={null} scale={1.5}>
          {/* Abstract geometric representation of a luxury garment/watch */}
          <mesh ref={meshRef}>
            <torusKnotGeometry args={[1, 0.3, 128, 32, 2, 3]} />
            <meshStandardMaterial 
              color="#000000" 
              metalness={0.9}
              roughness={0.1}
              envMapIntensity={2}
            />
          </mesh>
          
          {/* Inner golden core */}
          <mesh scale={0.8}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial 
              color="#D4AF37" 
              metalness={0.8}
              roughness={0.2}
              emissive="#D4AF37"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      </Float>

      {/* Golden particle effects */}
      <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.5} color="#D4AF37" />
      <Stars radius={10} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
    </PresentationControls>
  );
}

export function ThreeScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
      <spotLight 
        position={[0, 5, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={5} 
        color="#D4AF37" 
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#111111" />
      <GeometricGarment />
    </>
  );
}
