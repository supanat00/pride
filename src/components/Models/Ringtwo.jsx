import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/ring/ringtwo.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Ringallgroup2ring_Aringfix3sweep25Ring_neclaceRing_grp.geometry} material={materials.phongE1} scale={[5, 5, 5]} position={[0, -1, 0]} />
    </group>
  )
}

useGLTF.preload('/models/ring/ringtwo.gltf')
