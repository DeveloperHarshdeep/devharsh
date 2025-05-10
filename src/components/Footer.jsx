import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>Email: <a href="mailto:harshdeepdeveloper@gmail.com" className="text-secondary hover:text-white">harshdeepdeveloper@gmail.com</a></p>
          <p>Phone: <a href="tel:7589434135" className="text-secondary hover:text-white">7589434135</a></p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Let's Connect</h2>
          <div className="flex gap-4 text-[22px]">
            <a href="https://www.instagram.com/developer_harshdeep/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="https://github.com/Harsh1jatt" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://discordapp.com/users/harsh1jatt_86908" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <i className="ri-discord-fill"></i>
            </a>
            <a href="https://www.fiverr.com/harshdeep___" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <i className="ri-briefcase-fill"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="text-center mt-6 text-sm text-secondary">
        &copy; {new Date().getFullYear()} Harshdeep. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
