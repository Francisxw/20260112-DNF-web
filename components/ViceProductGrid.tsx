import React from 'react';
import { Link } from 'react-router-dom';
import { VICE_PRODUCTS } from '../constants';

const ViceProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
      {VICE_PRODUCTS.map((item) => (
        <Link 
          to={`/product/${item.id}`} 
          key={item.id}
          className="group relative block aspect-[4/3] overflow-hidden rounded-sm shadow-sm hover:shadow-lg transition-shadow"
        >
          <div 
            className="absolute inset-0 bg-cover bg-[center_top] transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 border border-gray-200 transform group-hover:-translate-y-2 transition-transform duration-300">
              <span className="font-serif-display font-bold text-lg tracking-wide uppercase text-gray-900">
                {item.title}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ViceProductGrid;