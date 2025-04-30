import React from 'react';

const DownloadSection: React.FC = () => {
  return (
    <div className="py-16 md:py-0 md:h-full flex items-center bg-dark pb-0">
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Phone mockup */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative w-full max-w-[240px] md:max-w-[280px]">
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
          </div>

          {/* Download content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Lotus Today</h2>
            <p className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
              Start your fitness journey with Lotus and experience the power of AI-driven coaching, effortless tracking, and personalized insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-xs mx-auto md:mx-0">
              <a
                href="#"
                className="bg-black hover:bg-gray-900 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg border border-gray-700 transition-colors flex items-center justify-center w-full"
              >
                <svg className="w-5 h-5 md:w-7 md:h-7 mr-2 md:mr-3" viewBox="0 0 384 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm md:text-base font-semibold font-sans">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="bg-black hover:bg-gray-900 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg border border-gray-700 transition-colors flex items-center justify-center w-full"
              >
                <svg className="w-5 h-5 md:w-7 md:h-7 mr-2 md:mr-3" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm md:text-base font-semibold font-sans">Google Play</div>
                </div>
              </a>
            </div>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center md:justify-start sm:space-x-4 space-y-2 sm:space-y-0">
              <div className="flex items-center justify-center md:justify-start text-gray-400 text-xs md:text-sm">
                <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.8/5 App Store</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-gray-400 text-xs md:text-sm">
                <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.7/5 Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
