"use client"


import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";
//import Model from "components/Porsche";
import Configurator from "components/Configurator";
import {
  PresentationControls,
  OrbitControls,
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
  const [modelLoading, setModelLoading] = useState(true);
  console.log(modelLoading)
  let heightNumber = 0;
  if(params.name == "BmwM8"){
    heightNumber = -0.45
  }
  if(params.name == "Benz1"){
    heightNumber = -1.45
  }
  if(params.name == "Dodge"){
    heightNumber = -0.65
  }
  if(params.name == "Nissan"){
    heightNumber = -0.50
  }
  if(params.name == "Porsche"){
    heightNumber = 0.1
  }
  if(params.name == "Mustang"){
    heightNumber =  -0.5
  }
  if(params.name == "Mclaren720"){
    heightNumber =  -0.60
  }
  if(params.name == "BmwE34"){
    heightNumber =  -0.50
  }
  if(params.name == "Camaro"){
    heightNumber =  0.10
  }
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
      <Suspense fallback={<div className="text-white text-5xl">Loading...</div>}>
        <Canvas >
          <color attach="background" args={["#101010"]} />
          <fog attach="fog" args={["#101010", 10, 30]} />

          
            <OrbitControls  maxPolarAngle={Math.PI / 2}/>
            <Stage environment={"city"} intensity={0.6} contactShadow={false}>
              <Suspense fallback={null}>
               
                <Model
                  position={[0, heightNumber, 0]}
                  customColors={{
                    body: bodyColor,
                    accesoriesColor: accessoriesColor,
                    rimsColor: rimsColor,
                  }}
                  material= {material}
                  onCreated={(testt) => console.log("hi")} // Set modelLoading to false on model creation
                  
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