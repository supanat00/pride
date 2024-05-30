import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import RingModel from "../Models/Ring";
import { Environment, OrbitControls } from "@react-three/drei";

export default function SceneTwo() {
    return (
        <div id="scene" className="absolute w-full -translate-x-1/4 tablet:-translate-x-0 desktop:-translate-x-0">
            {/* Sing */}
            <Canvas id="scenetwo">
                <Environment preset="city" environment="Neutral" />
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    enableRotate={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />

                <Suspense fallback={null}>
                    <RingModel scale={[1, 1, 1]} />
                </Suspense>
            </Canvas>
        </div >


    );
}