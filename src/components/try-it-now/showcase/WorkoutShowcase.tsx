interface WorkoutShowcaseProps {
  onAction: () => void;
}

const WorkoutShowcase = ({ onAction }: WorkoutShowcaseProps) => {
  // Sample workout suggestions
  const workoutSuggestions = [
    {
      id: 1,
      name: 'Upper Body Strength',
      duration: '45 min',
      level: 'Intermediate',
      focus: 'Chest, Back, Arms'
    },
    {
      id: 2,
      name: 'Lower Body Power',
      duration: '40 min',
      level: 'Beginner',
      focus: 'Legs, Glutes'
    }
  ];

  // Sample workout history
  const workoutHistory = [
    {
      id: 1,
      date: 'Yesterday',
      type: 'Full Body',
      duration: '50 min',
      exercises: ['Bench Press', 'Squats', 'Deadlifts', 'Pull-ups']
    },
    {
      id: 2,
      date: '3 days ago',
      type: 'Cardio',
      duration: '30 min',
      exercises: ['Running', 'Jump Rope']
    }
  ];

  // Sample active workout
  const activeWorkout = {
    name: 'Upper Body Strength',
    exercises: [
      {
        name: 'Bench Press',
        sets: 3,
        reps: 10,
        weight: '135lb',
        completed: 2
      },
      {
        name: 'Pull-ups',
        sets: 3,
        reps: 8,
        completed: 1
      },
      {
        name: 'Shoulder Press',
        sets: 3,
        reps: 10,
        weight: '95lb',
        completed: 0
      }
    ],
    timer: '24:15'
  };

  return (
    <div className="flex flex-col h-full w-full bg-dark">
      {/* Workout header */}
      <div className="bg-dark-darker py-3 px-4 border-b border-gray-700">
        <h2 className="text-white font-semibold">Workouts</h2>
      </div>

      {/* Workout content */}
      <div className="flex-grow overflow-y-auto">
        <div className="p-4">
          {/* Active workout section */}
          <div className="mb-6">
            <div className="bg-dark-lighter rounded-lg p-4 border border-primary-light/30">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-semibold">{activeWorkout.name}</h3>
                <span className="text-primary-light font-mono">{activeWorkout.timer}</span>
              </div>
              
              <div className="space-y-3">
                {activeWorkout.exercises.map((exercise, index) => (
                  <div key={index} className="bg-dark rounded-lg p-3 border border-gray-700">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white">{exercise.name}</h4>
                        <p className="text-gray-400 text-xs mt-1">
                          {exercise.sets} sets × {exercise.reps} reps
                          {exercise.weight && ` • ${exercise.weight}`}
                        </p>
                      </div>
                      <div className="text-primary-light text-sm">
                        {exercise.completed}/{exercise.sets}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={onAction}
                className="w-full mt-4 bg-primary-light text-dark py-2 rounded-lg font-semibold"
              >
                Finish Workout
              </button>
            </div>
          </div>

          {/* Suggested workouts */}
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3">Suggested For You</h3>
            
            <div className="space-y-3">
              {workoutSuggestions.map((workout) => (
                <div
                  key={workout.id}
                  className="bg-dark-lighter rounded-lg p-3 border border-gray-700"
                >
                  <h4 className="text-white font-medium">{workout.name}</h4>
                  <div className="flex justify-between mt-1">
                    <span className="text-gray-400 text-xs">{workout.duration}</span>
                    <span className="text-gray-400 text-xs">{workout.level}</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-primary-light text-xs">{workout.focus}</span>
                  </div>
                  <button
                    onClick={onAction}
                    className="mt-3 w-full bg-primary-light/20 text-primary-light py-1 px-2 rounded text-xs font-medium"
                  >
                    Start Workout
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Workout history */}
          <div>
            <h3 className="text-white font-semibold mb-3">Recent Workouts</h3>
            
            <div className="space-y-3">
              {workoutHistory.map((workout) => (
                <div
                  key={workout.id}
                  className="bg-dark-lighter rounded-lg p-3 border border-gray-700"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-white font-medium">{workout.type}</h4>
                    <span className="text-gray-400 text-xs">{workout.date}</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-gray-400 text-xs">{workout.duration}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {workout.exercises.map((exercise, index) => (
                      <span
                        key={index}
                        className="text-xs bg-dark px-2 py-1 rounded text-primary-light"
                      >
                        {exercise}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutShowcase;
