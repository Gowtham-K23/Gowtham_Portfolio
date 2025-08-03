import React from "react";
import { motion } from 'framer-motion';

import TravelImg from '../assets/projects/project1.png';
import HotelImg from '../assets/projects/project2.png';
import PortfolioImg from '../assets/projects/project3.png';
import CookifyImg from '../assets/projects/project4.png';

const projects = [
    {
        title: 'Travel Agency',
        image: TravelImg,
        github: 'https://github.com/Gowtham-K23/Travel-Agency',
        link: 'https://travel-agency-kappa-orcin.vercel.app/',
        tech: 'HTML, CSS',
    },
    {
        title: 'Hotel Website',
        image: HotelImg,
        github: 'https://github.com/Gowtham-K23/Hotel_Website',
        link: 'https://hotel-website-ochre-omega.vercel.app/',
        tech: 'React Js, Tailwind CSS',
    },
    {
        title: 'Portfolio',
        image: PortfolioImg,
        github: 'https://github.com/Gowtham-K23/Portfolio-Jaya-Kumar',
        link: 'https://portfolio-jaya-kumar.vercel.app/',
        tech: 'React Js, Tailwind CSS',
    },
    {
        title: 'Cookify',
        image: CookifyImg,
        github: 'https://github.com/Gowtham-K23/Cookify-Website',
        link: 'https://cookify-website-theta.vercel.app/',
        tech: 'React Js, Tailwind CSS',
    },
];

const Projects = () => {
    return (
        <section id = "projects" className = "py-32 px-6 bg-gradient-to-tl from-black via-gray-900 to-black text-white">
            <div className = "max-w-6xl mx-auto">
                <div className = "text-center mb-16">
                    <h2 className = "text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 text-transparent bg-clip-text">
                        PROJECTS
                    </h2>
                    <div className="flex items-center justify-center mt-4 space-x-3">
                        <div className="h-[2px] w-16 bg-gray-400" />
                        <div className="w-4 h-4 bg-blue-400 rounded-full" />
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <div className="w-4 h-4 bg-pink-400 rounded-full" />
                        <div className="h-[2px] w-16 bg-gray-400" />
                    </div>
                </div>

                <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key = {index}
                            whileHover = {{ scale: 1.02 }}
                            className = "relative overflow-hidden rounded-xl shadow-lg group border border-gray-800"
                        >
                            <img src = {project.image}
                                 alt = {project.title}
                                 className = "w-full h-[300px] object-cover group-hover:brightness-50 transition duration-300"
                            />
                            <div className = "absolute inset-0 flex flex-col items-center justify-centertext-center px-4 opacity-0 group-hover:opacity-100 transition duration-500 bg-black bg-opacity-60">
                                <h3 className = "text-xl font-semibold text-white mb-2 mt-28">{project.title}</h3>
                                <p className = "text-sm text-gray-300 mb-2">{project.tech}</p>
                                <div className = "flex gap-4">
                                    <a
                                        href = {project.github}
                                        target = '_blank'
                                        rel = "noopener noreferrer"
                                        className = "px-3 py-1 text-sm text-white bg-gray-700 hover:bg-sky-500 rounded shadow"
                                    >
                                        GitHub
                                    </a>
                                    <a 
                                        href = {project.link}
                                        target = '_blank'
                                        rel = 'noopener noreferrer'
                                        className = "px-3 py-1 text-sm text-white bg-gray-700 hover:bg-purple-500 rounded shadow"  
                                    >
                                        Visit
                                    </a>    
                                </div>
                            </div>
                            <div className = "p-4 text-center bg-black/70 backdrop-blur-sm">
                                <h4 className = "text-lg text-white font-medium">{project.title}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;