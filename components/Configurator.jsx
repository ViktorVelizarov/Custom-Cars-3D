// Configurator.jsx
"use client"

import React, {  useState } from "react";
import { useCustomization } from "./Customization";

export default function Configurator({ onBodyColorChange, onAccessoriesColorChange, onRimsColorChange,  onMaterialChange }) {
    const [bodyColor, setBodyColor] = useState("#ffffff");
    const [accessoriesColor, setAccessoriesColor] = useState("#ffffff");
    const [rimsColor, setRimsColor] = useState("#ffffff");
    const {material, setMaterial} = useCustomization();
  return (
    <div className="fixed right-7 w-80 bottom-24 text-white p-4">
      
      <h2 className="font-sans font-bold text-lg">Color Chooser</h2>
      <div className="flex flex-col">
        <div className="flex flex-row mt-3">
        
        <input
          type="color"
          id="bodyColor"
          name="bodyColor"
          value={bodyColor}
          onChange={(e) => {
            setBodyColor(e.target.value)
            onBodyColorChange(e.target.value);
          }}
        />
        <label className="ml-4" htmlFor="bodyColor"> Body</label>
        </div>
        <div className="flex flex-row mt-3">
        
        <input
          type="color"
          id="accesoriesColor"
          name="accesoriesColor"
          value={accessoriesColor}
          onChange={(e) => {
            setAccessoriesColor(e.target.value)
            onAccessoriesColorChange(e.target.value);
          }}
        />
        <label className="ml-4" htmlFor="bodyColor"> Accessories</label>
        </div>
        <div className="flex flex-row mt-3">
        
        <input
          type="color"
          id="rimsColor"
          name="rimsColor"
          value={rimsColor}
          onChange={(e) => {
            setRimsColor(e.target.value)
            onRimsColorChange(e.target.value);
          }}
        />
        <label className="ml-4" htmlFor="rimsColor"> Rims</label>
      </div>

      </div>
      <h2 className="font-sans font-bold text-lg mt-4">Car Wrap</h2>
      <div className="mt-3 flex flex-row">
        <img onClick={()=> onMaterialChange("../galaxyMaterial.png")} className="w-8 h-8  rounded-full  border-solid border-gray-700 mr-3" src="../galaxyMaterial.png"></img>
        <img onClick={()=> onMaterialChange("../material1.png")} className="w-8 h-8  rounded-full  border-solid border-gray-700 mr-3" src="../material1.png"></img>
        <img onClick={()=> onMaterialChange("../material2.jpg")} className="w-8 h-8  rounded-full  border-solid border-gray-700 mr-3" src="../material2.jpg"></img>
        <img onClick={()=> onMaterialChange("../material3.jpg")} className="w-8 h-8  rounded-full  border-solid border-gray-700 mr-3" src="../material3.jpg"></img>
        <img onClick={()=> onMaterialChange("../material4.jpg")} className="w-8 h-8  rounded-full  border-solid border-gray-700 mr-3" src="../material4.jpg"></img>
      </div>
      <div className="mt-3 flex flex-row">
        <img onClick={()=> onMaterialChange("../material5.jpg")} className="w-8 h-8  rounded-full  border-solid border-gray-700 mr-3" src="../material5.jpg"></img>
        <img onClick={()=> onMaterialChange("../material6.jpg")} className="w-8 h-8  rounded-full  border-solid border-gray-700 mr-3" src="../material6.jpg"></img>
        <img onClick={()=> onMaterialChange("../material7.webp")} className="w-8 h-8  rounded-full  border-solid border-gray-700 mr-3" src="../material7.webp"></img>
        <img onClick={()=> onMaterialChange("../material8.webp")} className="w-8 h-8  rounded-full  border-solid border-gray-700 mr-3" src="../material8.webp"></img>
        <img onClick={()=> onMaterialChange("../material9.jpg")} className="w-8 h-8  rounded-full  border-solid border-gray-700 mr-3" src="../material9.jpg"></img>
      </div>
      
    </div>
  );
}
