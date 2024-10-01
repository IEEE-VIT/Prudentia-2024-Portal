import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./plant_capsule/source/PlantCapsule_Substance.gltf");

  return (
    <mesh>
      <ambientLight intensity={0.3} />
      <hemisphereLight intensity={1.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={0.1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={10} />
      <primitive object={earth.scene} scale={4.5} position-y={-1} rotation-y={0} rotation-x={0.3}/>
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 35,
        near: 0.1,
        far: 200,
        position: [-4, 3, 5],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
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
