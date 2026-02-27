import React from 'react';
import { portfolioList } from '../assets/data';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  return (
    <div id="protfolio" className="pt-24 pb-20 px-6 sm:px-8 md:px-12 lg:px-18 xl:px-20 bg-slate-50">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 text-purple-600 bg-purple-50 rounded-full
          px-4 py-1.5 w-fit mx-auto mb-4">
          <i className="ri-folder-4-line"></i>
          <span className="text-sm font-medium">Portfolio</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">Recent Projects</h2>
        <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">
          A selection of projects I've built — spanning full-stack web apps, frontend interfaces, and backend services.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {portfolioList.map((item, index) => (
          <PortfolioItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
