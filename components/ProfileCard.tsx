import React, { useState } from 'react';
import { Edit2, Sparkles, Check, X } from 'lucide-react';
import { UserProfile } from '../types';

interface ProfileCardProps {
  user: UserProfile;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);

  const handleSave = () => {
    setIsEditing(false);
    // Logic to save name would go here
  };

  return (
    <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-100 to-transparent rounded-bl-full opacity-50 -mr-8 -mt-8"></div>

      <div className="relative z-10 flex flex-col items-center sm:items-start sm:flex-row gap-5">
        
        {/* Avatar */}
        <div className="relative group">
          <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-2xl font-bold border-4 border-white shadow-md">
            {user.avatarUrl ? (
              <img src={user.avatarUrl} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
              name.charAt(0)
            )}
          </div>
          <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-sm border border-gray-100">
             <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col items-center sm:items-start pt-1">
          <div className="flex items-center gap-2 mb-1">
            {isEditing ? (
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-primary-200 rounded-lg px-2 py-1 text-lg font-bold text-gray-900 w-32 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  autoFocus
                />
                <button onClick={handleSave} className="p-1 hover:bg-green-50 text-green-600 rounded-full"><Check size={18} /></button>
                <button onClick={() => setIsEditing(false)} className="p-1 hover:bg-red-50 text-red-500 rounded-full"><X size={18} /></button>
              </div>
            ) : (
              <h2 
                className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-primary-700 transition-colors flex items-center gap-2 group"
                onClick={() => setIsEditing(true)}
              >
                {name}
                <Edit2 size={14} className="text-gray-300 group-hover:text-primary-400 opacity-0 group-hover:opacity-100 transition-all" />
              </h2>
            )}
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-primary-100">
              {user.profession}
            </span>
          </div>

          <button className="flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary-200 hover:shadow-xl hover:translate-y-[-1px] transition-all active:scale-95">
            <Sparkles size={16} />
            Upgrade Plan
          </button>
        </div>
      </div>
    </div>
  );
};