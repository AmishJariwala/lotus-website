import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Download the App",
      description: "Get Lotus from the App Store or Google Play Store and create your account.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Chat with Lotus AI",
      description: "Tell Lotus about your fitness goals and preferences through natural conversation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Log Effortlessly",
      description: "Track workouts, meals, and progress through simple conversation with your AI coach.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Get Smarter Insights",
      description: "Receive personalized recommendations that improve as Lotus learns about you.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen md:h-full flex items-center bg-dark py-20 md:py-0">
      <div className="container-custom w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Getting started with Lotus is simple. Our AI-powered approach makes fitness tracking effortless and intuitive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 bg-primary-light w-8 h-8 rounded-full flex items-center justify-center text-dark font-bold text-lg z-10">
                {index + 1}
              </div>

              {/* Step content */}
              <div className="bg-dark p-6 rounded-xl border border-gray-800 hover:border-primary-light/30 transition-all duration-300 h-full flex flex-col items-center">
                <div className="text-primary-light mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-gray-300 text-center">{step.description}</p>
              </div>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-light/30"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#download"
            className="btn bg-primary-light text-dark font-semibold hover:bg-primary hover:text-white px-8 py-3 rounded-lg inline-block"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
