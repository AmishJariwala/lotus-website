import React from 'react';
import FeatureHighlight from '../FeatureHighlight';

const NaturalLanguageFeature: React.FC = () => {
  return (
    <FeatureHighlight
      title="Log Workouts & Meals Just by Talking"
      description="No more tedious data entry. Simply chat with Lotus AI and tell it what you did or ate. The AI understands natural language and logs everything accurately."
      imageSide="right"
    >
      <li>Effortless logging through natural conversation</li>
      <li>AI understands exercise variations and food items</li>
      <li>Save time with quick voice-to-text input</li>
      
      {/* Phone mockup */}
      <div className="relative w-full max-w-[280px]">
        {/* Phone Frame */}
        <div className="bg-dark-lighter rounded-[40px] overflow-hidden shadow-2xl border border-gray-700 aspect-[402/874] relative w-full">
          {/* Status bar */}
          <div className="bg-dark-darker h-6 w-full flex justify-between items-center px-6">
            <div className="text-xs text-gray-400">9:41</div>
            <div className="flex space-x-2">
              <div className="w-4 h-3 rounded-sm bg-gray-400"></div>
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            </div>
          </div>
          
          {/* App content - Chat interface with workout logging */}
          <div className="h-[calc(100%-6rem)] overflow-hidden">
            <div className="h-full bg-dark p-3">
              {/* Chat messages */}
              <div className="mb-3 flex justify-end">
                <div className="bg-primary-light text-dark rounded-2xl px-4 py-2 max-w-[80%]">
                  <p className="text-sm">I did bench press 3x10 with 135lbs today</p>
                </div>
              </div>
              <div className="mb-3 flex justify-start">
                <div className="bg-dark-lighter rounded-2xl px-4 py-2 max-w-[80%]">
                  <p className="text-white text-sm">Great job! I've logged your bench press workout:</p>
                  <div className="mt-2 bg-dark-darker rounded-lg p-2">
                    <p className="text-xs text-white font-medium">Bench Press</p>
                    <p className="text-xs text-gray-400">3 sets × 10 reps</p>
                    <p className="text-xs text-gray-400">135 lbs</p>
                  </div>
                  <p className="text-white text-sm mt-2">Would you like to add another exercise?</p>
                </div>
              </div>
              <div className="mb-3 flex justify-end">
                <div className="bg-primary-light text-dark rounded-2xl px-4 py-2 max-w-[80%]">
                  <p className="text-sm">Yes, I also did pull-ups 3 sets of 8 reps</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom tab bar */}
          <div className="h-16 bg-dark-darker border-t border-gray-700 flex justify-around items-center px-2 absolute bottom-0 w-full">
            <div className="text-primary-light flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-xs mt-1">Chat</span>
            </div>
            <div className="text-gray-500 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="text-xs mt-1">Workout</span>
            </div>
            <div className="text-gray-500 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-xs mt-1">Progress</span>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-primary-light/20 rounded-full blur-xl"></div>
        <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-primary/30 rounded-full blur-xl"></div>
      </div>
    </FeatureHighlight>
  );
};

export default NaturalLanguageFeature;
