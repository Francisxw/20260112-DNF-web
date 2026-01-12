import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, ChevronDown, Menu, X } from 'lucide-react';
import AnnouncementBar from './AnnouncementBar';
import { CATEGORIES } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
    setIsCategoryOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsCategoryOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsCategoryOpen(false);
    }, 150);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F8FF]">
      {/* Top Utility Bar */}
      <div className="bg-white border-b border-gray-100 text-gray-500 text-xs py-2">
        <div className="container mx-auto max-w-[1200px] px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <span className="hover:text-blue-500 cursor-pointer">手机商城</span>
            <span className="hover:text-blue-500 cursor-pointer">周边公告</span>
          </div>
          <div className="flex space-x-6">
            <div className="hover:text-blue-500 cursor-pointer flex items-center gap-1">
              <User size={12} /> 登录 / 注册
            </div>
            <div className="hover:text-blue-500 cursor-pointer flex items-center gap-1">
              <ShoppingCart size={12} /> 购物车 (0)
            </div>
            <div className="hover:text-blue-500 cursor-pointer">我的订单</div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-tighter italic text-[#4A90E2] flex flex-col leading-none">
              <span>GAME</span>
              <span className="text-sm font-normal tracking-widest uppercase text-gray-400">Merch Mall</span>
            </Link>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-12 relative">
              <input 
                type="text" 
                placeholder="搜索周边商品..." 
                className="w-full border border-gray-200 bg-gray-50 pl-4 pr-10 py-2 rounded-full focus:border-blue-400 focus:bg-white outline-none transition-all"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>

            {/* Main Nav Links (Right aligned mostly) */}
            <div className="hidden md:flex items-center space-x-2 font-medium text-sm">
               {/* Categories Trigger */}
               <div 
                className="relative h-20 flex items-center px-4 hover:bg-blue-50 cursor-pointer border-b-2 border-transparent hover:border-blue-500"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-bold">
                  全部商品 <ChevronDown size={14} />
                </div>
              </div>
              
              <Link to="/" className="h-20 flex items-center px-4 text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500 transition-colors">首页</Link>
              
              {/* Disabled Link: Props */}
              <span className="h-20 flex items-center px-4 text-gray-400 cursor-default">道具领取</span>

              <Link to="/figures" className="h-20 flex items-center px-4 text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500 transition-colors">手办一览</Link>
              
              <Link to="/category/community" className="h-20 flex items-center px-4 text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-500 transition-colors">玩家共创</Link>
              
              {/* Disabled Link: Account */}
              <span className="h-20 flex items-center px-4 text-gray-400 cursor-default">个人中心</span>
            </div>

            {/* Mobile Menu Toggle (simplified) */}
            <button className="md:hidden p-2 text-gray-600">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Full Width Dropdown */}
        {isCategoryOpen && (
          <div 
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container mx-auto max-w-[1200px] px-4 py-8 grid grid-cols-5 gap-6 text-gray-600">
              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="space-y-4">
                  <h3 
                    className="font-bold text-blue-600 text-base border-b border-gray-100 pb-2 cursor-pointer hover:text-blue-800"
                    onClick={() => handleCategoryClick(cat.id)}
                  >
                    {cat.name}
                  </h3>
                  <ul className="space-y-2">
                    {cat.subcategories.map((sub, idx) => (
                      <li key={idx} className="text-xs hover:text-blue-500 cursor-pointer transition-colors">
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Announcement */}
      <AnnouncementBar />

      {/* Content */}
      <main className="flex-1 w-full mx-auto">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-500 py-12 border-t border-gray-200">
        <div className="container mx-auto max-w-[1200px] px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-gray-900 font-bold mb-4">购物指南</h4>
            <ul className="space-y-2 text-sm">
              <li>帐号注册</li>
              <li>购物流程</li>
              <li>支付方式</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold mb-4">配送方式</h4>
            <ul className="space-y-2 text-sm">
              <li>配送说明</li>
              <li>运费标准</li>
              <li>验货签收</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold mb-4">售后服务</h4>
            <ul className="space-y-2 text-sm">
              <li>退换货政策</li>
              <li>退换货流程</li>
              <li>常见问题</li>
            </ul>
          </div>
          <div>
             <h4 className="text-gray-900 font-bold mb-4">关于我们</h4>
             <p className="text-sm">
               Copyright © 2025 Game Merch Mall. All Rights Reserved.
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;