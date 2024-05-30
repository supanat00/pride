import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/ring/ring.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Ring_L.geometry} material={materials.blinn1} scale={[4.2, 4.2, 4.2]} position={[0, -2, 0]} />
    </group>
  )
}

useGLTF.preload('/models/ring/ring.gltf')
