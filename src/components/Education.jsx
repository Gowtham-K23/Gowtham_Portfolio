import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    title: 'Class X',
    year: '2019 - 2020',
    score: 'Percentage: 89.0%',
    institution: 'M.K.R. Ayya Nadar Jeyalakshmi Ammal English Medium School',
    location: 'Madurai, Tamil Nadu, India',
  },
  {
    title: 'Class XII',
    year: '2021 - 2022',
    score: 'Percentage: 86.6%',
    institution: 'M.K.R. Ayya Nadar Jeyalakshmi Ammal English Medium School',
    location: 'Madurai, Tamil Nadu, India',
  },
  {
    title: 'B.E. Computer Science and Engineering',
    year: '2022 - 2026',
    score: 'CGPA: 8.74 (till Semester 5)',
    institution: 'PSNA College of Engineering and Technology',
    location: 'Dindigul, Tamil Nadu, India',
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-40 px-6 bg-gradient-to-tr from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mx-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            EDUCATION
          </h2>

          <div className="flex items-center justify-center mt-4 space-x-3">
            <div className="h-[2px] w-16 bg-gray-400" />
            <div className="w-4 h-4 bg-blue-400 rounded-full" />
            <div className="w-2 h-2 bg-white rounded-full" />
            <div className="w-4 h-4 bg-pink-400 rounded-full" />
            <div className="h-[2px] w-16 bg-gray-400" />
          </div>
        </div>

        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-md border border-blue-700"
            >
              <h3 className="text-2xl font-semibold text-blue-300 mb-2">
                {edu.title}
              </h3>
              <p className="text-gray-300 mb-1">{edu.year}</p>
              <p className="text-gray-300 mb-1">{edu.score}</p>
              <p className="text-gray-200 font-medium">{edu.institution}</p>
              <p className="text-gray-400 text-sm">{edu.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
