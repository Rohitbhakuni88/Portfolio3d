// components/canvas/GalaxyCanvas.jsx
import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

const generateGalaxy = (count = 5000, arms = 4, radius = 1.2) => {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const arm = i % arms;
    const angle = arm * ((2 * Math.PI) / arms) + Math.random() * 0.5;
    const dist = Math.random() * radius;
    const spread = 0.2 * (1 - dist / radius);

    const x = dist * Math.cos(angle + dist * 2.5) + (Math.random() - 0.5) * spread;
    const y = (Math.random() - 0.5) * spread * 0.5;
    const z = dist * Math.sin(angle + dist * 2.5) + (Math.random() - 0.5) * spread;

    positions[i3 + 0] = x;
    positions[i3 + 1] = y;
    positions[i3 + 2] = z;

    colors[i3 + 0] = THREE.MathUtils.lerp(0.6, 1.0, Math.random()); // R
    colors[i3 + 1] = THREE.MathUtils.lerp(0.3, 0.7, Math.random()); // G
    colors[i3 + 2] = THREE.MathUtils.lerp(0.8, 1.0, Math.random()); // B
  }

  return { positions, colors };
};

const Galaxy = () => {
  const ref = useRef();
  const [data] = useState(() => generateGalaxy());

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={data.positions} colors={data.colors} stride={3} frustumCulled>
        <PointMaterial
          vertexColors
          transparent
          size={0.01}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const GalaxyCanvas = () => {
  return (
    <div className='w-full h-screen absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 75 }}>
        <Suspense fallback={null}>
          <Galaxy />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default GalaxyCanvas;
