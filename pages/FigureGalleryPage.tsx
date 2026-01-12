import React, { useState } from 'react';
import { ShoppingCart, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data specific to this page to match the screenshot
const FIGURE_LIST = [
  { id: 101, name: '海克斯科技亚龙手办', image: 'https://nb-stor.s3.us-east-1.amazonaws.com/chat-attachments/2025/01/21/f0c32607-b3e3-4411-9257-190696956795/image.png' }, 
  { id: 102, name: '灵魂莲华 提莫手办', image: 'https://picsum.photos/200/200?random=102' },
  { id: 103, name: '纳财大帝 塔姆 手办', image: 'https://picsum.photos/200/200?random=103' },
  { id: 104, name: '双城之战 金克丝手办', image: 'https://picsum.photos/200/200?random=104' },
  { id: 105, name: '神龙尊者 苍龙艾希 手办', image: 'https://picsum.photos/200/200?random=105' },
  { id: 106, name: '青花瓷 拉克丝手办', image: 'https://picsum.photos/200/200?random=106' },
  { id: 107, name: '星之守护者 卡莎手办', image: 'https://picsum.photos/200/200?random=107' },
  { id: 108, name: '冠军纳什男爵XL手办', image: 'https://picsum.photos/200/200?random=108' },
  { id: 109, name: '咖啡甜心 格温 炫彩手办', image: 'https://picsum.photos/200/200?random=109' },
  { id: 110, name: '幻灵战斗队长 厄运小姐 手办', image: 'https://picsum.photos/200/200?random=110' },
  { id: 111, name: '太空律动 布里茨 XL手办', image: 'https://picsum.photos/200/200?random=111' },
  { id: 112, name: '觅心猫猫 悠米 手办', image: 'https://picsum.photos/200/200?random=112' },
  { id: 113, name: '觅心猫猫 悠米 就想粘你', image: 'https://picsum.photos/200/200?random=113' },
  { id: 114, name: '觅心猫猫 悠米 月色真美', image: 'https://picsum.photos/200/200?random=114' },
  { id: 115, name: '星之守护者 璐璐 手办', image: 'https://picsum.photos/200/200?random=115' },
];

const FigureGalleryPage: React.FC = () => {
  const [selectedGen, setSelectedGen] = useState('第四代手办');

  return (
    <div className="bg-white min-h-screen pb-12 animate-in fade-in duration-500 font-sans">
      
      {/* 1. Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white overflow-hidden h-auto md:h-[500px]">
        {/* Pattern Background Overlay */}
        <div className="absolute inset-0 opacity-5" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' 
        }}></div>
        
        <div className="container mx-auto max-w-[1200px] h-full flex flex-col md:flex-row items-center relative z-10 px-4 py-8 md:py-0">
            {/* Left Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
                <img 
                    src="https://nb-stor.s3.us-east-1.amazonaws.com/chat-attachments/2025/01/21/f0c32607-b3e3-4411-9257-190696956795/image.png" 
                    alt="Featured Figure" 
                    className="max-h-[300px] md:max-h-[400px] object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.2)] animate-in slide-in-from-left-8 duration-700"
                />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
                {/* Logo */}
                <div className="mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#C99A2C] italic">英雄联盟</h1>
                    <h2 className="text-xs md:text-sm tracking-[0.5em] text-[#C99A2C] uppercase mt-1">League of Legends</h2>
                </div>

                <div className="mb-4 flex items-center justify-center md:justify-start gap-2">
                    <span className="text-gray-400 text-lg md:text-xl font-medium">#30</span>
                    <span className="text-white text-lg md:text-xl font-bold">★ 限定</span>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold mb-4 border-b border-[#C99A2C] pb-4 inline-block md:pr-12">
                    海克斯科技亚龙手办
                </h3>

                <p className="text-gray-400 text-xs md:text-sm mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                    海克斯亚龙可绝非浪得虚名，她的魔力来自海克斯科技增强体，可以制造海克斯飞门，让玩家在峡谷中折跃穿梭。
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <button className="bg-[#00A57C] hover:bg-[#008f6b] text-white px-8 py-3 font-medium flex items-center justify-center gap-2 transition-colors rounded-sm">
                        <ShoppingCart size={20} /> 加入购物车
                    </button>
                    <button className="bg-[#F23232] hover:bg-[#d61c1c] text-white px-12 py-3 font-medium transition-colors rounded-sm">
                        前往购买
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* 2. Filter Bar */}
      <div className="bg-[#fcfcfc] border-b border-gray-200 py-4 shadow-sm relative z-20">
          <div className="container mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex-1 flex justify-center md:justify-center w-full md:w-auto">
                  <div className="relative inline-block w-64">
                      <select 
                        value={selectedGen}
                        onChange={(e) => setSelectedGen(e.target.value)}
                        className="appearance-none w-full bg-[#efefef] hover:bg-[#e5e5e5] border-none text-gray-800 font-bold py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white text-center cursor-pointer transition-colors"
                      >
                          <option>第一代手办</option>
                          <option>第二代手办</option>
                          <option>第三代手办</option>
                          <option>第四代手办</option>
                          <option>第五代手办</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-600">
                          <ChevronDown size={16} strokeWidth={3} />
                      </div>
                  </div>
              </div>
              <div className="w-full md:w-auto text-center">
                  <Link to="/login" className="flex items-center justify-center text-gray-600 hover:text-[#C99A2C] text-sm font-medium gap-1 transition-colors">
                      <ChevronRight size={16} /> 点击登录 查看我拥有哪些手办
                  </Link>
              </div>
          </div>
      </div>

      {/* 3. Grid Section */}
      <div className="container mx-auto max-w-[1200px] px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12">
              {FIGURE_LIST.map((item) => (
                  <Link to={`/product/${item.id}`} key={item.id} className="flex flex-col items-center group cursor-pointer">
                      <div className="aspect-square w-full mb-4 flex items-center justify-center relative p-2">
                           {/* Hover effect to slightly lift image */}
                           <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-contain transition-transform duration-300 group-hover:-translate-y-2 drop-shadow-sm filter contrast-105" 
                           />
                      </div>
                      <h4 className="text-xs font-bold text-gray-800 text-center px-2 group-hover:text-[#C99A2C] transition-colors leading-relaxed line-clamp-2 min-h-[2.5em]">
                          {item.name}
                      </h4>
                  </Link>
              ))}
          </div>
          
          {/* Pagination Placeholder */}
          <div className="mt-12 flex justify-center">
               <button className="text-xs text-gray-400 hover:text-[#C99A2C] flex items-center gap-1 transition-colors">
                   查看更多历史系列 <ChevronRight size={12}/>
               </button>
          </div>
      </div>

    </div>
  );
};

export default FigureGalleryPage;