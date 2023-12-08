import React from 'react';
import SocialIcons from '../../components/SocialIcons';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Phone: 555-555-5555</p>
      <p>Email:</p>
      {/* Remove the commented out "//" */}
      
      {/* <div className="social-icons-container">
        <SocialIcons />
      </div> */}

      {/* You can also add individual social icons with custom styling */}
      <div className="individual-icons">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className='mr-2 text-sm text-white rounded-full lg:text-base 2xl:text-lg hover:scale-125 hover:bg-orange hover:text-white bg-accent 2xl:p-3' />
        </a>
        
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className='mr-2 text-sm text-white rounded-full lg:text-base 2xl:text-lg hover:scale-125 hover:bg-orange hover:text-white bg-accent 2xl:p-3' />
        </a>
        
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='mr-2 text-sm text-white rounded-full lg:text-base 2xl:text-lg hover:scale-125 hover:bg-orange hover:text-white bg-accent 2xl:p-3' />
        </a>
        
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className='mr-2 text-sm text-white rounded-full lg:text-base 2xl:text-lg hover:scale-125 hover:bg-orange hover:text-white bg-accent 2xl:p-3' />
        </a>
        
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube className='mr-2 text-sm text-white rounded-full lg:text-base 2xl:text-lg hover:scale-125 hover:bg-orange hover:text-white bg-accent 2xl:p-3' />
        </a>
      </div>
    </div>
  );
}
