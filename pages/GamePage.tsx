import React from 'react';
import { Gamepad2, Play, Star } from 'lucide-react';

const GAMES = [
  { id: 1, name: "大鱼吃小鱼", image: "https://picsum.photos/100/100?random=801" },
  { id: 2, name: "植物大作战", image: "https://picsum.photos/100/100?random=802" },
  { id: 3, name: "单机冒险岛", image: "https://picsum.photos/100/100?random=803" },
  { id: 4, name: "我的世界下载", image: "https://picsum.photos/100/100?random=804" },
  { id: 5, name: "合金弹头2", image: "https://picsum.photos/100/100?random=805" },
  { id: 6, name: "无敌流浪汉2", image: "https://picsum.photos/100/100?random=806" },
  { id: 7, name: "杂交植物大战", image: "https://picsum.photos/100/100?random=807" },
  { id: 8, name: "果蔬连连看", image: "https://picsum.photos/100/100?random=808" },
  { id: 9, name: "宿命之下", image: "https://picsum.photos/100/100?random=809" },
  { id: 10, name: "欢乐麻将", image: "https://picsum.photos/100/100?random=810" },
  { id: 11, name: "纸牌接龙", image: "https://picsum.photos/100/100?random=811" },
  { id: 12, name: "跳一跳", image: "https://picsum.photos/100/100?random=812" },
  { id: 13, name: "斗地主", image: "https://picsum.photos/100/100?random=813" },
  { id: 14, name: "只有一道门", image: "https://picsum.photos/100/100?random=814" },
  { id: 15, name: "狙击小日本2", image: "https://picsum.photos/100/100?random=815" },
  { id: 16, name: "狂扁小朋友", image: "https://picsum.photos/100/100?random=816" },
  { id: 17, name: "Q版泡泡堂", image: "https://picsum.photos/100/100?random=817" },
  { id: 18, name: "切水果3D版", image: "https://picsum.photos/100/100?random=818" },
  { id: 19, name: "红蓝岛", image: "https://picsum.photos/100/100?random=819" },
  { id: 20, name: "森林冰火人", image: "https://picsum.photos/100/100?random=820" },
];

const GamePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-500">
      {/* Simple Header */}
      <div className="border-b border-gray-200 py-6 bg-gray-50">
        <div className="container mx-auto max-w-[1200px] px-4">
             <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                 <Gamepad2 className="text-[#CFB672]" /> DNF周边小游戏中心
             </h1>
             <p className="text-gray-500 text-sm mt-1">
                 重温经典，休闲娱乐，积分兑换好礼
             </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-[1200px] px-4 py-8">
          
          {/* Featured/Top Section (Simulating the top row of images in reference if needed, but sticking to grid mostly) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {GAMES.slice(0, 4).map(game => (
                  <div key={`feat-${game.id}`} className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all">
                      <img src={game.image} className="w-full h-full object-cover" alt={game.name} />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <Play className="text-white w-12 h-12 opacity-80 group-hover:scale-110 transition-transform" fill="white"/>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white font-bold text-sm">
                          {game.name}
                      </div>
                  </div>
              ))}
          </div>

          <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-2">
              <span className="font-bold text-[#CFB672] border-b-2 border-[#CFB672] pb-2 px-2">热门推荐</span>
              <span className="text-gray-500 hover:text-gray-800 cursor-pointer px-2">动作冒险</span>
              <span className="text-gray-500 hover:text-gray-800 cursor-pointer px-2">益智休闲</span>
              <span className="text-gray-500 hover:text-gray-800 cursor-pointer px-2">策略塔防</span>
          </div>

          {/* The Main Grid */}
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-8">
              {GAMES.map((game) => (
                  <div key={game.id} className="flex flex-col items-center group cursor-pointer">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-sm border border-gray-200 group-hover:shadow-lg group-hover:border-[#CFB672] transition-all relative">
                          <img src={game.image} className="w-full h-full object-cover" alt={game.name} />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                              <div className="bg-[#CFB672] text-white text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                  Play
                              </div>
                          </div>
                      </div>
                      <div className="mt-2 text-center">
                          <h3 className="text-sm text-gray-700 font-medium line-clamp-1 group-hover:text-[#CFB672] transition-colors">
                              {game.name}
                          </h3>
                          <div className="flex justify-center mt-1">
                              {[1,2,3,4,5].map(i => (
                                  <Star key={i} size={8} className="text-yellow-400 fill-yellow-400" />
                              ))}
                          </div>
                      </div>
                  </div>
              ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
              <button className="bg-gray-100 text-gray-600 px-8 py-2 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium">
                  加载更多游戏
              </button>
          </div>
      </div>
    </div>
  );
};

export default GamePage;