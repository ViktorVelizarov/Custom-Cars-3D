import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber';

function Model(props) {
  const galaxyTexture = useLoader(TextureLoader, "/galaxyMaterial.png");
  const { nodes, materials } = useGLTF('/porsche.gltf');

  return (
    <>


      <group {...props} dispose={null} scale={3}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          {/* Iterate over each mesh in the car and apply the basic material */}
          {Object.values(nodes).map((node, index) => (
            <mesh
              key={index}
              geometry={node.geometry}
              material={materials.chrome2} 
              material-color={"red"}
            />
          ))}
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/porsche.gltf')

export default Model;
