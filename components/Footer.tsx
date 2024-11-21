import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='w-full pt-10 pb-0 mb-0 border-t dark:border-white border-black' id="contact">
      <div className='w-full left-0'>
        <div className='w-full max-w-7xl mx-auto px-4'>
          <div className='flex justify-between xs:flex-col xs:text-center sm:flex-col sm:text-center md:flex-row'>
            <div>
              <h2 className='md:text-left'>Michele Di Stadio</h2>
              <p className='md:text-left'>Junior Frontend Developer</p>
            </div>
            <div className='xs:text-center sm:text-center'>
              <h2>Socials:</h2>
              <ul className='flex justify-center space-x-4'>
                <li>
                  <a href='https://www.linkedin.com/in/michele-di-stadio/' target='_blank' rel='noopener noreferrer' className='rounded-full cursor-pointer'>
                    <FaLinkedin aria-label="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/Mikke777' target='_blank' rel='noopener noreferrer' className='rounded-full cursor-pointer'>
                    <FaGithub aria-label="GitHub" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
