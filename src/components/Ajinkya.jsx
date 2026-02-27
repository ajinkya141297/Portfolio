import { useState } from 'react';
import { motion } from 'framer-motion';

const Ajinkya = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Pdf/Ajinkya_CV.pdf';
    link.download = 'Ajinkya_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 7000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      id="home"
      className="flex flex-col md:flex-row justify-between w-full min-h-screen items-center
        bg-slate-200 pt-28 px-6 pb-10 sm:px-8 md:px-12 lg:px-18 xl:px-20 gap-10"
    >
      {/* Text Content */}
      <div className="flex justify-start flex-col items-start pt-6 w-full md:w-[50%]">
        <div className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
          <i className="ri-code-s-slash-line"></i>
          <span>Full Stack Developer</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-bold leading-tight">
          Hello, I'm <span className="text-purple-700">Ajinkya Patil</span>
        </h1>

        <p className="py-6 text-sm sm:text-[15px] lg:text-[16px] text-gray-600 leading-relaxed">
          I'm a passionate full-stack developer who loves building secure, scalable, and performance-driven
          web applications. My core strength lies in frontend development — crafting modern, responsive UIs
          using React.js & Angular, creating RESTful APIs, handling authentication, and designing efficient databases.
        </p>

        <div className="flex gap-4 flex-wrap">
          <button
            onClick={handleResumeDownload}
            className="sm:py-4 sm:px-8 py-3 px-6 bg-purple-700 text-white rounded-lg cursor-pointer
              transition-all hover:-translate-y-1.5 hover:bg-purple-600 shadow-2xl
              shadow-purple-400 duration-150 text-sm font-medium flex items-center gap-2"
          >
            <i className="ri-download-2-fill"></i>
            Download CV
          </button>

          <a
            href="#protfolio"
            className="sm:py-4 sm:px-8 py-3 px-6 border-2 border-purple-700 text-purple-700
              rounded-lg cursor-pointer transition-all hover:-translate-y-1.5 hover:bg-purple-50
              duration-150 text-sm font-medium flex items-center gap-2"
          >
            <i className="ri-eye-line"></i>
            View Work
          </a>
        </div>

        {/* Download Popup */}
        {showPopup && (
          <div className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600
            text-white px-6 py-4 rounded-xl shadow-2xl animate-bounce transition-all duration-500 z-50">
            <div className="flex items-center gap-3">
              <i className="ri-checkbox-circle-fill text-xl"></i>
              <p className="text-sm font-medium">Resume downloaded successfully 🎉</p>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="w-full flex p-4 sm:p-6 bg-white rounded-2xl items-center mt-10 justify-between
          shadow-lg shadow-gray-200">
          <div className="text-center">
            <h1 className="text-xl lg:text-3xl font-bold text-gray-800">3+</h1>
            <small className="text-[11px] sm:text-xs text-slate-500">Years Experience</small>
          </div>
          <div className="w-px h-12 bg-gray-200"></div>
          <div className="text-center">
            <h1 className="text-xl lg:text-3xl font-bold text-gray-800">10+</h1>
            <small className="text-[11px] sm:text-xs text-slate-500">Projects Done</small>
          </div>
          <div className="w-px h-12 bg-gray-200"></div>
          <div className="text-center">
            <h1 className="text-xl lg:text-3xl font-bold text-gray-800">15+</h1>
            <small className="text-[11px] sm:text-xs text-slate-500">Technologies</small>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-72 h-72 lg:w-80 lg:h-80 bg-purple-200 rounded-full opacity-40 blur-2xl"></div>
        <div className="relative bg-white rounded-2xl w-64 h-80 lg:w-76 lg:h-96 overflow-hidden shadow-2xl">
          <img
            src="/image/ajinkya_iamge.png"
            alt="Ajinkya Patil"
            className="w-full h-full object-cover object-[center_15%]"
          />
        </div>
        {/* Floating badge */}
        <div className="absolute -bottom-3 -right-3 bg-purple-700 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-lg">
          <i className="ri-code-s-slash-line mr-1"></i> Available for Work
        </div>
      </div>
    </motion.div>
  );
};

export default Ajinkya;
