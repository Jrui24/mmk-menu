import React from 'react';
import { Mic, Layers, MessageSquare, CalendarDays, Timer } from 'lucide-react';

const StatItem = ({ label, value, icon: Icon, colorClass }: { label: string; value: string; icon: any; colorClass: string }) => (
  <div className="flex flex-col p-3 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
    <div className={`w-8 h-8 rounded-full ${colorClass} bg-opacity-10 flex items-center justify-center mb-2`}>
      <Icon size={16} className={colorClass.replace('bg-', 'text-')} />
    </div>
    <span className="text-lg font-bold text-gray-900 leading-none mb-1">{value}</span>
    <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">{label}</span>
  </div>
);

export const StatisticsCard: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-900 font-bold text-lg">Account Statistics</h3>
        <span className="text-xs text-gray-400">Updated today</span>
      </div>
      
      {/* Hero Stat */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-4 mb-4 text-white relative overflow-hidden shadow-md shadow-primary-200">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Timer size={80} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2 opacity-90">
            <Timer size={16} />
            <span className="text-xs font-medium">Total Duration</span>
          </div>
          <div className="text-2xl font-bold tracking-tight">127<span className="text-base font-normal opacity-80 ml-1">h</span> 38<span className="text-base font-normal opacity-80 ml-1">m</span></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <StatItem 
          label="Recordings" 
          value="342" 
          icon={Mic} 
          colorClass="bg-blue-500 text-blue-500" 
        />
        <StatItem 
          label="AI Chats" 
          value="1,245" 
          icon={MessageSquare} 
          colorClass="bg-purple-500 text-purple-500" 
        />
        <StatItem 
          label="Tasks" 
          value="23" 
          icon={Layers} 
          colorClass="bg-orange-500 text-orange-500" 
        />
        <div className="flex flex-col justify-center p-3">
          <div className="flex items-center gap-2 text-gray-400 mb-1">
            <CalendarDays size={14} />
            <span className="text-xs">Joined</span>
          </div>
          <span className="text-xs font-semibold text-gray-700">March 15, 2024</span>
        </div>
      </div>
    </div>
  );
};