import React from 'react'

import { navigation } from '../data';
import { Link } from 'react-scroll'; {/*Cette bibliothèque permet de scroller automatiquement vers une section de la page en cliquant sur un lien, au lieu de recharger la page.*/}

const Nav = () => {
  return (
    <nav>
        <ul className='flex space-x-8 capitalize text-[15px]'>
            {navigation.map((item, index) => {
                return(
                    <li className='text-white
                    hover:text-[#077b32] cursor-pointer'
                    key={index}>
                        <Link
                         to={item.href}
                         activeClass='active'
                         spy={true} 
                         smooth={true} 
                         duration={500} 
                         offset={-70} 
                         className='transition-all duration-300'>
                            {item.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Nav