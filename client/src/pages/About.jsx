import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800 uppercase text-center'>About Sajilai</h1>
      <p className='mb-4 text-slate-700'>Sajilai is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
      <p className='mb-4 text-slate-700'>
        Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>
      <p className='mb-4 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>

      <div className="flex items-center justify-center gap-8 mt-8">
        <a href="https://github.com/nabinhamal" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <FaGithub size={50} />
         
        </a>
        <a href="https://nabinhamalportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <FaGlobe size={50} />
          
        </a>
       
      </div>
    </div>
  );
}
