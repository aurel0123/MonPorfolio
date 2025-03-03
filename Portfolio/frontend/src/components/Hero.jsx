import React from 'react';

import WomanImg from '../assets/img/banner-woman2.png';

const Hero = () => {
  return (
    <section
    id='home'
    className='lg:h-[85vh] flex
    items-center bg-black lg:bg-cover lg:bg-center
    lg:bg-no-repeat py-32 lg:py-0 overflow-hidden '>
        <div className="container mx-auto h-full text-white">
            <div className='flex items-center h-full pt-8'>

                <div className='flex-1 flex flex-col items-center lg:items-start'>
                    <p className='text-lg text-[#077b32]
                     mb-[22px]'>Salut, je m'appelle Aurel 👋 </p> {/* win + ; */}
                     <h1 className='text-2xl leading-[44px] md:text-3xl md:leading-tight
                     lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px]'> 
                        Je Construis & Concois <br /> des Interfaces Web.
                    </h1>
                    <p className='pt-4 pb-8 md:pt-6 md:pb-12
                    max-w-[480px] text-lg text-center
                    lg:text-left'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua.
                    </p>
                    <button className='btn btn-md bg-[#077b32] 
                    hover:bg-[#065d24] md:btn-lg transition-all'>
                        Travaille avec moi
                    </button>
                </div>

                <div className='hidden lg:flex flex-1 
                justify-end items-end h-full '>
                    <img className='h-[500px]' src={WomanImg} alt="" />
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero