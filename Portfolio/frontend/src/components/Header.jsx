import React, { useState, useEffect } from 'react';
import Logo from '../assets/img/Logo.png';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
import Socials from '../components/Socials';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <a href="#">
          <img src={Logo} alt="Logo" className="w-32 h-32" />
        </a>
        {/* nav */}
        <div className="hidden lg:flex flex-1 justify-center">  {/*signifie que le Nav sera caché sur les petits écrans et visible uniquement sur les écrans larges */}
          <Nav />
        </div>
        {/* Socials */}
        <div className="hidden lg:flex">
          <Socials />
        </div>
        {/* nav mobile */}
        <div className="lg:hidden">  {/*signifie que l'element sera caché sur les écrans larges et visible uniquement sur les petit écrans */}
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;