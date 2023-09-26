"use client"

import { Model } from './components/Model'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Projects from './components/Projects';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Canvas className='bg-red-400' camera={{ position: [0, 2, 15], fov: 75 }} style={{ width: '100%', height: 400 }} >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} castShadow />
        <Model />
      </Canvas>
      <div className='flex justify-center p-7 xl:p-16 max-w-4xl'>
        <div>
          <Hero/>
          <Projects/>
          <ContactForm/>
        </div>

      </div>
      <Footer/>

    </main>
  )
}
