import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductRowProps {
  title: string;
  products: Product[];
}

const ProductRow: React.FC<ProductRowProps> = ({ title, products }) => {
  return (
    <div className="container mx-auto max-w-[1200px] px-4 mb-12">
      <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
        <h2 className="text-xl font-bold text-gray-800 border-l-4 border-[#CFB672] pl-3">
          {title}
        </h2>
        <Link to="/category/all" className="text-xs text-gray-500 hover:text-[#CFB672]">
          查看更多 &gt;
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {products.map((product) => (
          <div key={product.id} className="group bg-white border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all duration-300 flex flex-col">
            <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-square w-full">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {product.tag && (
                <div className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-1 text-white rounded-sm
                  ${product.tag === 'HOT' ? 'bg-red-500' : 
                    product.tag === 'NEW' ? 'bg-green-500' : 'bg-orange-500'}`}
                >
                  {product.tag}
                </div>
              )}
              {/* Quick Action Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center text-xs">
                点击查看详情
              </div>
            </Link>
            <div className="p-4 flex flex-col flex-1">
              <Link to={`/product/${product.id}`} className="block text-sm font-medium text-gray-800 line-clamp-2 hover:text-[#CFB672] transition-colors mb-2 h-10">
                {product.name}
              </Link>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-[#CFB672]">¥{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">¥{product.originalPrice}</span>
                  )}
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRow;