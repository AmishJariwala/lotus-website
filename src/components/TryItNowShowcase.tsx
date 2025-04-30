import { useState } from 'react';
import AppShowcase from './try-it-now/AppShowcase';

const TryItNowShowcase = () => {
  const [activeFeature, setActiveFeature] = useState<string>('chat');

  const features = [
    {
      id: 'chat',
      title: 'AI Fitness Coach',
      description: 'Chat with your personal AI fitness coach for personalized advice, workout plans, and nutrition guidance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      id: 'workout',
      title: 'Workout Tracking',
      description: 'Track your workouts, monitor your progress, and get personalized recommendations to improve your fitness.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 'diet',
      title: 'Nutrition Tracking',
      description: 'Log your meals, track your macros, and get personalized nutrition advice to reach your goals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
    },
    {
      id: 'weight',
      title: 'Progress Tracking',
      description: 'Track your weight, body measurements, and see your progress over time with detailed charts and insights.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="try-it-now" className="py-16 min-h-screen bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex justify-start mb-8">
          <a
            href="/"
            className="flex items-center text-primary-light hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </a>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience Lotus</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Try the Lotus app demo below. Click on the tabs to explore different features.
          </p>
        </div>

        <div className="flex justify-center">
          {/* App Showcase */}
          <div className="w-full max-w-lg">
            <AppShowcase activeFeature={activeFeature} />

            <div className="mt-8 text-center">
              <a
                href="#download"
                className="inline-block bg-primary-light text-dark py-3 px-8 rounded-lg font-semibold text-center hover:bg-primary hover:text-white transition-colors"
              >
                Download Lotus
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryItNowShowcase;
