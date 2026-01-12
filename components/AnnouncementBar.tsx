import React from 'react';
import { Volume2 } from 'lucide-react';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#111] h-10 flex items-center border-b border-[#333] relative overflow-hidden text-gray-300">
      <div className="container mx-auto px-4 flex items-center h-full relative z-10 max-w-[1200px]">
        <div className="flex items-center text-[#C99A2C] font-bold mr-4 shrink-0 bg-[#111] pr-4 z-20 h-full">
          <Volume2 size={16} className="mr-2" />
          <span>公告</span>
        </div>
        
        <div className="flex-1 overflow-hidden relative h-full flex items-center">
          {/* Using a custom marquee implementation for smooth scrolling */}
          <div className="animate-marquee whitespace-nowrap absolute text-gray-400 text-sm hover:paused cursor-pointer hover:text-white transition-colors">
            <span className="mr-24">【新春活动】全场满299减50，上不封顶！春节期间正常发货。</span>
            <span className="mr-24">【新品预告】2025赛季S15纪念周边即将上线，敬请期待！</span>
            <span className="mr-24">【系统维护】将于本周四凌晨2:00-4:00进行系统维护，期间无法下单。</span>
            <span className="mr-24">【发货通知】受天气影响，部分地区物流时效可能延长。</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;