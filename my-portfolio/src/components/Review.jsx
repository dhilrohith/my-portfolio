import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// gsap plugins

gsap.registerPlugin(useGSAP, ScrollTrigger); 

import ReviewCard from './ReviewCard';


const reviews = [
    {
      content: 'Exceptional web developer! Who delivers a seamless, responsive site with clean code and great UX.',
      name: 'Megana',
      imgSrc: '/images/people-5.jpg',
      company: 'PixelForge'
    },
    {
      content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration.',
      name: 'Elayabharathi',
      imgSrc: '/images/people-2.jpg',
      company: 'NexaWave'
    },
    {
      content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
      name: 'Hari Prasath',
      imgSrc: '/images/people-3.jpg',
      company: 'CodeCraft'
    },
    {
      content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations.',
      name: 'Monish',
      imgSrc: '/images/people-4.jpg',
      company: 'BrightWeb'
    },
    {
      content: 'Professional work! with a polished design and smooth user experience. Top-notch developer.',
      name: 'Priyanga',
      imgSrc: '/images/people-1.jpg',
      company: 'TechMosaic'
    },
    {
      content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'Sukant',
      imgSrc: '/images/people-6.jpg',
      company: 'DNS'
    }
];

const Review = () => {

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
    id='reviews' 
    className="section overflow-hidden"
    >
        <div className="container">
            <h2 
            className="headline-2 mb-8
            reveal-up"
            >
                What my friends says!
            </h2>

            <div 
            className="scrub-slide flex items-stretch gap-3
            w-fit"
            >
                {reviews.map(
                    ({content,name,imgSrc,company}, key)=>{
                        return (
                        <ReviewCard
                        key={key}
                        content={content}
                        name={name}
                        imgSrc={imgSrc}
                        company={company}
                        classes={"reveal-up"}/>
                    )
                    }
                )}
            </div>
        </div>
    </section>
  )
}

export default Review