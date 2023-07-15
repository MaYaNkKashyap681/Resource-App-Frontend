import React from 'react';
import { FaHome, FaInfoCircle, FaPhone, FaQuestionCircle, FaUser } from 'react-icons/fa';

const Footer = () => {
  const usefulLinks = [
    { label: 'Home', url: '#', icon: <FaHome /> },
    { label: 'About Us', url: '#', icon: <FaInfoCircle /> },
    { label: 'Contact Us', url: '#', icon: <FaPhone /> },
    { label: 'Terms of Service', url: '#', icon: <FaUser /> },
    { label: 'Privacy Policy', url: '#', icon: <FaUser /> },
    { label: 'FAQs', url: '#', icon: <FaQuestionCircle /> },
    { label: 'Blog', url: '#', icon: <FaInfoCircle /> },
    { label: 'Sign In', url: '#', icon: <FaUser /> },
  ];

  return (
    <footer className="bg-dark text-white mt-32">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">EduExchange</h3>
            <p className="text-lg mb-4">Connect and exchange educational resources for enhanced learning.</p>
            <p className="text-md">
              EduExchange is a leading platform dedicated to revolutionizing the way students and educators share and
              collaborate on study materials. We believe that accessible and collaborative learning is the key to
              academic success.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <div className="grid grid-cols-2 ">
              {usefulLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center text-lg text-green2 hover:text-white hover:underline"
                >
                  {link.icon}
                  <span className="ml-2">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <p className="text-xl mb-2">Join our mailing list for updates and exclusive content.</p>
            <form className="flex flex-col w-full">
              <input type="email" placeholder="Your Email" className="w-full text-lg py-2 px-3 rounded-sm mb-2 md:mr-2 text-dark focus:outline-none font-bold" />
              <button type="submit" className="bg-green1 hover:bg-green2 text-white py-2 px-4 rounded-sm transition-colors duration-300">Subscribe</button>
            </form>
          </div>
        </div>
        <hr className="my-6 border-green2" />
        <p className="mt-4 text-sm text-center">
          © 2023 EduExchange. All rights reserved. | <a href="#" className="text-green2 hover:text-white hover:underline">Terms of Use</a> | <a href="#" className="text-green2 hover:text-white hover:underline">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
