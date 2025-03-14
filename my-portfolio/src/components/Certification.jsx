import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// gsap plugins

gsap.registerPlugin(useGSAP, ScrollTrigger); 

import CertificateCard from "./CertificateCard";


const certificates = [
    {
      name: 'Guvi Certification - HTML, CSS, TailwindCSS',
      imgSrc: '/images/GuviCertification-HTML,CSS,TailwindCSS.png',
    },
    {
      name: 'Guvi Certification - React.Js',
      imgSrc: '/images/GuviCertification-Reactjs.png',
    },
    {
      name: 'Guvi Certification - JS Basics',
      imgSrc: '/images/GuviCertification-JSbasics.png',
    },
    {
      name: 'Guvi Certification - Advanced JS',
      imgSrc: '/images/GuviCertification-AdvancedJs.png',
    },
    {
      name: 'Guvi Certification - Node JS',
      imgSrc: '/images/GuviCertification-NodeJs.png',
    },
    {
      name: 'Guvi Certification - Database',
      imgSrc: '/images/GuviCertification-Database.png',
    },
    {
      name: 'Guvi Certification - MERN',
      imgSrc: '/images/GuviCertification-Mern.png',
    }
];

const Certifications = () => {

  useGSAP(()=>{
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: "-200% 80%",
        end: "400% 80%",
        scrub: 1, // Smooth scrolling effect
      },
      x: "-1000"
    })
  });

  return (
    <section
    id='certificates' 
    className="section overflow-hidden"
    >
        <div className="container">
            <h2 
            className="headline-2 mb-8
            reveal-up"
            >
                My Certifications
            </h2>

            <div 
            className="scrub-slide flex items-stretch gap-3
            w-fit max-h-[300px] md:max-h-[300px] lg:max-h-[370px]"
            >
                {certificates.map(
                    ({name,imgSrc}, key)=>{
                        return (
                        <CertificateCard
                        key={key}
                        name={name}
                        imgSrc={imgSrc}
                        classes={"reveal-up"}/>
                    )
                    }
                )}
            </div>
        </div>
    </section>
  )
}

export default Certifications