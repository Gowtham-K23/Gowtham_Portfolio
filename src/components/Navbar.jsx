import React from 'react';
import { motion } from 'framer-motion';
import LogoImg from '../assets/logo.png';

const navLinks = ['HOME', 'SKILLS', 'PROJECTS', 'CONTACT'];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-gradient-to-tl from-blue-900 via-black to-blue-900 bg-opacity-50 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-between px-6 py-4 relative">
        
        {/* Logo */}
        <div className="flex-1 md:flex-none md:order-1 text-center md:text-left">
          <a href="#home" className="block mx-auto md:mx-0 w-fit">
            <motion.img
              src={LogoImg}
              alt="GOWTHAM"
              className="w-24 h-24 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain mx-auto md:mx-0"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 lg:gap-14 md:order-2">
          {navLinks.map((link) => (
            <motion.li
              key={link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a
                href={`#${link.toLowerCase()}`}
                className="text-base md:text-xl lg:text-2xl text-blue-200 tracking-wide font-medium hover:text-white transition-all duration-300"
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>

      </div>
    </motion.nav>
  );
};

export default Navbar;
