import { useState } from 'react';

const PortfolioItem = ({ item }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const threshold = 12;

  const handleMove = (evt) => {
    const { left, top, width, height } = evt.currentTarget.getBoundingClientRect();
    const x = (evt.clientX - left) / width - 0.5;
    const y = (evt.clientY - top) / height - 0.5;
    setTilt({ x: y * threshold, y: x * threshold });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleMouseLeave}
      className="rounded-2xl shadow-lg overflow-hidden cursor-pointer bg-white
        transition-transform duration-200 border border-slate-100 hover:border-purple-200
        hover:shadow-xl hover:shadow-purple-100"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <div className="w-full h-44 bg-slate-100 overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x200?text=Project';
          }}
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h3>
        <span className="text-[11px] text-purple-600 font-medium block mb-2">{item.program}</span>
        {item.description && (
          <p className="text-xs text-gray-500 leading-relaxed mb-3">{item.description}</p>
        )}

        <div className="flex justify-between items-center pt-2 border-t border-slate-100">
          {item.github ? (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-500 hover:text-gray-900 transition-colors"
              title="View on GitHub"
            >
              <i className="ri-github-fill"></i>
            </a>
          ) : (
            <span />
          )}

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white px-4 py-1.5 relative rounded-full transition-all bg-purple-600
                text-xs inline-flex items-center justify-center hover:bg-purple-700 font-medium gap-1"
            >
              Live Preview
              <i className="ri-arrow-right-up-line group-hover:rotate-45 transition-all duration-300"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
