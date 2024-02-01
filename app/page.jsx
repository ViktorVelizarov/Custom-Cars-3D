"use client"

import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber';
import Model from 'components/Mustang';
import Boxx from 'components/Boxx';

export default function App() {

  const [bodyColor,setBodyColor] = useState("#ffffff")
  const [accesoriesColor,setAccesoriesColor] = useState("#ffffff")
  const [rimsColor,setRimsColor] = useState("#ffffff")
  
  const galaxyTexture = useLoader(TextureLoader, "/galaxyMaterial.png");
  return (
    <div className="h-screen">
    <Suspense fallback={null}>
      <Canvas >
        <color attach='background' args={["#213547"]}/>
        <fog attach='fog' args={["#213547",10,30]}/>
        <Boxx/>
      </Canvas>
    </Suspense>
    </div>
  );
}
