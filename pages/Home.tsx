import React from 'react';
import HeroSection from '../components/HeroSection';
import ViceProductGrid from '../components/ViceProductGrid';
import ProductRow from '../components/ProductRow';
import { MOCK_PRODUCTS } from '../constants';
import { ArrowRight, Gamepad2, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  // Ensure we have exactly 4 items for the full width rows as requested
  // In a real app, this would be handled by the backend or proper array slicing logic
  const hotProducts = [...MOCK_PRODUCTS].slice(0, 4); 
  const newProducts = [...MOCK_PRODUCTS].reverse().slice(0, 4);

  return (
    <div className="animate-in fade-in duration-500">
      {/* 1. Hero Section (Page 1-4) */}
      <HeroSection />

      {/* 2. Vice Products Grid */}
      <ViceProductGrid />

      {/* 3. Banners: Gacha & Games */}
      <div className="container mx-auto max-w-[1200px] px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/gacha" className="bg-gray-100 p-8 flex flex-col items-center justify-center text-center border-t-2 border-red-500 h-48 group cursor-pointer hover:bg-gray-50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] px-2 py-1 font-bold">HOT</div>
            <Gift size={32} className="text-red-500 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-1">扭蛋机抽奖 / DNF周边福袋</h3>
            <p className="text-gray-500 text-sm mb-4">赢取限量手办与稀有道具</p>
            <span className="bg-white border border-gray-300 px-6 py-2 text-sm font-medium group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-colors">
              立即进入
            </span>
          </Link>
          <Link to="/minigame" className="bg-gray-100 p-8 flex flex-col items-center justify-center text-center border-t-2 border-blue-500 h-48 group cursor-pointer hover:bg-gray-50 transition-colors">
            <Gamepad2 size={32} className="text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-1">DNF周边小游戏</h3>
            <p className="text-gray-500 text-sm mb-4">参与游戏互动领取积分</p>
            <span className="bg-white border border-gray-300 px-6 py-2 text-sm font-medium group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-colors">
              立即进入
            </span>
          </Link>
        </div>
      </div>

      {/* 4. Best Sellers */}
      <ProductRow title="热销排行" products={hotProducts} />

      {/* 5. New Arrivals */}
      <ProductRow title="新品推荐" products={newProducts} />

      {/* 6. Node Announcement (Placeholder for wireframe section) */}
      <div className="container mx-auto max-w-[1200px] px-4 mb-12">
        <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
          <h2 className="text-xl font-bold text-gray-800 border-l-4 border-[#CFB672] pl-3">
            节点预告
          </h2>
        </div>
        <div className="h-32 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
            暂无活动预告
        </div>
      </div>

      {/* 7. Bottom Category Links (Visual from wireframe) */}
      <div className="container mx-auto max-w-[1200px] px-4 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-gray-200 p-4">
          {['服饰及配饰', '礼盒/典藏包类产品', '生活日用', '查看更多'].map((text, idx) => (
            <div key={idx} className="flex flex-col">
               <div className="bg-gray-50 p-3 text-center font-bold text-gray-700 border-b border-gray-200">{text}</div>
               <div className="bg-gray-100 aspect-video flex items-center justify-center relative overflow-hidden group cursor-pointer">
                  {/* Cross lines to simulate wireframe placeholder */}
                  <div className="absolute inset-0 border-t border-l border-r border-b border-gray-200">
                      <svg className="w-full h-full text-gray-300" preserveAspectRatio="none" viewBox="0 0 100 100">
                          <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5"/>
                          <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5"/>
                      </svg>
                  </div>
                  <Link to="/category/all" className="z-10 bg-white/80 px-4 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">浏览</Link>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;