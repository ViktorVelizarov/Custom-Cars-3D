// page.tsx
"use client"
import CarCard from "components/CarCard";
import Model from "components/Mustang";
import AllCars from "components/AllCars";

import {
    Stage,
    PresentationControls,
    MeshReflectorMaterial,
    OrbitControls
  } from "@react-three/drei";
import React, { Suspense} from "react";
import { Canvas,  useThree } from "@react-three/fiber";
export default function App() {
  // Custom function to set the camera position
  const setCameraPosition = ({ camera }) => {
    // Set your desired camera position
    camera.position.set(5, 2.5, 4);
    camera.lookAt(0, 0, 0);
  };
    return(
    <div className="h-screen" style={{ marginLeft: "200px" }}>

      <Suspense fallback={null}>
        <Canvas onCreated={setCameraPosition}>
       
          <color attach="background" args={["#101010"]} />
          <fog attach="fog" args={["#101010", 10, 30]} />
          
          <OrbitControls  maxPolarAngle={Math.PI / 2}/>
            <Stage environment={"city"} intensity={0.6} contactShadow={false}>
              <Suspense fallback={null}>
                <Model
                  position={[1, -0.48, 0]}
                  customColors={{
                    body: "red",
                    accesoriesColor: "red",
                    rimsColor: "red",
                  }}
                  material= {"null"}
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
                
       
        <div className="fixed left-56 w-96 bottom-64">
        <h1 className="text-white text-7xl font-bold font-mono "> CustomCars3D</h1>
            <p className="text-white  font-semibold font-mono mt-10"> Chose from our rich collection of car 3D  </p>
            <p className="text-white  font-semibold font-mono "> models and customize them however you want.</p>
            </div>
     </Suspense>
    </div>
    )
}