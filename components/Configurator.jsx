// Configurator.jsx
"use client"

import React, {  useState } from "react";

export default function Configurator({ onBodyColorChange, onAccessoriesColorChange, onRimsColorChange }) {
    const [bodyColor, setBodyColor] = useState("#ffffff");
    const [accessoriesColor, setAccessoriesColor] = useState("#ffffff");
    const [rimsColor, setRimsColor] = useState("#ffffff");
  return (
    <div className="fixed right-7 w-80 bottom-24 text-white p-4">
      <h2>Color Chooser</h2>
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
      <label htmlFor="bodyColor"> Body</label>

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
      <label htmlFor="bodyColor"> Accessories</label>

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
      <label htmlFor="rimsColor"> Rims</label>
    </div>
  );
}
