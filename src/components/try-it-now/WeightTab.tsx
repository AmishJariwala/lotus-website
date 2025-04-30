interface WeightTabProps {
  onAction: () => void;
}

const WeightTab = ({ onAction }: WeightTabProps) => {
  // Sample weight data for the last 7 days
  const weightData = [
    { date: 'May 1', weight: 185.5 },
    { date: 'May 2', weight: 185.0 },
    { date: 'May 3', weight: 184.7 },
    { date: 'May 4', weight: 184.2 },
    { date: 'May 5', weight: 184.5 },
    { date: 'May 6', weight: 183.8 },
    { date: 'May 7', weight: 183.2 },
  ];

  // Calculate weight change
  const weightChange = weightData[weightData.length - 1].weight - weightData[0].weight;
  const weightChangeText = weightChange < 0
    ? `${Math.abs(weightChange).toFixed(1)} lbs lost`
    : `${weightChange.toFixed(1)} lbs gained`;

  // Calculate max and min for chart scaling
  const maxWeight = Math.max(...weightData.map(d => d.weight));
  const minWeight = Math.min(...weightData.map(d => d.weight));
  const range = maxWeight - minWeight;
  const chartMin = minWeight - (range * 0.2);
  const chartMax = maxWeight + (range * 0.2);

  // Function to calculate the height percentage for chart bars
  const calculateHeight = (weight: number) => {
    return ((weight - chartMin) / (chartMax - chartMin)) * 100;
  };

  return (
    <div className="flex flex-col h-full w-full bg-dark">
      {/* Weight header */}
      <div className="bg-dark-darker py-3 px-4 border-b border-gray-700">
        <h2 className="text-white font-semibold">Weight Tracking</h2>
      </div>

      {/* Current weight */}
      {/* Weight content */}
      <div className="flex-grow overflow-y-auto">
        <div className="p-4 border-b border-gray-700">
          <div className="text-center">
            <p className="text-gray-400 text-sm">Current Weight</p>
            <h3 className="text-3xl font-bold text-white">{weightData[weightData.length - 1].weight} lbs</h3>
            <p className="text-primary-light text-sm mt-1">{weightChangeText} this week</p>
          </div>
        </div>

        {/* Weight chart */}
        <div className="p-4">
        <h3 className="text-white font-semibold mb-4">7-Day Progress</h3>

        <div className="h-40 flex items-end justify-between">
          {weightData.map((day, index) => (
            <div key={index} className="flex flex-col items-center w-8">
              <div className="relative w-full">
                <div
                  className="w-4 mx-auto bg-primary-light/30 rounded-t"
                  style={{ height: `${calculateHeight(day.weight)}%` }}
                ></div>
                <div
                  className="absolute bottom-0 w-4 mx-auto bg-primary-light rounded-t"
                  style={{
                    height: `${calculateHeight(day.weight) - calculateHeight(chartMin)}%`,
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                ></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">{day.date.split(' ')[1]}</p>
            </div>
          ))}
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

export default WeightTab;
