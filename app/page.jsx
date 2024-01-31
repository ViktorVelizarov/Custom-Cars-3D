"use client"

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber';
import Porsche from 'components/Porsche';

export default function App() {

  const galaxyTexture = useLoader(TextureLoader, "/galaxyMaterial.png");
  return (
    <div className='bg-blue-400 text-sm h-96'>
      <h1>Hi</h1>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
        <mesh rotation={[90, 0, 20]}>
            <boxGeometry attach="geometry" args={[3, 3, 3]} />
            <meshStandardMaterial
              attach="material"
              map={galaxyTexture}
      
            />
          </mesh>
          <Porsche />
        </Suspense>
      </Canvas>
    </div>
  );
}
