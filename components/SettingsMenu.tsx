import React from 'react';
import { 
  User, 
  CreditCard, 
  Shield, 
  Database, 
  Bell, 
  Settings as SettingsIcon, 
  HelpCircle, 
  MessageSquare, 
  ChevronRight,
  BarChart3,
  PieChart
} from 'lucide-react';
import { SettingsItem } from '../types';

const menuItems: SettingsItem[] = [
  { id: 'profile', label: 'Personal Profile', icon: User },
  { id: 'statistics', label: 'Usage Statistics', icon: BarChart3 },
  { id: 'habits', label: 'Usage Habits', icon: PieChart },
  { id: 'subscription', label: 'Account & Subscription', icon: CreditCard },
  { id: 'privacy', label: 'Privacy & Security', icon: Shield },
  { id: 'data', label: 'Data Management', icon: Database },
  { id: 'notifications', label: 'Notification Settings', icon: Bell },
  { id: 'general', label: 'General Settings', icon: SettingsIcon },
  { id: 'help', label: 'Help Center', icon: HelpCircle },
  { id: 'feedback', label: 'Feedback & Suggestions', icon: MessageSquare },
];

interface SettingsMenuProps {
  onItemClick: (id: string) => void;
}

export const SettingsMenu: React.FC<SettingsMenuProps> = ({ onItemClick }) => {
  return (
    <div className="pb-8 pt-2">
      <h3 className="text-lg font-bold text-gray-900 mb-4 px-1 flex items-center gap-2">
        <SettingsIcon className="w-5 h-5 text-primary-600" />
        Settings
      </h3>
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {menuItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors active:bg-gray-100 ${
              index !== menuItems.length - 1 ? 'border-b border-gray-50' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
                <item.icon size={18} />
              </div>
              <span className="text-gray-700 font-medium text-sm sm:text-base">{item.label}</span>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </button>
        ))}
      </div>
    </div>
  );
};