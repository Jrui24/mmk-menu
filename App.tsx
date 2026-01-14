import React, { useState } from 'react';
import { Menu, X, CheckCircle2, Plus, ChevronLeft } from 'lucide-react';
import { ProfileCard } from './components/ProfileCard';
import { StatisticsCard } from './components/StatisticsCard';
import { UsageHabitsCard } from './components/UsageHabitsCard';
import { SettingsMenu } from './components/SettingsMenu';

type ViewState = 'main' | 'statistics' | 'habits';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [currentView, setCurrentView] = useState<ViewState>('main');

  // Toggle drawer and reset view when closing
  const toggleMenu = () => {
    if (isMenuOpen) {
      setTimeout(() => setCurrentView('main'), 300);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (id: string) => {
    if (id === 'statistics') setCurrentView('statistics');
    else if (id === 'habits') setCurrentView('habits');
    else console.log(`Clicked ${id}`);
  };

  const goBack = () => setCurrentView('main');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-0 sm:p-4 font-sans">
      
      {/* Mobile Device Container/Simulation */}
      <div className="w-full max-w-md bg-white h-[100vh] sm:h-[850px] sm:rounded-[40px] shadow-2xl overflow-hidden relative border-[8px] border-gray-900 sm:border-gray-800">
        
        {/* Dynamic Notch (Aesthetic only) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50 hidden sm:block"></div>

        {/* --- Main App Background Content (Placeholder to show layer depth) --- */}
        <div className={`h-full w-full bg-gray-50 flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? 'scale-95 opacity-50 origin-right brightness-75' : ''}`}>
          
          {/* Header */}
          <header className="px-6 pt-14 pb-4 flex justify-between items-center bg-white border-b border-gray-100">
             <button onClick={toggleMenu} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
               <Menu size={24} className="text-gray-800" />
             </button>
             <h1 className="text-lg font-bold">My Tasks</h1>
             <div className="w-8 h-8 rounded-full bg-purple-100 border border-purple-200" />
          </header>

          {/* Dummy Content */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
             {[1, 2, 3, 4, 5].map((i) => (
               <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 opacity-60">
                 <CheckCircle2 className="text-gray-300" />
                 <div className="h-2 w-32 bg-gray-200 rounded"></div>
               </div>
             ))}
          </div>

          {/* FAB */}
          <button className="absolute bottom-8 right-8 w-14 h-14 bg-purple-600 rounded-full shadow-lg shadow-purple-300 flex items-center justify-center text-white">
            <Plus size={28} />
          </button>
        </div>

        {/* --- Sidebar / Drawer Menu --- */}
        {/* Overlay */}
        {isMenuOpen && (
          <div 
            className="absolute inset-0 bg-black/30 z-20 backdrop-blur-[1px] transition-opacity"
            onClick={toggleMenu}
          />
        )}

        {/* Drawer Content */}
        {/* Changed width to w-3/4 (75%) as requested */}
        <div className={`absolute top-0 left-0 h-full w-3/4 bg-[#F8F9FE] z-30 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          
          {/* Scrollable Area */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-5 no-scrollbar pb-20 pt-14 sm:pt-16">
            
            {/* Dynamic Header Area */}
            <div className="mb-6 flex items-center justify-between">
               {currentView === 'main' ? (
                 <>
                   <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
                   <button onClick={toggleMenu} className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100">
                      <X size={20} className="text-gray-500" />
                   </button>
                 </>
               ) : (
                 <>
                   <button onClick={goBack} className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100 flex items-center gap-1 pr-3">
                      <ChevronLeft size={20} className="text-gray-600" />
                      <span className="text-sm font-semibold text-gray-600">Back</span>
                   </button>
                   <span className="text-lg font-bold text-gray-900">
                     {currentView === 'statistics' ? 'Statistics' : 'Habits'}
                   </span>
                   <div className="w-10"></div> {/* Spacer for alignment */}
                 </>
               )}
            </div>

            {/* Content Rendering based on View */}
            {currentView === 'main' && (
              <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                <ProfileCard 
                  user={{
                    name: 'Zhang San',
                    profession: 'Management Consultant',
                    isPro: false
                  }}
                />
                <SettingsMenu onItemClick={handleMenuClick} />
              </div>
            )}

            {currentView === 'statistics' && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <StatisticsCard />
              </div>
            )}

            {currentView === 'habits' && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <UsageHabitsCard />
              </div>
            )}
            
            {currentView === 'main' && (
              <div className="text-center text-xs text-gray-300 pb-6 mt-4">
                Version 2.4.0 • Insight App
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;