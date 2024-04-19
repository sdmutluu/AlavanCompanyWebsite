import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, PresentationControls } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <>
      <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, 0.2]}>
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.7 : 0.75}
          position={isMobile ? [5, 16, 4] : [5, -10.25, -1.5]}
          rotation={[0.1, 1, -0.07]}
        />
      </PresentationControls>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
      </mesh>
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Mobil görünüm için farklı bir kamera pozisyonu belirleyin
  const mobileCameraPosition = { position: [220, 160, 60], fov: 35 };

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={isMobile ? mobileCameraPosition : { position: [200, 160, 50], fov: 23 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} autoRotate />
        <Computers isMobile={isMobile} />
        <mesh>
          <hemisphereLight intensity={0.5} groundColor="black" /> {/* Işık parlaklık değeri */}
          <pointLight intensity={1} />
        </mesh>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
