import React from 'react';
import FeatureHighlight from '../FeatureHighlight';

const NutritionFeature: React.FC = () => {
  return (
    <FeatureHighlight
      title="Smart Nutrition Tailored to You"
      description="Track your nutrition with ease. Lotus helps you monitor calories, macros, and eating patterns, providing personalized recommendations to support your fitness goals."
      imageSide="left"
    >
      <li>Simple macro and calorie tracking</li>
      <li>Personalized nutrition recommendations</li>
      <li>Meal suggestions based on your preferences</li>

      {/* Phone mockup */}
      <div className="relative w-full max-w-[280px]">
        {/* Phone Frame */}
        <div className="bg-dark-lighter rounded-[40px] overflow-hidden shadow-2xl border border-gray-700 aspect-[402/874] relative w-full">
          {/* Status bar */}
          <div className="bg-dark-darker h-6 w-full flex justify-between items-center px-6">
            <div className="text-xs text-gray-400">7:53</div>
            <div className="flex space-x-2">
              <div className="w-4 h-3 rounded-sm bg-gray-400"></div>
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            </div>
          </div>

          {/* App content - Diet Screen */}
          <div className="h-[calc(100%-6rem)] overflow-hidden">
            <div className="h-full bg-dark p-3">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-semibold text-xl">Diet</h3>
                <div className="flex items-center space-x-3">
                  <div className="text-primary-light">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>7:53 PM</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Apr 28</span>
                  </div>
                </div>
              </div>

              {/* Daily Nutrition */}
              <div className="bg-dark-lighter rounded-xl p-3 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="bg-primary-light/20 p-1 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                      </svg>
                    </div>
                    <h4 className="text-white text-base font-medium">Daily Nutrition</h4>
                  </div>
                  <div className="text-gray-400 text-sm">2620 / 2737 kcal</div>
                </div>

                {/* Nutrition circles */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 relative">
                      <svg viewBox="0 0 36 36" className="w-full h-full">
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#333" strokeWidth="2"></circle>
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#FF6B6B" strokeWidth="2" strokeDasharray="100 100" strokeDashoffset="4" strokeLinecap="round"></circle>
                        <text x="18" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">96</text>
                      </svg>
                    </div>
                    <div className="text-center mt-1">
                      <div className="text-white text-xs font-medium">Calories</div>
                      <div className="text-gray-400 text-xs">2620/2737</div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 relative">
                      <svg viewBox="0 0 36 36" className="w-full h-full">
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#333" strokeWidth="2"></circle>
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#4ECDC4" strokeWidth="2" strokeDasharray="100 100" strokeDashoffset="0" strokeLinecap="round"></circle>
                        <text x="18" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">100</text>
                      </svg>
                    </div>
                    <div className="text-center mt-1">
                      <div className="text-white text-xs font-medium">Protein</div>
                      <div className="text-gray-400 text-xs">304/139</div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 relative">
                      <svg viewBox="0 0 36 36" className="w-full h-full">
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#333" strokeWidth="2"></circle>
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#FFD166" strokeWidth="2" strokeDasharray="100 100" strokeDashoffset="56" strokeLinecap="round"></circle>
                        <text x="18" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">44</text>
                      </svg>
                    </div>
                    <div className="text-center mt-1">
                      <div className="text-white text-xs font-medium">Carbs</div>
                      <div className="text-gray-400 text-xs">155/354</div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 relative">
                      <svg viewBox="0 0 36 36" className="w-full h-full">
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#333" strokeWidth="2"></circle>
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#9D8DF1" strokeWidth="2" strokeDasharray="100 100" strokeDashoffset="0" strokeLinecap="round"></circle>
                        <text x="18" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">100</text>
                      </svg>
                    </div>
                    <div className="text-center mt-1">
                      <div className="text-white text-xs font-medium">Fat</div>
                      <div className="text-gray-400 text-xs">109/85</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="bg-dark-lighter rounded-xl p-2 sm:p-3 flex items-center">
                  <div className="text-primary-light mr-2 sm:mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium">Cook Book</span>
                </div>
                <div className="bg-primary-light rounded-xl p-2 sm:p-3 flex items-center justify-center">
                  <div className="text-dark mr-1 sm:mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="text-dark text-xs sm:text-sm font-medium">Log Meal</span>
                </div>
              </div>

              {/* Weather section */}
              <div className="bg-dark-lighter rounded-xl p-3 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="text-primary-light mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <h4 className="text-white text-base font-medium">Local Weather</h4>
                  </div>
                  <div className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-medium">Atlanta</div>
                      <div className="text-white text-xl font-semibold">78°F <span className="text-gray-400 text-sm">(Feels: 81°F)</span></div>
                      <div className="text-gray-400 text-xs">Partly cloudy</div>
                      <div className="text-gray-400 text-xs">Wind: 8.6 km/h SE</div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">7:53 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom tab bar */}
          <div className="h-16 bg-dark-darker border-t border-gray-700 flex justify-around items-center px-2 absolute bottom-0 w-full">
            <div className="text-gray-500 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span className="text-xs mt-1">Chat</span>
            </div>
            <div className="text-gray-500 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
              <span className="text-xs mt-1">Workout</span>
            </div>
            <div className="text-primary-light flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
              <span className="text-xs mt-1">Diet</span>
            </div>
            <div className="text-gray-500 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-xs mt-1">Profile</span>
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

export default NutritionFeature;
