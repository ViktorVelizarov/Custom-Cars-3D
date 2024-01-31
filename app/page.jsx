"use client"

import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber';
import Porsche from 'components/Porsche';
import Model from 'components/Nissan';

export default function App() {

  const [bodyColor,setBodyColor] = useState("#ffffff")
  const [stripes,setStripes] = useState("#ffffff")
  const [soul,setSoul] = useState("#ffffff")
  
  const galaxyTexture = useLoader(TextureLoader, "/galaxyMaterial.png");
  return (
    <>
    <div className='bg-blue-400 text-sm h-96 w-7/12'>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} castShadow/>
        <Suspense fallback={null}>

          <Model customColors={{body: bodyColor, spoiler: "white"}}/>
        </Suspense>
      </Canvas>
    </div>

    <h2> Color Chooser</h2>
    <input type="color" id="bodyColor" name="bodyColor"  value={bodyColor} 
      onChange={(e) => setBodyColor(e.target.value)}>
    </input>
    <label for="bodyColor"> Body</label>
    </>
  );
}
