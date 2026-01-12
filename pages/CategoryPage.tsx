import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CATEGORIES, MOCK_PRODUCTS } from '../constants';
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [priceSort, setPriceSort] = useState<'asc' | 'desc' | null>(null);
  const [activePriceFilter, setActivePriceFilter] = useState<string>('all');

  // Helper to handle category switch
  const handleCategoryChange = (catId: string) => {
    navigate(`/category/${catId}`);
  };

  const categoryName = id === 'all' ? '全部商品' : CATEGORIES.find(c => c.id === id)?.name || '未知分类';

  // Filter logic (mock)
  let products = id === 'all' || !id
    ? MOCK_PRODUCTS
    : MOCK_PRODUCTS.filter(p => p.category === id || Math.random() > 0.6); // Random fill for demo

  // Mock Price Filter
  if (activePriceFilter !== 'all') {
    // just shuffle for demo effect since we don't have real price ranges in mock data easily mapped
    products = products.filter(() => Math.random() > 0.3);
  }

  // Price ranges for filter
  const priceRanges = [
    { label: '全部', value: 'all' },
    { label: '0-99元', value: '0-99' },
    { label: '100-299元', value: '100-299' },
    { label: '300-599元', value: '300-599' },
    { label: '599元以上', value: '599-up' },
  ];

  return (
    <div className="animate-in fade-in duration-300 pb-12">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 mb-6 flex items-center">
        <Link to="/" className="hover:text-black">首页</Link>
        <ChevronRight size={12} className="mx-2" />
        <Link to="/category/all" className="hover:text-black">全部商品</Link>
        {id !== 'all' && (
            <>
                <ChevronRight size={12} className="mx-2" />
                <span className="text-[#C99A2C] font-bold">{categoryName}</span>
            </>
        )}
      </div>

      {/* Filter Section (The main change) */}
      <div className="bg-white border border-gray-200 mb-6 text-sm">
        {/* Category Row */}
        <div className="flex border-b border-dashed border-gray-200">
            <div className="w-24 bg-[#f9f9f9] text-gray-500 font-bold flex items-center justify-center shrink-0">
                分类：
            </div>
            <div className="flex-1 p-4 flex flex-wrap gap-4">
                <button 
                    className={`hover:text-[#C99A2C] ${id === 'all' ? 'text-[#C99A2C] font-bold' : 'text-gray-700'}`}
                    onClick={() => handleCategoryChange('all')}
                >
                    全部
                </button>
                {CATEGORIES.map(cat => (
                    <button 
                        key={cat.id}
                        className={`hover:text-[#C99A2C] ${id === cat.id ? 'text-[#C99A2C] font-bold' : 'text-gray-700'}`}
                        onClick={() => handleCategoryChange(cat.id)}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>
        </div>
        
        {/* Price Row */}
        <div className="flex">
            <div className="w-24 bg-[#f9f9f9] text-gray-500 font-bold flex items-center justify-center shrink-0">
                价格：
            </div>
            <div className="flex-1 p-4 flex flex-wrap gap-4">
                 {priceRanges.map(range => (
                    <button 
                        key={range.value}
                        className={`hover:text-[#C99A2C] ${activePriceFilter === range.value ? 'text-[#C99A2C] font-bold' : 'text-gray-700'}`}
                        onClick={() => setActivePriceFilter(range.value)}
                    >
                        {range.label}
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* Sort Bar */}
      <div className="bg-[#f9f9f9] border border-gray-200 p-3 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-6 text-sm">
            <button className="font-bold text-[#C99A2C]">综合排序</button>
            <button className="text-gray-600 hover:text-black">销量</button>
            <button className="text-gray-600 hover:text-black">新品</button>
            <button 
                className="text-gray-600 hover:text-black flex items-center gap-1"
                onClick={() => setPriceSort(prev => prev === 'asc' ? 'desc' : 'asc')}
            >
                价格 
                <div className="flex flex-col text-[10px] leading-none">
                    <ChevronUp size={10} className={priceSort === 'asc' ? 'text-[#C99A2C]' : 'text-gray-400'} />
                    <ChevronDown size={10} className={priceSort === 'desc' ? 'text-[#C99A2C]' : 'text-gray-400'} />
                </div>
            </button>
        </div>
        <div className="text-xs text-gray-500">
            共 <span className="text-[#C99A2C] font-bold">{products.length}</span> 件商品
        </div>
      </div>

      {/* Product Grid (Full Width) */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map(product => (
            <div key={product.id} className="bg-white border border-gray-100 hover:border-[#C99A2C] hover:shadow-lg transition-all duration-300 group relative">
                 <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-100">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    {product.tag && (
                        <div className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-1 text-white rounded-sm
                          ${product.tag === 'HOT' ? 'bg-red-500' : 
                            product.tag === 'NEW' ? 'bg-green-500' : 'bg-orange-500'}`}
                        >
                          {product.tag}
                        </div>
                    )}
                 </Link>
                 <div className="p-3">
                     <Link to={`/product/${product.id}`} className="block text-sm text-gray-700 mb-2 h-10 overflow-hidden line-clamp-2 hover:text-[#C99A2C] transition-colors">
                        {product.name}
                     </Link>
                     <div className="flex items-end justify-between">
                        <div className="text-lg font-bold text-[#C99A2C]">
                           ¥{product.price}
                        </div>
                        <div className="text-xs text-gray-400 mb-1">
                            {Math.floor(Math.random() * 1000)}+ 人付款
                        </div>
                     </div>
                 </div>
            </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="mt-12 flex justify-center gap-2 text-sm">
        <button className="px-3 py-1 border border-gray-300 text-gray-400 cursor-not-allowed bg-white">上一页</button>
        <button className="px-3 py-1 border border-[#C99A2C] bg-[#C99A2C] text-white">1</button>
        <button className="px-3 py-1 border border-gray-300 hover:border-[#C99A2C] hover:text-[#C99A2C] bg-white transition-colors">2</button>
        <button className="px-3 py-1 border border-gray-300 hover:border-[#C99A2C] hover:text-[#C99A2C] bg-white transition-colors">3</button>
        <button className="px-3 py-1 border border-gray-300 hover:border-[#C99A2C] hover:text-[#C99A2C] bg-white transition-colors">下一页</button>
      </div>
    </div>
  );
};

export default CategoryPage;