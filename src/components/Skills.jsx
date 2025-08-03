import React from 'react';
import { motion } from 'framer-motion';

import JavaIcon from '../assets/skills/java.png';
import PythonIcon from '../assets/skills/python.png';
import CIcon from '../assets/skills/c.png';
import CppIcon from '../assets/skills/cpp.png';
import HTMLIcon from '../assets/skills/html.png';
import CSSIcon from '../assets/skills/css.png';
import JSIcon from '../assets/skills/javascript.png';
import ReactIcon from '../assets/skills/react.png';
import TailwindIcon from '../assets/skills/tailwind.png';
import NodeIcon from '../assets/skills/node.png';
import ExpressIcon from '../assets/skills/express.png';
import MySQLIcon from '../assets/skills/mysql.png';
import MongoDBIcon from '../assets/skills/mongodb.png';
import GitIcon from '../assets/skills/git.png';
import GitHubIcon from '../assets/tools/github.png';
import CanvaIcon from '../assets/tools/canva.png';
import JupyterIcon from '../assets/tools/jupyter.png';
import ColabIcon from '../assets/tools/googlecolab.png';
import IntelliJIcon from '../assets/tools/intellij.png';
import VSCodeIcon from '../assets/tools/vscode.png';
import PostmanIcon from '../assets/skills/postman.png';
import AWSIcon from '../assets/tools/aws.png';

const skillsData = [
    {
        category: 'LANGUAGES',
        skills: [
            { name: 'Java', icon: JavaIcon },
            { name: 'Python', icon: PythonIcon },
            { name: 'C', icon: CIcon },
            { name: 'C++', icon: CppIcon },
        ],
    },
    {
        category: 'FRONTEND DEVELOPMENT',
        skills: [
            { name: 'HTML', icon: HTMLIcon },
            { name: 'CSS', icon: CSSIcon },
            { name: 'JavaScript', icon: JSIcon },
            { name: 'React JS', icon: ReactIcon },
            { name: 'Tailwind CSS', icon: TailwindIcon },
        ],
    },
    {
        category: 'BACKEND DEVELOPMENT',
        skills: [
            { name: 'Node.js', icon: NodeIcon },
            { name: 'Express.js', icon: ExpressIcon },
        ],
    },
    {
        category: 'DATABASES',
        skills: [
            { name: 'MySQL', icon: MySQLIcon },
            { name: 'MongoDB', icon: MongoDBIcon },
        ],
    },
    {
        category: 'TOOLS',
        skills: [
            { name: 'Git', icon: GitIcon },
            { name: 'GitHub', icon: GitHubIcon },
            { name: 'Jupter Notebook', icon: JupyterIcon },
            { name: 'Google Colab', icon: ColabIcon },
            { name: 'intellij', icon: IntelliJIcon },
            { name: 'VS Code', icon: VSCodeIcon },
            { name: 'Postman', icon: PostmanIcon },
            { name: 'AWS', icon: AWSIcon },
        ],
    },
];

const Skills = () => {
    return (
        <section
            id = "skills"
            className = 'px-6 py-32 bg-gradient-to-tl from-black via-gray-900 to-black text-white'
        >
            <div className = 'max-w-7xl mx-auto'>
                <div className = 'max-w-5xl mx-auto text-center mb-16 relative z-10'>
                    <h2 className = 'text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
                        SKILLS & TOOLS
                    </h2>
                    <div className = 'flex items-center justify-center mt-4 space-x-3'>
                        <div className = 'h-[2px] w-16 bg-gray-400' />
                        <div className = 'w-4 h-4 bg-blue-400 rounded-full' />
                        <div className = 'w-2 h-2 bg-white rounded-full' />
                        <div className = 'w-4 h-4 bg-pink-400 rounded-full' />
                        <div className = 'h-[2px] w-16 bg-gray-400' />
                     </div>
                </div>

                <div className = 'space-y-20'>
                    {skillsData.map((group, index) => (
                        <div key = {index}>
                            <h3 className = 'text-2xl font-semibold text-center text-cyan-500 mb-10 tracking-wide'>
                                {group.category}
                            </h3>
                            <div className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center px-4'>
                                {group.skills.map((skill, i) => (
                                    <motion.div
                                        key = {i}
                                        initial = {{ opacity: 0, scale: 0.9 }}
                                        whileInView = {{ opacity: 1, scale: 1 }}
                                        transition = {{ duration: 0.4, delay: i * 0.05 }}
                                        viewport = {{ once: true }}
                                        className = 'flex flex-col items-center space-y-7 w-full max-2-[120px] p-4 rounded-lg border border-gray-700 hover:border-indigo-500 hover:shadow-indigo-600/30 hover: shadow-lg transition duration-300'
                                    >
                                        <img
                                            src = {skill.icon}
                                            alt = {skill.name}
                                            className = 'w-20 h-20 object-contain'
                                        />
                                        <p className = 'text-lg text-center font-medium text-gray-200'>
                                            {skill.name}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;