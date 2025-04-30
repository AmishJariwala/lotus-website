import React from 'react';
import FeatureHighlight from '../FeatureHighlight';

const StrengthAnalyticsFeature: React.FC = () => {
  return (
    <FeatureHighlight
      title="Visualize Your Strength Gains"
      description="Track your progress with beautiful, intuitive charts. See your strength improvements over time, celebrate PRs, and identify areas for growth."
      imageSide="right"
    >
      <li>Track progress across all exercises</li>
      <li>Automatic PR detection and celebration</li>
      <li>AI-driven strength profile analysis</li>

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

          {/* App content - Weight Tracking interface */}
          <div className="h-[calc(100%-6rem)] overflow-hidden">
            <div className="h-full bg-dark p-3">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-light mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h3 className="text-white font-semibold text-xl">Weight Tracking</h3>
                </div>
                <div className="text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>

              {/* Current weight */}
              <div className="bg-dark-lighter rounded-xl p-4 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-gray-400 text-sm">Current</div>
                    <div className="flex items-baseline">
                      <div className="text-white text-2xl font-bold">174.0</div>
                      <div className="text-white text-lg ml-1">lbs</div>
                    </div>
                  </div>
                  <div className="flex items-center text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-lg font-medium">1.1%</span>
                  </div>
                </div>
              </div>

              {/* Add weight button */}
              <div className="mb-4">
                <button className="bg-primary-light/20 text-primary-light rounded-xl py-2 px-4 w-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Add Weight</span>
                </button>
              </div>

              {/* Weight history chart */}
              <div className="bg-dark-lighter rounded-xl p-3 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-white text-sm font-medium">Last 30 Days</h4>
                  <div className="flex space-x-2">
                    <div className="bg-primary-light text-dark px-2 py-0.5 rounded-full text-xs">
                      1M
                    </div>
                    <div className="bg-dark-darker text-gray-300 px-2 py-0.5 rounded-full text-xs">
                      3M
                    </div>
                    <div className="bg-dark-darker text-gray-300 px-2 py-0.5 rounded-full text-xs">
                      1Y
                    </div>
                  </div>
                </div>

                <div className="h-32 relative">
                  {/* Chart background lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    <div className="border-t border-gray-700 w-full"></div>
                    <div className="border-t border-gray-700 w-full"></div>
                    <div className="border-t border-gray-700 w-full"></div>
                    <div className="border-t border-gray-700 w-full"></div>
                  </div>

                  {/* Chart data points */}
                  <div className="absolute inset-0 flex items-end">
                    <div className="flex-1 flex items-end justify-around">
                      {/* Data points with connecting line */}
                      <div className="relative">
                        <div className="absolute bottom-0 left-0 right-0 h-[60%] border-t-2 border-primary-light"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-light relative z-10"></div>
                      </div>
                      <div className="relative">
                        <div className="absolute bottom-0 left-0 right-0 h-[55%] border-t-2 border-primary-light"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-light relative z-10"></div>
                      </div>
                      <div className="relative">
                        <div className="absolute bottom-0 left-0 right-0 h-[58%] border-t-2 border-primary-light"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-light relative z-10"></div>
                      </div>
                      <div className="relative">
                        <div className="absolute bottom-0 left-0 right-0 h-[50%] border-t-2 border-primary-light"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-light relative z-10"></div>
                      </div>
                      <div className="relative">
                        <div className="absolute bottom-0 left-0 right-0 h-[45%] border-t-2 border-primary-light"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-light relative z-10"></div>
                      </div>
                      <div className="relative">
                        <div className="absolute bottom-0 left-0 right-0 h-[40%] border-t-2 border-primary-light"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-light relative z-10"></div>
                      </div>
                      <div className="relative">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-light relative z-10"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Weight labels */}
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <div>170 lbs</div>
                  <div>180 lbs</div>
                </div>
              </div>

              {/* Weight history entries */}
              <div className="space-y-2">
                <div className="bg-dark-lighter rounded-xl p-3 flex justify-between items-center">
                  <div>
                    <div className="text-white text-sm">174.0 lbs</div>
                    <div className="text-gray-400 text-xs">Today, 7:53 AM</div>
                  </div>
                  <div className="text-green-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>1.1%</span>
                  </div>
                </div>

                <div className="bg-dark-lighter rounded-xl p-3 flex justify-between items-center">
                  <div>
                    <div className="text-white text-sm">176.2 lbs</div>
                    <div className="text-gray-400 text-xs">Apr 25, 8:15 AM</div>
                  </div>
                  <div className="text-red-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
                    </svg>
                    <span>0.8%</span>
                  </div>
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
            <div className="text-gray-500 flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
              <span className="text-xs mt-1">Diet</span>
            </div>
            <div className="text-primary-light flex flex-col items-center">
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

export default StrengthAnalyticsFeature;
