interface DietTabProps {
  onAction: () => void;
}

const DietTab = ({ onAction }: DietTabProps) => {
  // Sample meal data for today
  const meals = [
    {
      id: 1,
      type: 'Breakfast',
      time: '7:30 AM',
      foods: [
        { name: 'Oatmeal with berries', calories: 320, protein: 12 },
        { name: 'Greek yogurt', calories: 150, protein: 15 },
        { name: 'Black coffee', calories: 5, protein: 0 }
      ]
    },
    {
      id: 2,
      type: 'Lunch',
      time: '12:15 PM',
      foods: [
        { name: 'Grilled chicken salad', calories: 380, protein: 35 },
        { name: 'Whole grain bread', calories: 120, protein: 4 },
        { name: 'Apple', calories: 95, protein: 0 }
      ]
    },
    {
      id: 3,
      type: 'Snack',
      time: '3:30 PM',
      foods: [
        { name: 'Protein shake', calories: 180, protein: 25 },
        { name: 'Banana', calories: 105, protein: 1 }
      ]
    },
    {
      id: 4,
      type: 'Dinner',
      time: '7:00 PM',
      foods: [
        { name: 'Salmon fillet', calories: 350, protein: 40 },
        { name: 'Quinoa', calories: 220, protein: 8 },
        { name: 'Steamed vegetables', calories: 85, protein: 3 }
      ]
    }
  ];

  // Calculate totals
  const totalCalories = meals.reduce((sum, meal) =>
    sum + meal.foods.reduce((mealSum, food) => mealSum + food.calories, 0), 0);

  const totalProtein = meals.reduce((sum, meal) =>
    sum + meal.foods.reduce((mealSum, food) => mealSum + food.protein, 0), 0);

  // Daily goals
  const calorieGoal = 2200;
  const proteinGoal = 150;

  // Calculate percentages
  const caloriePercentage = Math.min(Math.round((totalCalories / calorieGoal) * 100), 100);
  const proteinPercentage = Math.min(Math.round((totalProtein / proteinGoal) * 100), 100);

  return (
    <div className="flex flex-col h-full w-full bg-dark">
      {/* Diet header */}
      <div className="bg-dark-darker py-3 px-4 border-b border-gray-700">
        <h2 className="text-white font-semibold">Diet Tracking</h2>
      </div>

      {/* Diet content */}
      <div className="flex-grow overflow-y-auto">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-white font-semibold mb-3">Today's Summary</h3>

          <div className="space-y-3">
            {/* Calories */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Calories</span>
                <span className="text-white">{totalCalories} / {calorieGoal}</span>
              </div>
              <div className="w-full bg-dark-lighter rounded-full h-2.5">
                <div
                  className="bg-primary-light h-2.5 rounded-full"
                  style={{ width: `${caloriePercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Protein */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Protein</span>
                <span className="text-white">{totalProtein}g / {proteinGoal}g</span>
              </div>
              <div className="w-full bg-dark-lighter rounded-full h-2.5">
                <div
                  className="bg-primary-light h-2.5 rounded-full"
                  style={{ width: `${proteinPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Meals list */}
        <div className="p-4">
          <h3 className="text-white font-semibold mb-4">Today's Meals</h3>

          <div className="space-y-3">
            {meals.map((meal) => (
              <div key={meal.id} className="bg-dark-lighter rounded-lg p-3 border border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white font-semibold">{meal.type}</h3>
                  <span className="text-gray-400 text-sm">{meal.time}</span>
                </div>

                <div className="space-y-2">
                  {meal.foods.map((food, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-white text-sm">{food.name}</span>
                      <span className="text-gray-400 text-sm">{food.calories} cal</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add meal button */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={onAction}
          className="w-full bg-primary-light text-dark py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
        >
          Add Meal
        </button>
      </div>
    </div>
  );
};

export default DietTab;
