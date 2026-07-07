import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles, Stars, PresentationControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export function GeometricGarment() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const orbitingSpheresRef = useRef<THREE.Group>(null);
  
  const { mouse } = useThree();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Core rotation
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.z = Math.sin(time * 0.5) * 0.05;
    }

    // Outer ring rotation (different axis)
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = time * 0.15;
      outerRingRef.current.rotation.z = time * 0.1;
    }

    // Orbiting spheres
    if (orbitingSpheresRef.current) {
      orbitingSpheresRef.current.rotation.y = time * 0.3;
    }

    // Mouse reactive tilt
    if (groupRef.current) {
      const targetX = (mouse.x * Math.PI) / 10;
      const targetY = (mouse.y * Math.PI) / 10;
      groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.1;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.1;
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
      <group ref={groupRef}>
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
                color="#050505" 
                metalness={0.9}
                roughness={0.1}
                envMapIntensity={1}
              />
            </mesh>

            {/* Outer Ring */}
            <mesh ref={outerRingRef}>
              <torusGeometry args={[1.8, 0.02, 16, 100]} />
              <meshStandardMaterial 
                color="#D4AF37" 
                metalness={1}
                roughness={0.2}
                emissive="#D4AF37"
                emissiveIntensity={0.5}
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
                emissiveIntensity={1}
                envMapIntensity={2}
              />
            </mesh>

            {/* Orbiting small spheres */}
            <group ref={orbitingSpheresRef}>
              {[...Array(5)].map((_, i) => (
                <mesh key={i} position={[Math.cos(i * Math.PI * 0.4) * 2, Math.sin(i * Math.PI * 0.8) * 1, Math.sin(i * Math.PI * 0.4) * 2]}>
                  <sphereGeometry args={[0.05, 16, 16]} />
                  <meshStandardMaterial 
                    color="#D4AF37" 
                    metalness={1}
                    roughness={0}
                    emissive="#D4AF37"
                    emissiveIntensity={0.8}
                  />
                </mesh>
              ))}
            </group>
          </group>
        </Float>
      </group>

      {/* Pulsing golden particles */}
      <AnimatedSparkles />
      <Stars radius={10} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
    </PresentationControls>
  );
}

// Custom wrapper to animate Sparkles opacity
function AnimatedSparkles() {
  const ref = useRef<any>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const opacity = 0.3 + (Math.sin(state.clock.elapsedTime * 2) * 0.5 + 0.5) * 0.5; // pulses between ~0.3 and 0.8
      if (ref.current.material) {
         ref.current.material.opacity = opacity;
         ref.current.material.transparent = true;
      }
    }
  });

  return <Sparkles ref={ref} count={100} scale={10} size={3} speed={0.5} color="#D4AF37" opacity={0.8} />;
}

export function ThreeScene() {
  return (
    <>
      <color attach="background" args={['#000000']} />
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
      
      <Environment preset="studio" environmentIntensity={0.5} />
      
      <GeometricGarment />
      
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={1.5} />
      </EffectComposer>
    </>
  );
}
