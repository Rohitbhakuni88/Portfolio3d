// src/components/canvas/GalaxyBackground.jsx
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const GalaxyPoints = () => {
  const ref = useRef();
  const positions = random.inSphere(new Float32Array(10000), { radius: 2 });

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color='#ffffff'
          size={0.005}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const GalaxyBackground = () => {
  return (
    <div className='fixed inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <GalaxyPoints />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default GalaxyBackground;
