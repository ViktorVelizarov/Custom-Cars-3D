import { PresentationControls ,Stage, MeshReflectorMaterial} from "@react-three/drei"
import { Suspense } from "react";
import Model from 'components/Nissan';
export default function Boxx(){
    return (
        <>
        <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={"city"} intensity={0.6} contactShadow={false}>
        <Suspense fallback={null}>
            <Model position={[0, -0.6, 0]}  customColors={{body: "red", accesoriesColor: "black", rimsColor: "black"}}/>
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
        </PresentationControls>
        </>
    );
}
