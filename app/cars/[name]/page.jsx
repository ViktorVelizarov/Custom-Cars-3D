"use client"


import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";
//import Model from "components/Porsche";
import Configurator from "components/Configurator";
import {
  PresentationControls,
  Stage,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { CustomizationProvider } from "components/Customization";
import dynamic from 'next/dynamic'



function Page({ params }) {
  const Model = dynamic(() => import(`components/${params.name}`),)
  const [bodyColor, setBodyColor] = useState("#ffffff");
  const [accessoriesColor, setAccessoriesColor] = useState("#ffffff");
  const [rimsColor, setRimsColor] = useState("#ffffff");
  const [material, setMaterial] = useState("null");

  const handleBodyColorChange = (color) => {
    setBodyColor(color);
  };

  const handleMaterialChange = (newmaterial) => {
    setMaterial(newmaterial);
  };

  const handleAccessoriesColorChange = (color) => {
    setAccessoriesColor(color);
  };

  const handleRimsColorChange = (color) => {
    setRimsColor(color);
  };

  return (
    <CustomizationProvider>
    <div className="h-screen">
      <Suspense fallback={null}>
        <Canvas>
          <color attach="background" args={["#101010"]} />
          <fog attach="fog" args={["#101010", 10, 30]} />

          <PresentationControls
            speed={1.5}
            global
            zoom={0.6}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment={"city"} intensity={0.6} contactShadow={false}>
              <Suspense fallback={null}>
                <Model
                  position={[0, 0.2, 0]}
                  customColors={{
                    body: bodyColor,
                    accesoriesColor: accessoriesColor,
                    rimsColor: rimsColor,
                  }}
                  material= {material}
                />
              </Suspense>
            </Stage>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-0.5}>
              <planeGeometry args={[170, 170]} />
              <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={40}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#101010"
                metalness={0.5}
              />
            </mesh>
          </PresentationControls>
        </Canvas>
        <Configurator
          onBodyColorChange={handleBodyColorChange}
          onAccessoriesColorChange={handleAccessoriesColorChange}
          onRimsColorChange={handleRimsColorChange}
          onMaterialChange={handleMaterialChange}
        />
      </Suspense>
    </div>
    </CustomizationProvider>
  );
}

export default Page;