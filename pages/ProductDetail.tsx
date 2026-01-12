import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS, VICE_PRODUCTS } from '../constants';
import { ChevronRight, Star, ShoppingCart, Truck, ShieldCheck } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Try to find in products or vice products (just for demo content)
  const product = MOCK_PRODUCTS.find(p => p.id === id) || 
                 VICE_PRODUCTS.find(v => v.id === id) || 
                 MOCK_PRODUCTS[0];

  const title = 'title' in product ? product.title : product.name;
  const price = 'price' in product ? product.price : 999;
  
  return (
    <div className="animate-in fade-in duration-300">
       <div className="text-xs text-gray-500 mb-6 flex items-center">
        <Link to="/" className="hover:text-black">首页</Link>
        <ChevronRight size={12} className="mx-2" />
        <Link to="/category/all" className="hover:text-black">全部商品</Link>
        <ChevronRight size={12} className="mx-2" />
        <span className="text-black font-bold line-clamp-1">{title}</span>
      </div>

      <div className="bg-white p-6 border border-gray-100 flex flex-col md:flex-row gap-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
            <div className="aspect-square bg-gray-100 overflow-hidden border border-gray-200">
                <img src={product.image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-zoom-in" />
            </div>
            <div className="flex gap-4 mt-4">
                {[1,2,3,4].map(i => (
                    <div key={i} className="w-20 h-20 border border-gray-200 hover:border-[#CFB672] cursor-pointer p-1">
                        <img src={product.image} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>

        {/* Right: Info */}
        <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
            <div className="text-xs text-gray-500 mb-4">编码: {id} | 销量: 1000+ | 评价: 450</div>
            
            <div className="bg-[#f9f9f9] p-4 mb-6">
                <div className="flex items-baseline gap-2">
                    <span className="text-xs text-gray-500">价格</span>
                    <span className="text-3xl font-bold text-[#CFB672]">¥{price}</span>
                </div>
            </div>

            {/* Config */}
            <div className="space-y-4 mb-8">
                <div>
                    <span className="text-sm font-bold text-gray-700 block mb-2">规格</span>
                    <div className="flex gap-3">
                        <button className="px-4 py-1 border-2 border-[#CFB672] text-[#CFB672] text-sm">默认规格</button>
                        <button className="px-4 py-1 border border-gray-200 hover:border-gray-400 text-sm">礼盒装 (+¥50)</button>
                    </div>
                </div>
                <div>
                     <span className="text-sm font-bold text-gray-700 block mb-2">数量</span>
                     <div className="flex w-32 border border-gray-300">
                         <button className="w-10 h-8 bg-gray-50 hover:bg-gray-100">-</button>
                         <input type="text" value="1" className="w-12 h-8 text-center border-l border-r border-gray-300 outline-none" readOnly />
                         <button className="w-10 h-8 bg-gray-50 hover:bg-gray-100">+</button>
                     </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-[#CFB672] hover:bg-[#b09b5f] text-white h-12 font-bold flex items-center justify-center gap-2 transition-colors">
                    立即购买
                </button>
                <button className="flex-1 border-2 border-[#CFB672] text-[#CFB672] hover:bg-[#FFF8E6] h-12 font-bold flex items-center justify-center gap-2 transition-colors">
                    <ShoppingCart size={18} /> 加入购物车
                </button>
            </div>

            {/* Promises */}
            <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-1"><ShieldCheck size={14} className="text-[#CFB672]" /> 官方正品保证</div>
                <div className="flex items-center gap-1"><Truck size={14} className="text-[#CFB672]" /> 满299包邮</div>
                <div className="flex items-center gap-1"><Star size={14} className="text-[#CFB672]" /> 7天无理由退换</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;