import React from 'react';

const About = () => {
  return (
    <div id="about" className="px-6 sm:p-12 lg:px-40 bg-white relative z-10">
      <div className="w-full bg-slate-200 h-[75vh] absolute -z-10 top-0 left-0"></div>

      <div className="w-full lg:p-20 rounded-2xl h-fit bg-white flex-col flex lg:flex-row
        lg:justify-between gap-12 shadow-2xl shadow-gray-200">

        {/* Profile Card */}
        <div className="relative items-center justify-center flex flex-col gap-4">
          <div className="max-w-[290px] w-full rounded-xl bg-gray-100 overflow-hidden h-[350px] shadow-lg">
            <img
              src="/image/ajinkya_iamge.png"
              alt="Ajinkya Patil"
              className="w-full h-full object-cover object-[center_15%]"
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center p-2 bg-white shadow-xl shadow-gray-200 rounded-xl gap-1">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-white transition-all
                font-bold text-xl hover:bg-purple-600">
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a href="https://github.com/ajinkya141297" target="_blank" rel="noreferrer"
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-white transition-all
                font-bold text-xl hover:bg-gray-800">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://wa.me/919561318939" target="_blank" rel="noreferrer"
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-white transition-all
                font-bold text-xl hover:bg-green-500">
              <i className="ri-whatsapp-line"></i>
            </a>
            <a href="/Pdf/Ajinkya_CV.pdf" download
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-white transition-all
                font-bold text-xl hover:bg-purple-600">
              <i className="ri-file-user-line"></i>
            </a>
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:w-[60%] flex justify-center flex-col">
          <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-1 rounded-full
            text-sm font-medium w-fit mb-4">
            <i className="ri-user-3-line"></i>
            <span>About Me</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            I am a Professional <span className="text-purple-700">Web Developer</span>
          </h1>

          <p className="text-sm text-gray-600 mt-5 leading-relaxed">
            I'm a dedicated full-stack developer with 3+ years of experience building modern web applications.
            I specialize in React.js, Angular, Java Spring Boot, and Node.js. I'm passionate about writing clean,
            maintainable code and delivering exceptional user experiences.
          </p>

          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            When I'm not coding, I enjoy exploring new technologies, contributing to open source, and continuously
            leveling up my skills.
          </p>

          {/* Info Grid */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { icon: 'ri-map-pin-line', label: 'Location', value: 'Pune, India' },
              { icon: 'ri-briefcase-line', label: 'Experience', value: '3+ Years' },
              { icon: 'ri-mail-line', label: 'Email', value: 'ajinkya141297@gmail.com' },
              { icon: 'ri-smartphone-line', label: 'Availability', value: 'Open to Opportunities' },
            ].map((info) => (
              <div key={info.label} className="flex items-center gap-2 text-sm">
                <i className={`${info.icon} text-purple-600`}></i>
                <div>
                  <span className="text-gray-400 text-xs block">{info.label}</span>
                  <span className="text-gray-700 font-medium text-xs">{info.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="gap-4 mt-8 flex flex-col sm:flex-row">
            <a href="#protfolio"
              className="px-6 py-3 bg-purple-700 text-white text-sm rounded-lg cursor-pointer
                hover:bg-purple-600 transition-all text-center font-medium">
              My Projects
            </a>
            <a href="/Pdf/Ajinkya_CV.pdf" download
              className="px-6 py-3 border-2 border-purple-700 text-purple-700 text-sm rounded-lg
                cursor-pointer hover:bg-purple-50 transition-all text-center font-medium">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
