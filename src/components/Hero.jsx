import React from "react";
import { motion } from 'framer-motion';
import Resume from '../assets/Resume.pdf';
import HeroImg from '../assets/HeroImg.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="py-40 flex flex-col md:flex-row items-center justify-center gap-20 px-6 md:px-12 bg-gradient-to-tr from-black via-gray-900 to-black text-white"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg"
      >
        <img
          src={HeroImg}
          alt="Gowtham K"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left max-w-xl space-y-4"
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-400 uppercase tracking-wide">
          Where Code Meets Creativity
        </h2>
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold">
          GOWTHAM K
        </h1>
        <p className="text-3xl md:text-4xl text-gray-500">
          Software Developer
        </p>

        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-900 text-white text-lg font-semibold rounded-xl transition duration-300 shadow-lg"
        >
          View Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
