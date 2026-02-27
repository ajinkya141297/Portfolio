import React from 'react';
import { workProcess } from '../assets/data';

const iconColors = [
  'bg-pink-600', 'bg-purple-700', 'bg-indigo-600',
  'bg-blue-600', 'bg-violet-700', 'bg-fuchsia-600', 'bg-rose-600',
];

const Exp = () => {
  return (
    <div
      id="experience"
      className="pt-24 pb-20 px-6 sm:px-8 md:px-12 lg:px-18 xl:px-20 bg-white"
    >
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-2 text-purple-600 bg-purple-50 rounded-full
          px-4 py-1.5 w-fit mx-auto mb-4">
          <i className="ri-briefcase-4-line"></i>
          <span className="text-sm font-medium">My Expertise</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">Working Experience</h2>
        <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">
          A summary of my technical skills, the technologies I work with, and the kinds of problems I love solving.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
        {workProcess.map((item, index) => (
          <div
            key={item.id}
            className="p-6 hover:-translate-y-1 transition-all shadow-md shadow-gray-100 border
              border-slate-100 bg-white rounded-2xl hover:border-purple-200 hover:shadow-purple-100"
          >
            <div className={`p-3 text-white rounded-xl text-2xl w-fit mb-4 shrink-0 ${iconColors[index % iconColors.length]}`}>
              <i className={item.icon}></i>
            </div>
            <h3 className="font-semibold text-lg text-slate-700 mb-2">{item.category}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exp;
