/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 porsche.gltf 
Author: BadKarma™ (https://sketchfab.com/890244234)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/1983-porsche-911-carrera-017eaf54707e4cf8a93651863c6a5403
Title: 1983 Porsche 911 Carrera
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
//import galaxyMaterial from '/galaxyMaterial.png'
import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'

 function Model(props) {
  //const colorMap = useLoader(TextureLoader, galaxyMaterial)
  const { nodes, materials } = useGLTF('/porsche.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Chrome2} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Material__381} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Material__3810} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Material__3811} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Material__3812} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Material__3813} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Material__3814} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Material__3815} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Material__382} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Material__3820} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Material__3821} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Material__383} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Material__384} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Material__385} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Material__386} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Material__387} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Material__388} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Material__390} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Material__391} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Material__392} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.Material__394} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.Material__395} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.Material__396} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.Material__397} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.Material__464} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.Material__487} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.Material__488} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.Material__489} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.Material__490} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.Material__491} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Material__492} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.Material__493} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.Material__494} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.Material__495} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.Material__496} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.Material__497} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.Material__498} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.Material__501} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.Material__503} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.Material__504} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.Material__533} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.Material__534} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.Material__535} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.Material__536} />
        <mesh geometry={nodes.Object_46.geometry} material={materials.Material__537} />
        <mesh geometry={nodes.Object_47.geometry} material={materials.Material__538} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.Material__5380} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.Material__539} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.Material__548} />
        <mesh geometry={nodes.Object_51.geometry} material={materials.Material__549} />
        <mesh geometry={nodes.Object_52.geometry} material={materials.Material__551} />
        <mesh geometry={nodes.Object_53.geometry} material={materials.Material__553} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.Material__555} />
        <mesh geometry={nodes.Object_55.geometry} material={materials.Material__556} />
        <mesh geometry={nodes.Object_56.geometry} material={materials.Material__563} />
        <mesh geometry={nodes.Object_57.geometry} material={materials.Material__564} />
        <mesh geometry={nodes.Object_58.geometry} material={materials.Material__565} />
        <mesh geometry={nodes.Object_59.geometry} material={materials.Material__567} />
        <mesh geometry={nodes.Object_60.geometry} material={materials.Material__569} />
        <mesh geometry={nodes.Object_61.geometry} material={materials.Material__579} />
        <mesh geometry={nodes.Object_62.geometry} material={materials.Material__582} />
        <mesh geometry={nodes.Object_63.geometry} material={materials.Material__583} />
        <mesh geometry={nodes.Object_64.geometry} material={materials.Material__587} />
        <mesh geometry={nodes.Object_65.geometry} material={materials.Material__588} />
        <mesh geometry={nodes.Object_66.geometry} material={materials.Material__589} />
        <mesh geometry={nodes.Object_67.geometry} material={materials.Material__591} />
        <mesh geometry={nodes.Object_68.geometry} material={materials.Material__592} />
        <mesh geometry={nodes.Object_69.geometry} material={materials.Material__592} />
        <mesh geometry={nodes.Object_70.geometry} material={materials.Material__593} />
        <mesh geometry={nodes.Object_71.geometry} material={materials.Material__596} />
        <mesh geometry={nodes.Object_72.geometry} material={materials.brake_drum} />
        <mesh geometry={nodes.Object_73.geometry} material={materials.chrome} />
        <mesh geometry={nodes.Object_74.geometry} material={materials.chrome0} />
        <mesh geometry={nodes.Object_75.geometry} material={materials.chrome1} />
        <mesh geometry={nodes.Object_76.geometry} material={materials.chrome3} />
        <mesh geometry={nodes.Object_77.geometry} material={materials.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/porsche.gltf')

export default Model;