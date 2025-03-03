import React from 'react';
import Image from '../assets/img/about.webp'

const About = () => {
  return (
    <section className='section bg-secondary'>
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row
            gap-24">
                <img className='object-cover h-full w-[566px]
                md:mx-auto lg:mx-0 rounded-2xl'
                 src={Image} alt="" />
                 <div className="flex flex-col items-center
                 text-center lg:items-start lg:text-left">
                    <div className='flex flex-col'>
                        <h2 className='text-3xl lg:text-4xl
                         font-medium lg:font-extrabold mb-
                         before:content-about relative
                         before:absolute before:opacity-40
                         before:-top-[2rem] before:hidden 
                         before:lg:block'>
                            Aurel
                         </h2>
                         <p className='mb-4
                         text-[#077b32]'>Developpeur Web Freelance
                        </p>
                        <hr className='mb-8 opacity-5' />
                        <p className='mb-8'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore 
                         magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex 
                          ea commodo consequat. Duis aute irure dolor.
                           <br />Lorem ipsum dolor sit amet, consectetur 
                           adipiscing elit.
                        </p>
                    </div>
                    <button className='btn btn-md bg-[#077b32]
                    hover:bg-[#065d24] transition-all'>
                        Contactez-moi
                    </button>
                 </div>
            </div>

        </div>
    </section>
  )
}

export default About