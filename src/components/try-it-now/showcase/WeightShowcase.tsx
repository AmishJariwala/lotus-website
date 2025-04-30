import React from 'react';

interface WeightShowcaseProps {
  onAction: () => void;
}

const WeightShowcase: React.FC<WeightShowcaseProps> = ({ onAction }) => {
  // Simple weight data with clear trend
  const weightData = [
    { day: 'Mon', weight: 187.5 },
    { day: 'Tue', weight: 186.8 },
    { day: 'Wed', weight: 186.2 },
    { day: 'Thu', weight: 185.7 },
    { day: 'Fri', weight: 185.0 },
    { day: 'Sat', weight: 184.3 },
    { day: 'Sun', weight: 183.6 }
  ];

  // Calculate weight change
  const startWeight = weightData[0].weight;
  const currentWeight = weightData[weightData.length - 1].weight;
  const weightChange = currentWeight - startWeight;
  const weightChangeText = weightChange < 0
    ? `Lost ${Math.abs(weightChange).toFixed(1)} lbs`
    : `Gained ${weightChange.toFixed(1)} lbs`;

  return (
    <div className="flex flex-col h-full w-full bg-dark">
      {/* Weight header */}
      <div className="bg-dark-darker py-3 px-4 border-b border-gray-700">
        <h2 className="text-white font-semibold">Weight Tracking</h2>
      </div>

      {/* Weight content */}
      <div className="flex-grow overflow-y-auto">
        {/* Current weight summary */}
        <div className="p-4 border-b border-gray-700">
          <div className="text-center">
            <p className="text-gray-400 text-sm">Current Weight</p>
            <h3 className="text-3xl font-bold text-white">{currentWeight} lbs</h3>
            <p className="text-primary-light text-sm mt-1">{weightChangeText} this week</p>
          </div>
        </div>

        {/* Weight chart - extremely simplified */}
        <div className="p-4">
          <h3 className="text-white font-semibold mb-4">7-Day Progress</h3>

          {/* Static chart with hardcoded bars */}
          <div className="bg-dark-lighter rounded-lg p-4 mb-4">
            <div className="text-center mb-3">
              <span className="text-sm text-primary-light font-medium">Weight Loss Trend</span>
            </div>

            {/* Simple bar chart */}
            <div className="flex items-end justify-between h-32 px-2">
              {/* Monday */}
              <div className="flex flex-col items-center">
                <div className="mb-1">
                  <span className="text-xs text-primary-light">187.5</span>
                </div>
                <div className="w-5 bg-primary-light rounded-t" style={{ height: '20%' }}></div>
                <div className="mt-2">
                  <span className="text-xs text-gray-400">Mon</span>
                </div>
              </div>

              {/* Tuesday */}
              <div className="flex flex-col items-center">
                <div className="mb-1">
                  <span className="text-xs text-primary-light">186.8</span>
                </div>
                <div className="w-5 bg-primary-light rounded-t" style={{ height: '30%' }}></div>
                <div className="mt-2">
                  <span className="text-xs text-gray-400">Tue</span>
                </div>
              </div>

              {/* Wednesday */}
              <div className="flex flex-col items-center">
                <div className="mb-1">
                  <span className="text-xs text-primary-light">186.2</span>
                </div>
                <div className="w-5 bg-primary-light rounded-t" style={{ height: '40%' }}></div>
                <div className="mt-2">
                  <span className="text-xs text-gray-400">Wed</span>
                </div>
              </div>

              {/* Thursday */}
              <div className="flex flex-col items-center">
                <div className="mb-1">
                  <span className="text-xs text-primary-light">185.7</span>
                </div>
                <div className="w-5 bg-primary-light rounded-t" style={{ height: '50%' }}></div>
                <div className="mt-2">
                  <span className="text-xs text-gray-400">Thu</span>
                </div>
              </div>

              {/* Friday */}
              <div className="flex flex-col items-center">
                <div className="mb-1">
                  <span className="text-xs text-primary-light">185.0</span>
                </div>
                <div className="w-5 bg-primary-light rounded-t" style={{ height: '60%' }}></div>
                <div className="mt-2">
                  <span className="text-xs text-gray-400">Fri</span>
                </div>
              </div>

              {/* Saturday */}
              <div className="flex flex-col items-center">
                <div className="mb-1">
                  <span className="text-xs text-primary-light">184.3</span>
                </div>
                <div className="w-5 bg-primary-light rounded-t" style={{ height: '70%' }}></div>
                <div className="mt-2">
                  <span className="text-xs text-gray-400">Sat</span>
                </div>
              </div>

              {/* Sunday */}
              <div className="flex flex-col items-center">
                <div className="mb-1">
                  <span className="text-xs text-primary-light">183.6</span>
                </div>
                <div className="w-5 bg-primary-light rounded-t" style={{ height: '80%' }}></div>
                <div className="mt-2">
                  <span className="text-xs text-gray-400">Sun</span>
                </div>
              </div>
            </div>

            {/* Min/Max labels */}
            <div className="flex justify-between mt-2">
              <span className="text-xs text-gray-400">Start: {startWeight} lbs</span>
              <span className="text-xs text-gray-400">Current: {currentWeight} lbs</span>
            </div>
          </div>

          <div className="mt-6 bg-dark-lighter rounded-lg p-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-xs">Weekly Goal</p>
                <p className="text-white">Lose 1 lb per week</p>
              </div>
              <div className="bg-primary-light/20 text-primary-light px-2 py-1 rounded text-sm">
                On Track
              </div>
            </div>
          </div>

          {/* Body metrics */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-semibold">Body Metrics</h3>
              <button
                onClick={onAction}
                className="text-primary-light text-sm"
              >
                + Add Measurement
              </button>
            </div>

            <div className="space-y-3">
              <div className="bg-dark-lighter rounded-lg p-3 border border-gray-700">
                <div className="flex justify-between items-center">
                  <p className="text-white">Body Fat %</p>
                  <p className="text-white font-medium">18.2%</p>
                </div>
                <div className="w-full bg-dark rounded-full h-1.5 mt-2">
                  <div
                    className="bg-primary-light h-1.5 rounded-full"
                    style={{ width: '65%' }}
                  ></div>
                </div>
              </div>

              <div className="bg-dark-lighter rounded-lg p-3 border border-gray-700">
                <div className="flex justify-between items-center">
                  <p className="text-white">Waist</p>
                  <p className="text-white font-medium">34 in</p>
                </div>
                <div className="w-full bg-dark rounded-full h-1.5 mt-2">
                  <div
                    className="bg-primary-light h-1.5 rounded-full"
                    style={{ width: '70%' }}
                  ></div>
                </div>
              </div>

              <div className="bg-dark-lighter rounded-lg p-3 border border-gray-700">
                <div className="flex justify-between items-center">
                  <p className="text-white">Chest</p>
                  <p className="text-white font-medium">42 in</p>
                </div>
                <div className="w-full bg-dark rounded-full h-1.5 mt-2">
                  <div
                    className="bg-primary-light h-1.5 rounded-full"
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add weight button */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={onAction}
          className="w-full bg-primary-light text-dark py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
        >
          Add Today's Weight
        </button>
      </div>
    </div>
  );
};

export default WeightShowcase;
