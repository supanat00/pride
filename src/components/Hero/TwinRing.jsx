import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import RingModel from "../Models/Ring";
import { Environment, OrbitControls } from "@react-three/drei";



export default function TwinRing() {
    return (

        <div className="w-full flex-col">
            {/* Sing */}
            <div className="w-full">
                <Canvas
                    className="w-full h-full"
                    style={{
                        position: 'relative',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        overflow: 'hidden',
                        height: '40vh'
                    }}>
                    <Environment preset="city" />
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        enableRotate={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2} />
                    <Suspense fallback={null}>
                        <RingModel scale={[1.2, 1.2, 1.2]} position={[0, 0.4, 0]} />
                    </Suspense>
                </Canvas>
            </div>

        </div>


    );
}