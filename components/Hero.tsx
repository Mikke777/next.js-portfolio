import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";


const Hero = () => {
  return (
    <div>
      <BackgroundBeamsWithCollision>
        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center dark:text-blue-100 max-w-80'>Dynamic Web Magic with Next.js</h2>
            <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Build your next project with Next.js' />
            <p className='text-center md:tracking-wider mb-4 text-sm md:text-large lg:text-2xl'>
              Hi, I&apos;m Michele a Next.js developer.
            </p>
            <a href="#about">
              <MagicButton title="Show my work" icon={<FaLocationArrow />} position='right' />
            </a>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  )
}

export default Hero
