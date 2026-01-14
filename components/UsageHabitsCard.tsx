import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Clock, Calendar, BarChart3, ArrowUpRight } from 'lucide-react';
import { ScenarioData } from '../types';

const data: ScenarioData[] = [
  { name: 'Meetings', value: 65, fill: '#8b5cf6' }, // Primary-500
  { name: 'Interviews', value: 20, fill: '#c4b5fd' }, // Primary-300
  { name: 'Inspiration', value: 15, fill: '#ede9fe' }, // Primary-100
];

export const UsageHabitsCard: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-900 font-bold text-lg flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary-500" />
          Usage Habits
        </h3>
        <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
          Weekly Analysis
        </span>
      </div>

      {/* Chart Section */}
      <div className="flex flex-row items-center justify-between mb-6">
        <div className="h-32 w-32 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={35}
                outerRadius={55}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip 
                 contentStyle={{ borderRadius: '12px', padding: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                 itemStyle={{ color: '#4b5563', fontSize: '12px', fontWeight: 600 }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs font-bold text-gray-400">Type</span>
          </div>
        </div>

        <div className="flex-1 pl-4 space-y-2">
           {data.map((item) => (
             <div key={item.name} className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.fill }}></div>
                 <span className="text-xs text-gray-500 font-medium">{item.name}</span>
               </div>
               <span className="text-xs font-bold text-gray-700">{item.value}%</span>
             </div>
           ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-2xl p-3">
          <div className="flex items-center gap-2 mb-1 text-gray-500">
            <Clock size={14} />
            <span className="text-xs font-medium">Active Hours</span>
          </div>
          <p className="text-xs text-gray-900 font-semibold leading-tight">Weekdays</p>
          <p className="text-[10px] text-gray-500">10-12am, 2-5pm</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-3">
          <div className="flex items-center gap-2 mb-1 text-gray-500">
             <Calendar size={14} />
            <span className="text-xs font-medium">Avg Session</span>
          </div>
          <p className="text-sm text-gray-900 font-bold">38 mins</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-3 col-span-2 flex items-center justify-between">
           <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium mb-1">Review Frequency</span>
              <span className="text-sm font-bold text-gray-900">3.2 times / week</span>
           </div>
           <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
             <ArrowUpRight size={16} />
           </div>
        </div>
      </div>
    </div>
  );
};