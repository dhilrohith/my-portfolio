import { ButtonPrimary, ButtonOutline } from "./Button"

const Hero = () => {
  return (
    <section
        id="home" 
        className="pt-36 "
    >
        
        <div 
        className="container items-center lg:grid 
        lg:grid-cols-2 lg:gap-3"
        >

            <div className="">
                <div 
                className="flex items-center gap-3"
                >
                    <figure 
                    className="img-box w-9 h-9
                    rounded-lg"
                    >
                        <img 
                        src="/images/avatar-1.jpg" 
                        width={40}
                        height={40}
                        alt="Dhil Rohith Avatar" 
                        className="img-cover"
                        />
                    </figure>

                    <div 
                    className="flex items-center
                    gap-1.5 text-zinc-400 text-sm
                    tracking-wide"
                    >
                        <span 
                        className="relative w-2 h-2 
                        rounded-full bg-emerald-400
                        "
                        >
                            <span 
                            className="absolute inset-0
                            rounded-full bg-emerald-400
                            animate-ping"
                            ></span>
                        </span>

                        Available for work
                    </div>
                </div>

                <h2 className="headline-1
                max-w-[15ch] sm:max-w-[20ch]
                lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                Hi! I am Dhil Rohith Enthusiastic Web Developer
                </h2>

                <div 
                className="flex items-center gap-3">
                    <ButtonPrimary
                    label="Download CV"
                    icon="download"
                    href="/files/Dhil-Rohith-Resume.pdf"
                    download={true}
                    />

                    <ButtonOutline
                    href="https://github.com/dhilrohith"
                    label="Github"
                    icon="arrow_outward"
                    target="blank"
                    />
                </div>
            </div>

            <div className="lg:block">
  <figure 
    className="w-full max-h-[600px] ml-auto
    bg-gradient-to-t from-sky-800 via-sky-400/40 to-transparent 
    rounded-[60px] overflow-hidden shadow-lg max-[1023px]:hidden"
  >
    <img 
      src="/images/profile.jpg"
      width={656}
      height={800}
      alt="Dhil Rohith" 
      className=" w-full"
    />
  </figure> 
</div>


        </div>

    </section>
  )
}

export default Hero