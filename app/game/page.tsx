"use client"

import { Canvas} from "@react-three/fiber";
import { Scene} from "components/Scene";
export default function Game() {
    return(
        <div className="h-screen">
            <Canvas> 
               <Scene/>
            </Canvas>
        </div>
    )
}