const Hero = () => {
  return (
    <div className="min-h-screen md:h-full flex items-center bg-dark pt-12 pb-16 md:py-0">
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Text Content */}
          <div className="flex flex-col text-center md:text-left order-1">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Chat Your Way to <span className="text-primary-light">Fitness</span>
            </h1>

            <p className="text-base text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
              Lotus is your AI-powered fitness companion that makes tracking workouts, nutrition, and progress effortless through natural conversation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs mx-auto md:mx-0">
              <a
                href="#download"
                className="btn bg-primary-light text-dark font-semibold hover:bg-primary hover:text-white w-full"
              >
                Download
              </a>
              <a
                href="/try-it-now"
                className="btn btn-outline w-full"
              >
                Try it Now
              </a>
            </div>

            {/* App Store Badges */}
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <div className="flex items-center text-gray-400 text-sm">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.8/5 App Store</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.7/5 Google Play</span>
              </div>
            </div>
          </div>

          {/* App Screenshot */}
          <div className="order-2 flex justify-center">
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

                {/* App content - Chat interface */}
                <div className="h-[calc(100%-6rem)] overflow-hidden">
                  <div className="h-full bg-dark p-3">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <img src="/logo.png" alt="Lotus Logo" className="h-6 w-6 mr-2" />
                        <h2 className="text-white text-xl font-semibold">Lotus</h2>
                      </div>
                      <div className="flex space-x-2">
                        <div className="text-primary-light rounded-full p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Chat messages */}
                    <div className="mb-3 flex justify-end">
                      <div className="bg-primary-light text-dark rounded-2xl px-4 py-2 max-w-[80%]">
                        <p className="text-sm">Make me a gluten free high protein lunch</p>
                      </div>
                    </div>
                    <div className="mb-3 flex justify-start">
                      <div className="bg-dark-lighter rounded-2xl px-4 py-2 max-w-[80%]">
                        <p className="text-white text-sm">Here's a delicious and healthy gluten-free high protein lunch option.</p>
                      </div>
                    </div>
                    <div className="flex justify-start mb-3">
                      <div className="bg-dark-lighter rounded-xl p-2 flex items-center">
                        <div className="bg-primary-light/20 p-2 rounded-lg mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Floating action button */}
                    <div className="absolute bottom-20 right-4">
                      <div className="bg-primary-light rounded-full p-3 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom tab bar */}
                <div className="h-16 bg-dark-darker border-t border-gray-700 flex justify-around items-center px-2 absolute bottom-0 w-full">
                  <div className="text-primary-light flex flex-col items-center">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
