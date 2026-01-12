import React from 'react';
import { Heart, Camera, PenTool, Trophy, ChevronRight } from 'lucide-react';

const CommunityPage: React.FC = () => {
  // Mock data for the 4 sections
  const fanArts = [
    { id: 1, author: "画师A", image: "./images/DM_20260112153738_032.jpg", title: "冬日祭同人图" },
    { id: 2, author: "玩家B", image: "./images/DM_20260112153738_033.jpg", title: "全家福素描" },
    { id: 3, author: "C大大", image: "./images/DM_20260112153738_034.jpg", title: "像素风头像" },
  ];

  const rankings = [
    { id: 1, name: "阿狸", image: "./images/DM_20260112153738_035.jpg", votes: "1.2w 票" },
    { id: 2, name: "金克丝", image: "./images/DM_20260112153738_036.jpg", votes: "9800 票" },
    { id: 3, name: "亚索", image: "./images/DM_20260112153738_037.jpg", votes: "8500 票" },
  ];

  const wishes = [
    { id: 1, user: "User_001", image: "./images/DM_20260112153738_038.jpg", content: "希望能出这款的1/4雕像！" },
    { id: 2, user: "User_002", image: "./images/DM_20260112153738_039.jpg", content: "许愿复刻S8冠军服饰" },
    { id: 3, user: "User_003", image: "./images/DM_20260112153738_040.jpg", content: "想要更多像素风周边" },
  ];

  const feedbacks = [
    { id: 1, user: "买家秀1", image: "./images/DM_20260112153738_041.jpg", comment: "做工真的很精细，爱了" },
    { id: 2, user: "买家秀2", image: "./images/DM_20260112153738_042.jpg", comment: "摆在桌上太好看了" },
    { id: 3, user: "买家秀3", image: "./images/DM_20260112153738_043.jpg", comment: "物流很快，包装完好" },
  ];

  const SectionHeader = ({ title, icon: Icon }: { title: string; icon: any }) => (
    <div className="border border-gray-300 bg-white py-6 mb-6 text-center shadow-sm relative overflow-hidden group">
       <div className="absolute top-0 left-0 w-2 h-full bg-[#CFB672]"></div>
       <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-3">
         <Icon className="text-[#CFB672]" size={28} />
         {title}
       </h2>
       <div className="absolute bottom-2 right-4 text-gray-400 text-xs flex items-center gap-1 cursor-pointer hover:text-[#CFB672]">
          查看全部 <ChevronRight size={12}/>
       </div>
    </div>
  );

  return (
    <div className="bg-[#f9f9f9] min-h-screen py-12 animate-in fade-in duration-500">
      <div className="container mx-auto max-w-[1200px] px-4">
        
        {/* Main Page Title */}
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-gray-800 px-12 py-4 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
            <h1 className="text-3xl font-black tracking-widest text-gray-900">玩家共创</h1>
          </div>
        </div>

        {/* Section 1: Fan Art */}
        <div className="mb-16">
          <SectionHeader title="玩家二创立绘" icon={PenTool} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fanArts.map((item) => (
              <div key={item.id} className="bg-white p-2 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-3 relative group">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-xs translate-y-full group-hover:translate-y-0 transition-transform">
                      作者: {item.author}
                  </div>
                </div>
                <div className="text-center font-bold text-gray-700">{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Rankings */}
        <div className="mb-16">
          <SectionHeader title="玩家喜爱人物榜单" icon={Trophy} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rankings.map((item, index) => (
              <div key={item.id} className="relative bg-white shadow-sm border border-gray-100 p-4 flex flex-col items-center">
                 {/* Rank Badge */}
                 <div className={`absolute -top-3 -left-3 w-10 h-10 flex items-center justify-center rounded-full text-white font-bold shadow-md
                    ${index === 0 ? 'bg-yellow-400 text-xl' : index === 1 ? 'bg-gray-400 text-lg' : 'bg-orange-400 text-lg'}
                 `}>
                    {index + 1}
                 </div>
                 <div className="w-full aspect-video overflow-hidden mb-4 bg-gray-50">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                 </div>
                 <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                 <span className="text-red-500 font-medium text-sm">🔥 {item.votes}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Wishing Well */}
        <div className="mb-16">
          <SectionHeader title="玩家许愿池" icon={Heart} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wishes.map((item) => (
               <div key={item.id} className="bg-white border border-dashed border-gray-300 p-4 hover:border-[#CFB672] transition-colors relative">
                   <div className="aspect-[4/3] mb-4 bg-gray-50 overflow-hidden">
                       <img src={item.image} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Wish" />
                   </div>
                   <p className="text-gray-600 text-sm mb-3 font-serif italic">“ {item.content} ”</p>
                   <div className="text-right text-xs text-gray-400">—— {item.user}</div>
               </div>
            ))}
          </div>
        </div>

        {/* Section 4: Feedback */}
        <div className="mb-12">
          <SectionHeader title="玩家实拍反馈" icon={Camera} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feedbacks.map((item) => (
               <div key={item.id} className="bg-white p-3 shadow-sm border border-gray-200">
                   <div className="aspect-square mb-3 overflow-hidden">
                       <img src={item.image} className="w-full h-full object-cover hover:scale-105 transition-transform" alt="Feedback" />
                   </div>
                   <div className="flex items-start gap-2">
                       <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                       <div>
                           <div className="text-xs font-bold text-gray-800 mb-1">{item.user}</div>
                           <p className="text-xs text-gray-500 leading-relaxed">{item.comment}</p>
                       </div>
                   </div>
               </div>
            ))}
          </div>
        </div>

        {/* Wireframe-style Buttons */}
        <div className="flex flex-col items-end gap-3 mt-8">
            <button className="border border-blue-400 text-blue-500 px-8 py-2 text-sm hover:bg-blue-50 transition-colors bg-white">
                点击加载
            </button>
            <button className="border border-blue-400 text-blue-500 px-8 py-2 text-sm hover:bg-blue-50 transition-colors bg-white">
                行页数
            </button>
        </div>

      </div>
    </div>
  );
};

export default CommunityPage;