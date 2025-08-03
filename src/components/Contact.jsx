import React from "react";
import { motion } from 'framer-motion';

import GitHubIcon from '../assets/contact/github.png';
import MailIcon from '../assets/contact/mail.png';
import WhatsAppIcon from '../assets/contact/whatsapp.png';
import InstagramIcon from '../assets/contact/instagram.png';
import PhoneIcon from '../assets/contact/phone.png';
import TwitterIcon from '../assets/contact/twitter.png';
import LinkedinIcon from '../assets/contact/linkedin.png';

const contactLinks = [
  {
    name: 'LinkedIn',
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/in/gowtham-k-b40480264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'GitHub',
    icon: GitHubIcon,
    url: 'https://github.com/Gowtham-K23',
  },
  {
    name: 'WhatsApp',
    icon: WhatsAppIcon,
    url: 'https://wa.me/qr/Y2BCVUP4NP4JM1',
  },
  {
    name: 'Instagram',
    icon: InstagramIcon,
    url: 'https://www.instagram.com/gowthamk_23?utm_source=qr&igsh=NmttM3V1MmttODF3',
  },
  {
    name: 'Twitter',
    icon: TwitterIcon,
    url: 'https://x.com/GowthamK_23?t=-7gurF61AOqP6qSR0TTEmQ&s=09',
  },
];

const Contact = () => {
  return (
    <section
        id = "contact"
        className = "py-32 px-6 bg-gradient-to-tr from-blue-900 via-black to-blue-900 text-gray-200"
    >
        <div className = "max-w-4xl mx-auto text-center mb-20">
          <h2 className = "text-5xl font-extrabold tracking-wide bg-gradient-to-r from-teal-400 via-sky-500 to-indigo-500 text-transparent bg-clip-text">
            Let's Get Connected
          </h2>
          <p className = 'mt-6 text-lg text-gray-400 max-w-2xl mx-auto'>
            I'm always open to discussing new projects, creative ideas, or opportunities to
            collaborate in the tech world. Feel free to reach out or follow me on social platforms to stay Connected.
          </p>
        </div>

        {/*Contact Info */}
        <div className = "flex flex-col sm:flex-row justify-center items-center gap-8 mb-16">
          <motion.div
                whileHover = {{ scale: 1.05 }}
                transition = {{ duration: 0.3 }}
                className = "flex items-center gap-4 px-6 py-4 bg-gray-800 rounded-lg border border-gray-700 shadow hover:shadow-teal-600"
          >
            <img src = {MailIcon} alt = "Email" className = "w-12 h-12" />
            <span className = "text-base"><p className = "text-xl">gowthamk2394@gmail.com</p></span>
          </motion.div>
          <motion.div
                whileHover = {{ scale: 1.05 }}
                transition = {{ duration: 0.3 }}
                className = "flex items-center gap-4 px-6 py-4 bg-gray-800 rounded-lg border border-gray-700 shadow hover:shadow-indigo-600"
          >
            <img src = {PhoneIcon} alt = 'Phone' className = "w-12 h-12" />
            <span className = "text-base"><p className = "text-xl">+91 6380656652</p></span>
          </motion.div>     
        </div>

        {/* Social Media Icons */}
        <div className = "flex flex-wrap justify-center items-center gap-10">
          {contactLinks.map((contact, index) => (
            <motion.a
                key = {index}
                href = {contact.url}
                target = "_blank"
                rel = "noopener noreferrer"
                whileHover = {{ scale: 1.1 }}
                transition = {{ duration: 0.4 }}
                className = "relative group w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center bg-gray-800 border border-gray-600 shadow-md hover:shadow-purple-500/40"
            >
              <img src = {contact.icon}
                   alt = {contact.name}
                   className = "w-14 h-14 sm:w-16 sm:h-16 z-10 transition-transform group-hover:scale-110"
              />
              <span className = "absolute bottom-[-40px] text-lg text-gray-400 group-hover:text-sky-600 transition-all">
                {contact.name}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className = "mt-40 -mb-20 text-center text-lg text-gray-500">
          <p>Copyrights @ 2025 <span className = "text-white font-medium">Gowtham K. </span> All Rights Reserved.</p>
        </div>
    </section>
  );
};

export default Contact;