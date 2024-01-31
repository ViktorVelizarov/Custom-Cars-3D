"use client"

import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber';
import Model from 'components/Dodge';

export default function App() {

  const [bodyColor,setBodyColor] = useState("#ffffff")
  const [accesoriesColor,setAccesoriesColor] = useState("#ffffff")
  const [rimsColor,setRimsColor] = useState("#ffffff")
  
  const galaxyTexture = useLoader(TextureLoader, "/galaxyMaterial.png");
  return (
    <>
    <div className='bg-blue-400 text-sm h-96 w-7/12'>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} castShadow/>
        <Suspense fallback={null}>

          <Model customColors={{body: bodyColor, accesoriesColor: accesoriesColor, rimsColor: rimsColor}}/>
        </Suspense>
      </Canvas>
    </div>

    <h2> Color Chooser</h2>
    <input type="color" id="bodyColor" name="bodyColor"  value={bodyColor} 
      onChange={(e) => setBodyColor(e.target.value)}>
    </input>
    <label for="bodyColor"> Body</label>

    <input type="color" id="accesoriesColor" name="accesoriesColor"  value={accesoriesColor} 
      onChange={(e) => setAccesoriesColor(e.target.value)}>
    </input>
    <label for="bodyColor"> Accesories</label>

    <input type="color" id="rimsColor" name="rimsColor"  value={rimsColor} 
      onChange={(e) => setRimsColor(e.target.value)}>
    </input>
    <label for="rimsColor"> Rims</label>
    </>
  );
}
