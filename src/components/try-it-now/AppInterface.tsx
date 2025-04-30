import { useState } from 'react';
import ChatTab from './ChatTab';
import WeightTab from './WeightTab';
import DietTab from './DietTab';
import WorkoutTab from './WorkoutTab';
import DownloadPrompt from './DownloadPrompt';

type Tab = 'chat' | 'weight' | 'diet' | 'workout';

const AppInterface = () => {
  const [activeTab, setActiveTab] = useState<Tab>('chat');
  const [showDownloadPrompt, setShowDownloadPrompt] = useState(false);
  const [promptFeature, setPromptFeature] = useState<'workout' | 'diet' | 'weight'>('workout');

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  const handleShowDownloadPrompt = (feature: 'workout' | 'diet' | 'weight' = 'workout') => {
    setPromptFeature(feature);
    setShowDownloadPrompt(true);
  };

  const closeDownloadPrompt = () => {
    setShowDownloadPrompt(false);
  };

  return (
    <div className="w-full sm:max-w-[320px] md:max-w-[360px] mx-auto">
      {/* Phone frame - fixed aspect ratio with responsive sizing */}
      <div className="bg-dark-lighter rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border border-gray-700 aspect-[402/874] relative w-full">
        {/* Status bar - fixed height */}
        <div className="bg-dark-darker h-8 w-full flex justify-between items-center px-6 absolute top-0 left-0 right-0 z-10">
          <div className="text-sm text-gray-400">9:41</div>
          <div className="flex space-x-2">
            <div className="w-4 h-3 rounded-sm bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          </div>
        </div>

        {/* App content - fixed position container */}
        <div className="absolute top-8 bottom-16 left-0 right-0 overflow-hidden">
          {/* Each tab takes up the full container */}
          {activeTab === 'chat' && <ChatTab onAction={() => {}} />}
          {activeTab === 'weight' && <WeightTab onAction={() => handleShowDownloadPrompt('weight')} />}
          {activeTab === 'diet' && <DietTab onAction={() => handleShowDownloadPrompt('diet')} />}
          {activeTab === 'workout' && <WorkoutTab onStartWorkout={() => handleShowDownloadPrompt('workout')} />}
        </div>

        {/* Tab bar */}
        <div className="h-16 bg-dark-darker border-t border-gray-700 flex justify-around items-center px-2 absolute bottom-0 w-full">
          <button
            onClick={() => handleTabChange('chat')}
            className={`flex flex-col items-center justify-center w-20 h-full ${activeTab === 'chat' ? 'text-primary-light' : 'text-gray-400'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-sm mt-1">Chat</span>
          </button>
          <button
            onClick={() => handleTabChange('weight')}
            className={`flex flex-col items-center justify-center w-20 h-full ${activeTab === 'weight' ? 'text-primary-light' : 'text-gray-400'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-sm mt-1">Weight</span>
          </button>
          <button
            onClick={() => handleTabChange('diet')}
            className={`flex flex-col items-center justify-center w-20 h-full ${activeTab === 'diet' ? 'text-primary-light' : 'text-gray-400'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
            <span className="text-sm mt-1">Diet</span>
          </button>
          <button
            onClick={() => handleTabChange('workout')}
            className={`flex flex-col items-center justify-center w-20 h-full ${activeTab === 'workout' ? 'text-primary-light' : 'text-gray-400'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-sm mt-1">Workout</span>
          </button>
        </div>
      </div>

      {/* Download prompt */}
      {showDownloadPrompt && (
        <DownloadPrompt
          onClose={closeDownloadPrompt}
          feature={promptFeature}
        />
      )}
    </div>
  );
};

export default AppInterface;
