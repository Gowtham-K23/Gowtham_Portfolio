import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Cert1 from '../assets/certificates/java-guvi.jpg';
import Cert2 from '../assets/certificates/java.png';
import Cert3 from '../assets/certificates/python-guvi.png';
import Cert4 from '../assets/certificates/python.png';
import Cert5 from '../assets/certificates/oracle.png';
import Cert6 from '../assets/certificates/mongodb.png';
import Cert7 from '../assets/certificates/codechef.png';
import Cert8 from '../assets/certificates/ml-guvi.png';
import Cert9 from '../assets/certificates/ml.png';
import Cert10 from '../assets/certificates/aws.png';

const certificates = [
  Cert1, Cert2, Cert3, Cert4, Cert5,
  Cert6, Cert7, Cert8, Cert9, Cert10,
];

const Certificates = () => {
  return (
    <section
        id = "certificates"
        className = 'py-32 px-6 bg-gradient-to-tr from-black via-gray-900 to-black text-white'
    >
      <div className = 'max-w-6xl mx-auto'>
        <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            CERTIFICATIONS
          </h2>
          <div className="flex items-center justify-center mt-4 space-x-3">
            <div className="h-[2px] w-16 bg-gray-400" />
            <div className="w-4 h-4 bg-blue-400 rounded-full" />
            <div className="w-2 h-2 bg-white rounded-full" />
            <div className="w-4 h-4 bg-pink-400 rounded-full" />
            <div className="h-[2px] w-16 bg-gray-400" />
          </div>
        </div>


        {/* Gallery */}
        <Swiper
              modules = {[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween = {30}
              navigation
              pagination = {{ clickable: true }}
              scrollbar = {{ draggable: true }}
              breakpoints = {{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key = {index}>
                <div className = 'rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-blue-500/75 transition duration-300 bg-white/5 backdrop-blur-md'>
                  <div className = 'w-full h-[400px] flex items-center justify-center bg-black/30 rounded-2xl'>
                      <img
                          src = {cert}
                          alt = {`Certificate ${index + 1}`}
                          className = 'max-h-full max-w-full object-contain rounded' 
                      />
                  </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;