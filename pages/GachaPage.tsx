import React from 'react';
import { ShoppingCart, Heart, ChevronRight } from 'lucide-react';

const BLIND_BOX_SERIES = [
  {
    id: 1,
    title: "间谍过家家 SPY×FAMILY 毛绒系列",
    subtitle: "全6款 + 隐藏款1款",
    price: 59,
    image: "https://picsum.photos/800/400?random=501",
    theme: "bg-[#FFF8E1]", // Light Yellow
    tags: ["新品", "热销"]
  },
  {
    id: 2,
    title: "奥特曼 英雄传泽塔 变身器系列",
    subtitle: "光之巨人 变身道具收藏",
    price: 49,
    image: "https://picsum.photos/800/400?random=502",
    theme: "bg-[#E3F2FD]", // Light Blue
    tags: ["限定"]
  },
  {
    id: 3,
    title: "园艺大师 哆啦A梦 植绒手办",
    subtitle: "治愈系桌面摆件",
    price: 69,
    image: "https://picsum.photos/800/400?random=503",
    theme: "bg-[#E8F5E9]", // Light Green
    tags: ["现货"]
  },
  {
    id: 4,
    title: "名侦探柯南 日常系列",
    subtitle: "真相只有一个！",
    price: 59,
    image: "https://picsum.photos/800/400?random=504",
    theme: "bg-[#FFEBEE]", // Light Red
    tags: ["人气"]
  }
];

const GachaPage: React.FC = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen pb-12 animate-in fade-in duration-500">
      {/* Header Banner */}
      <div className="bg-[#FFD54F] py-8 mb-8 border-b-4 border-[#FFA000]">
         <div className="container mx-auto max-w-[1200px] px-4 flex items-center justify-between">
             <div>
                 <h1 className="text-3xl font-black text-[#5D4037] italic tracking-tighter mb-2">
                     盲盒集结令
                 </h1>
                 <p className="text-[#795548] font-bold bg-white/50 px-4 py-1 rounded-full inline-block">
                     收录全网最热IP · 隐藏款概率UP
                 </p>
             </div>
             <div className="hidden md:block text-6xl">🎁</div>
         </div>
      </div>

      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Featured Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {BLIND_BOX_SERIES.map((series) => (
                <div key={series.id} className={`${series.theme} rounded-xl border-2 border-white shadow-lg overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
                    {/* Header Strip */}
                    <div className="p-4 flex justify-between items-start relative z-10">
                        <div className="flex gap-2">
                            {series.tags.map(tag => (
                                <span key={tag} className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Heart className="text-gray-400 hover:text-red-500 transition-colors" />
                    </div>

                    {/* Image Area */}
                    <div className="px-6 pb-2 -mt-6">
                        <div className="aspect-[16/10] overflow-hidden rounded-lg border-4 border-white shadow-sm bg-white">
                            <img 
                                src={series.image} 
                                alt={series.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Info Area */}
                    <div className="p-5">
                        <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-1 group-hover:text-[#CFB672] transition-colors">
                            {series.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-4">{series.subtitle}</p>
                        
                        <div className="flex items-center justify-between bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                            <div className="flex items-baseline gap-1">
                                <span className="text-sm font-bold text-gray-600">惊喜价</span>
                                <span className="text-2xl font-black text-red-500">¥{series.price}</span>
                                <span className="text-xs text-gray-400">/个</span>
                            </div>
                            <button className="bg-[#333] text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-[#CFB672] transition-colors flex items-center gap-1">
                                <ShoppingCart size={14} /> 立即抽盒
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Catalog Grid for More Items */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#CFB672] rounded-full"></span>
                更多系列
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[1,2,3,4,5,6,7,8,9,10].map((i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-2 relative">
                            <img 
                                src={`https://picsum.photos/300/300?random=${600+i}`} 
                                className="w-full h-full object-cover" 
                                alt="Blind Box" 
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                查看详情
                            </div>
                        </div>
                        <div className="font-bold text-gray-800 text-sm line-clamp-1 group-hover:text-[#CFB672]">
                            神秘盲盒系列 Vol.{i}
                        </div>
                        <div className="text-red-500 font-bold text-sm">¥39 起</div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default GachaPage;