import React from 'react';
import { motion } from 'framer-motion';
import AboutImg from '../assets/AboutImg.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-40 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="mx-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          ABOUT ME
        </h2>

        <div className="flex items-center justify-center mt-4 space-x-3">
          <div className="h-[2px] w-16 bg-gray-400" />
          <div className="w-4 h-4 bg-blue-400 rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-4 h-4 bg-pink-400 rounded-full" />
          <div className="h-[2px] w-16 bg-gray-400" />
        </div>
      </div>

      {/* Profile & Text */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-20 px-4">
        {/* Neon Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-52 h-52 md:w-64 md:h-64 rounded-full shadow-xl"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-pulse blur-lg opacity-60"></div>
          <img
            src={AboutImg}
            alt="Gowtham"
            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-gray-800"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-xl space-y-4"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Hello! I'm <span className="text-blue-400 font-semibold">Gowtham</span>, a
            Computer Science student and aspiring software developer with a strong interest in
            Web Development. I specialize in creating responsive and interactive user interfaces using 
            <span className="text-purple-400"> React</span>, <span className="text-amber-400">JavaScript</span>, and
            <span className="text-teal-400"> Tailwind CSS</span>. Through internships and personal projects, I've built a variety of 
            real-world applications that blend functionality with design. I'm driven by curiosity, committed to learning, and always
            ready to take on new challenges in tech.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
