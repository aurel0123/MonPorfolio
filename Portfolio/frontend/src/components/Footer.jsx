import React from 'react';

import { social } from '../data';

import Logo from '../assets/img/logo.png'

const Footer = () => {
  return (
    <footer className='bg-tertiary py-6'>
        <div className="container mx-auto">
            <div className='flex flex-col lg:flex-row
            space-y-4 lg:space-y-0 items-center
            justify-between'>
                {/* social icons */}
                <div className="flex space-x-4 items-center
                justify-center">
                    {social.map((item, index) => {
                        const { href, icon } = item;
                        return (
                            <a className='text-[#077b32] text-base' 
                            href="" key={index}>
                                {icon}
                            </a>
                        )
                        
                    })}
                </div>

                {/* logo */}
                <div>
                    <img className="w-32 h-32" src={Logo} alt="" />
                </div>

                {/* copyright */}
                <p>&copy; 2025 Aurel Kodjobge. All rights
                    reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer