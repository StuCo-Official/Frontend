import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center py-4 border-t border-gray-300 px-4 md:px-16">
      <div className="text-gray-600">
        <select className="bg-transparent focus:outline-none">
          <option value="en">English</option>
          {/* Add more language options here */}
        </select>
      </div>
      <div className="text-gray-600 text-sm">
        &copy; 2024 Brand, Inc. &bull; <a href="/privacy" className="hover:underline">Privacy</a> &bull; <a href="/terms" className="hover:underline">Terms</a> &bull; <a href="/sitemap" className="hover:underline">Sitemap</a>
      </div>
      <div className="flex space-x-4 text-gray-600">
        <a href="htzps://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaFacebookF />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaLinkedinIn />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
