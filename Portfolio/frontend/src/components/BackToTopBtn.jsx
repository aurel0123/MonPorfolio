import React, {useState, useEffect} from 'react';

import { Link, animateScroll as scroll} from 'react-scroll'

import { ChevronUpIcon } from '@heroicons/react/24/outline';


const BackToTopBtn = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 600 ? setShow(true) : 
            setShow(false);
        })
    })

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
  return (
    show && (
   <button onClick={()=> scrollToTop()} className='bg-[#077b32] w-12
     h-12 hover:bg-[#065d24] text-white rounded-full
     fixed right-24 bottom-24 cursor-pointer flex
     justify-center items-center transition-all'> 
        <ChevronUpIcon className='w-6 h-6'/>
   </button>
    )
  )
}

export default BackToTopBtn