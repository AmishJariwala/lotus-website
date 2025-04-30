import React from 'react';

interface DownloadPromptProps {
  onClose: () => void;
  feature?: 'chat' | 'workout' | 'diet' | 'weight';
}

// Content for different features
const featureContent = {
  chat: {
    title: 'Chat with Your AI Coach',
    message: 'Get personalized fitness advice, workout plans, and nutrition guidance from your AI coach.',
    benefits: [
      'Personalized workout and nutrition plans',
      'Real-time form feedback and technique tips',
      'Motivation and accountability support'
    ]
  },
  workout: {
    title: 'Track Your Workouts',
    message: 'Log your workouts, track your progress, and get personalized recommendations to improve your fitness.',
    benefits: [
      'Create custom workout routines',
      'Track sets, reps, and weights',
      'Analyze performance and progress over time'
    ]
  },
  diet: {
    title: 'Monitor Your Nutrition',
    message: 'Log your meals, track your macros, and get personalized nutrition advice to reach your goals.',
    benefits: [
      'Track calories and macronutrients',
      'Get personalized meal recommendations',
      'Monitor your nutrition habits over time'
    ]
  },
  weight: {
    title: 'Track Your Progress',
    message: 'Monitor your weight, body measurements, and see your progress over time with detailed charts and insights.',
    benefits: [
      'Track weight, body fat, and measurements',
      'Visualize progress with detailed charts',
      'Set goals and get personalized recommendations'
    ]
  }
};

const DownloadPrompt: React.FC<DownloadPromptProps> = ({ onClose, feature = 'workout' }) => {
  // Get content based on feature
  const content = featureContent[feature] || featureContent.workout;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-dark-lighter rounded-xl max-w-md w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          {/* Download icon */}
          <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>

          {/* Title and message */}
          <h3 className="text-xl font-bold text-white mb-2">{content.title}</h3>
          <p className="text-gray-300 mb-4">
            {content.message} Download the Lotus app to access all features.
          </p>

          {/* Benefits list */}
          <div className="bg-dark rounded-lg p-4 mb-6 text-left">
            <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
            <ul className="space-y-2">
              {content.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-primary-light mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Download buttons */}
          <div className="flex flex-col gap-3">
            {/* App Store Button */}
            <a
              href="#"
              className="flex items-center justify-center bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg border border-gray-700 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 384 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <div className="text-left">
                <div className="text-sm font-semibold font-sans">App Store</div>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="flex items-center justify-center bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg border border-gray-700 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="text-left">
                <div className="text-sm font-semibold font-sans">Google Play</div>
              </div>
            </a>
          </div>

          {/* Continue exploring button */}
          <button
            onClick={onClose}
            className="mt-6 text-gray-400 hover:text-primary-light text-sm transition-colors"
          >
            Continue Exploring Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadPrompt;
