import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 110,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Işıklandırma */}
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[10, 10, 5]} />
        <pointLight intensity={0.8} position={[5, 0, 10]} />

        <OrbitControls
          enableRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
