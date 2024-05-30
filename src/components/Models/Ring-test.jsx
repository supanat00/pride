import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations: typingAnimation, } = useGLTF('/models/ring/ring-test.gltf')

  typingAnimation[0].name = "Animation";

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="c47b6189042946bca53dc5981799923cfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.008}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="tHE_oNE_rING" position={[0, 0.8, 0]} rotation={[-0.35, 2.5, -1.518]} scale={[100, 100, 110.528]}>
                  <mesh name="tHE_oNE_rING_Material001_0" geometry={nodes.tHE_oNE_rING_Material001_0.geometry} material={materials['Material.001']} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/ring/ring-test.gltf')
