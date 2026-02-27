import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="flex flex-col bg-slate-900 text-white items-center justify-around w-full
      py-12 text-sm">
      
      {/* Logo & Tagline */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black text-white mb-1">Ajinkya<span className="text-purple-400">.</span></h2>
        <p className="text-slate-400 text-xs">Full Stack Developer · Pune, India</p>
      </div>

      {/* Nav Links */}
      <div className="sm:flex-row flex flex-col items-center gap-2 sm:gap-6 mb-8">
        {[
          { id: 'home', label: 'Home' },
          { id: 'about', label: 'About' },
          { id: 'services', label: 'Services' },
          { id: 'experience', label: 'Experience' },
          { id: 'protfolio', label: 'Portfolio' },
          { id: 'Contacts', label: 'Contact' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="font-medium text-slate-400 hover:text-purple-400 transition-all
              text-sm border-none bg-transparent cursor-pointer"
          >
            {item.label}
          </button>
        ))}
        <Link to="/skills" className="font-medium text-slate-400 hover:text-purple-400 transition-all text-sm">
          Skills
        </Link>
      </div>

      {/* Socials */}
      <div className="flex items-center gap-4 mb-8 text-indigo-400">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"
          className="hover:-translate-y-0.5 transition-all duration-300 hover:text-blue-400 text-xl">
          <i className="ri-linkedin-box-fill"></i>
        </a>
        <a href="https://github.com/ajinkya141297" target="_blank" rel="noreferrer"
          className="hover:-translate-y-0.5 transition-all duration-300 hover:text-white text-xl">
          <i className="ri-github-fill"></i>
        </a>
        <a href="https://wa.me/919561318939" target="_blank" rel="noreferrer"
          className="hover:-translate-y-0.5 transition-all duration-300 hover:text-green-400 text-xl">
          <i className="ri-whatsapp-line"></i>
        </a>
        <a href="#" className="hover:-translate-y-0.5 transition-all duration-300 hover:text-red-400 text-xl">
          <i className="ri-youtube-fill"></i>
        </a>
      </div>

      <div className="w-full max-w-md h-px bg-slate-700 mb-6"></div>

      <p className="text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} Ajinkya Patil — All rights reserved.
        <br />
        Built with React.js & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
