import React from 'react';
import NaturalLanguageFeature from './features/NaturalLanguageFeature';
import AICoachingFeature from './features/AICoachingFeature';
import StrengthAnalyticsFeature from './features/StrengthAnalyticsFeature';
import NutritionFeature from './features/NutritionFeature';

const Features: React.FC = () => {
  return (
    <div id="features">
      <section className="py-16 md:py-24 bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Lotus combines AI coaching with powerful tracking tools to help you achieve your fitness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Individual feature sections */}
      <NaturalLanguageFeature />
      <AICoachingFeature />
      <StrengthAnalyticsFeature />
      <NutritionFeature />
    </div>
  );
};

export default Features;
