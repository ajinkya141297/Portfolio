import React from 'react';

const services = [
  {
    title: 'UI/UX Design',
    icon: 'ri-brush-ai-fill',
    description:
      'Creating visually compelling and user-centric interfaces with intuitive navigation, clean layouts, and consistent design systems.',
  },
  {
    title: 'Web Development',
    icon: 'ri-code-s-slash-line',
    description:
      'Building fast, responsive, and scalable web applications using modern frameworks like React, Angular, and Node.js.',
  },
  {
    title: 'App Development',
    icon: 'ri-smartphone-line',
    description:
      'Developing cross-platform mobile applications with clean architecture, seamless UX, and robust backend integration.',
  },
];

const Services = () => {
  return (
    <div id="services" className="pt-24 pb-20 sm:px-12 px-6 lg:px-18 xl:px-20 bg-slate-50">
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-2 text-indigo-600 bg-indigo-50 rounded-full
          px-4 py-1.5 w-fit mx-auto mb-4">
          <i className="ri-service-line"></i>
          <span className="text-sm font-medium">My Services</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">What I Offer</h2>
        <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">
          I provide end-to-end development services — from ideation and design to deployment and optimization.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-100
              hover:-translate-y-1 border transition-all border-slate-200 rounded-2xl
              bg-white p-7 flex-1 basis-[18rem] max-w-[340px]"
          >
            <div className="text-2xl sm:text-4xl text-white p-4 bg-purple-700 w-fit rounded-2xl mb-5">
              <i className={item.icon}></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            <a href="#" className="inline-flex items-center gap-1 hover:text-purple-700 text-sm
              font-semibold text-gray-500 mt-4 transition-colors">
              Learn More <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        ))}
      </div>

      <div className="w-full mt-10 flex items-center justify-center">
        <a href="#about" className="flex items-center gap-3 rounded-full border-2 border-purple-600
          px-6 py-3 text-purple-700 font-medium text-sm hover:bg-purple-50 transition-all">
          <span>See All Services</span>
          <i className="ri-arrow-right-line"></i>
        </a>
      </div>
    </div>
  );
};

export default Services;
