import {Suspense, useRef} from 'react'
import './App.css';
import {Canvas, useLoader, useFrame} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {DoubleSide, TextureLoader} from 'three'


const Luces = ()=>{
  return(
    <group>
      <ambientLight intensity={0.5}/>
      <directionalLight castShadow position={[-4,3,3]}/>
    </group>
  )
}

const Cubo = ({position, color})=>{
  const ref = useRef()
  useFrame(({clock})=>{
    ref.current.rotation.y +=0.1
    ref.current.rotation.y  = Math.sin(clock.elapsedTime)
  })
  const texture = useLoader(TextureLoader, process.env.PUBLIC_URL +'/box.jpg')
  return(
    <mesh ref={ref} castShadow position={position}>
      <boxGeometry attach="geometry" args={[1,1,1]}/>
      <meshPhysicalMaterial attach="material" color={color} map={texture}/>
    </mesh>
  )
}

const Floor = ()=>{
  return(
    <mesh receiveShadow rotation={[-Math.PI/2, 0, 0]} position={[0,-0.5,0]}>
      <planeBufferGeometry attach="geometry" args={[10,10]}/>
      <meshPhysicalMaterial attach="material" color="green" side={DoubleSide}/>
    </mesh>
  )
}



function App() {
  return (
    <div className="App">
      <Canvas shadows>
        <axesHelper/>
        <Luces/>
        <OrbitControls/>
        <Suspense fallback={null}>
          <Floor/>
          <Cubo position={[-2.5, 1.5,0]} color="yellow"/>
          <Cubo position={[0, 1,0]} color="#81cefb"/>
          <Cubo position={[2.5, 0.5,0]} color="red"/>
        </Suspense>

      </Canvas>
    </div>
  );
}

export default App;
