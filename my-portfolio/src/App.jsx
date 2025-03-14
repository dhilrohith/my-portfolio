import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// gsap plugins

gsap.registerPlugin(useGSAP, ScrollTrigger); // register the hook to avoid React 

import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Skill from './components/Skill'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certifications from './components/Certification';

const App = () => {

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  useGSAP(()=>{
    const elements = gsap.utils.toArray('.reveal-up')

    elements.forEach((element)=>{
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })
  })

  return (

    <ReactLenis root>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
        <Certifications/>
        <Contact/>
      </main>
      <Footer/>
    </ReactLenis>
      
  )
}

export default App