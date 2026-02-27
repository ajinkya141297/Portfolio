import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Sections on the Home page (scroll targets)
  const homeAnchors = [
    { id: 'home',       label: 'Home'       },
    { id: 'about',      label: 'About'      },
    { id: 'services',   label: 'Services'   },
    { id: 'experience', label: 'Experience' },
    { id: 'protfolio',  label: 'Portfolio'  },
    { id: 'Contacts',   label: 'Contact'    },
  ];

  // Pages that get their own route entry in the nav
  const pageLinks = [
    { to: '/skills',  label: 'Skills'  },
  ];

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      // Navigate home first, then scroll after a tick
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavOpen(false);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className="w-full flex items-center py-5 justify-between px-6 sm:px-8 md:px-10
     lg:px-10 xl:px-20 bg-white fixed top-0 left-0 z-50 shadow-sm">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-purple-100 flex items-center justify-center">
          <i className="ri-code-s-slash-line text-purple-700 text-xl"></i>
        </div>
        <Link to="/" className="text-slate-700 text-[17px] sm:text-2xl md:text-3xl font-black hover:text-purple-600 transition-colors">
          Ajinkya
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="items-center gap-1 hidden md:flex">
        {homeAnchors.map((anchor) => (
          <button
            key={anchor.id}
            onClick={() => scrollToSection(anchor.id)}
            className="text-sm lg:text-[15px] text-gray-700 hover:text-purple-500 transition-colors
              font-medium px-3 py-2 rounded-md hover:bg-purple-50 cursor-pointer border-none bg-transparent"
          >
            {anchor.label}
          </button>
        ))}

        {pageLinks.map((page) => (
          <Link
            key={page.to}
            to={page.to}
            className={`text-sm lg:text-[15px] font-medium px-3 py-2 rounded-md transition-colors
              ${location.pathname === page.to
                ? 'text-purple-700 bg-purple-50'
                : 'text-gray-700 hover:text-purple-500 hover:bg-purple-50'
              }`}
          >
            {page.label}
          </Link>
        ))}

        <Link
          to="/contact"
          className="ml-2 py-2.5 px-5 bg-purple-600 text-white rounded-md hover:bg-purple-700
            shadow-lg shadow-purple-200 cursor-pointer transition-all text-sm font-medium"
        >
          Hire Me
        </Link>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`${isNavOpen ? 'translate-x-0' : '-translate-x-full'} 
          fixed top-0 left-0 h-screen bg-white w-64 flex flex-col pt-20 gap-2 px-4 
          shadow-xl transition-transform duration-300 md:hidden z-40`}
      >
        {homeAnchors.map((anchor) => (
          <button
            key={anchor.id}
            onClick={() => scrollToSection(anchor.id)}
            className="text-left text-sm text-gray-700 hover:text-purple-500 hover:bg-purple-50
              font-medium px-4 py-3 rounded-lg transition-all cursor-pointer border-none bg-transparent w-full"
          >
            {anchor.label}
          </button>
        ))}

        {pageLinks.map((page) => (
          <Link
            key={page.to}
            to={page.to}
            onClick={() => setIsNavOpen(false)}
            className={`text-sm font-medium px-4 py-3 rounded-lg transition-all
              ${location.pathname === page.to
                ? 'text-purple-700 bg-purple-50'
                : 'text-gray-700 hover:text-purple-500 hover:bg-purple-50'
              }`}
          >
            {page.label}
          </Link>
        ))}

        <Link
          to="/contact"
          onClick={() => setIsNavOpen(false)}
          className="mt-2 py-3 px-5 bg-purple-600 text-white rounded-lg hover:bg-purple-700
            cursor-pointer transition-all text-sm font-medium text-center"
        >
          Hire Me
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="text-2xl cursor-pointer md:hidden z-50 relative border-none bg-transparent text-gray-700"
        aria-label="Toggle menu"
      >
        <i className={isNavOpen ? 'ri-close-fill' : 'ri-menu-line'}></i>
      </button>

      {/* Overlay */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black/20 md:hidden z-30"
          onClick={() => setIsNavOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
