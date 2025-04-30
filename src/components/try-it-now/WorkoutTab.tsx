import { useState } from 'react';
import { Workout, Exercise } from '../../utils/workoutParser';
import CreateWorkout from './CreateWorkout';
import WorkoutSession from './WorkoutSession';

interface WorkoutSuggestion {
  id: number;
  name: string;
  duration: string;
  level: string;
  focus: string;
}

interface WorkoutHistory {
  id: number;
  date: string;
  type: string;
  duration: string;
  exercises: string[];
}

interface WorkoutTabProps {
  onStartWorkout: () => void;
}

const WorkoutTab = ({ onStartWorkout }: WorkoutTabProps) => {
  const [view, setView] = useState<'main' | 'create' | 'session'>('main');
  const [activeWorkout, setActiveWorkout] = useState<Workout | null>(null);
  // Sample workout history
  const workoutHistory = [
    {
      id: 1,
      date: 'May 6, 2023',
      type: 'Strength Training',
      duration: '45 min',
      exercises: ['Bench Press', 'Squats', 'Deadlifts', 'Pull-ups']
    },
    {
      id: 2,
      date: 'May 4, 2023',
      type: 'Cardio',
      duration: '30 min',
      exercises: ['Running', 'Jump Rope']
    },
    {
      id: 3,
      date: 'May 2, 2023',
      type: 'Strength Training',
      duration: '50 min',
      exercises: ['Shoulder Press', 'Lunges', 'Rows', 'Bicep Curls']
    },
    {
      id: 4,
      date: 'April 30, 2023',
      type: 'HIIT',
      duration: '25 min',
      exercises: ['Burpees', 'Mountain Climbers', 'Jumping Jacks', 'Push-ups']
    }
  ];

  // Sample workout suggestions
  const workoutSuggestions: WorkoutSuggestion[] = [
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
    },
    {
      id: 3,
      name: 'Full Body HIIT',
      duration: '30 min',
      level: 'Advanced',
      focus: 'Cardio, Full Body'
    }
  ];

  // Handle starting a suggested workout
  const handleStartSuggestedWorkout = (suggestion: WorkoutSuggestion) => {
    // Create a workout from the suggestion
    const exercises: Exercise[] = [];

    // Add sample exercises based on the workout type
    if (suggestion.id === 1) { // Upper Body
      exercises.push(
        {
          id: 1,
          name: 'Bench Press',
          weight: { value: 135, unit: 'lb' },
          sets: 3,
          reps: 10,
          completed: 0
        },
        {
          id: 2,
          name: 'Pull-ups',
          sets: 3,
          reps: 8,
          completed: 0
        },
        {
          id: 3,
          name: 'Shoulder Press',
          weight: { value: 95, unit: 'lb' },
          sets: 3,
          reps: 10,
          completed: 0
        }
      );
    } else if (suggestion.id === 2) { // Lower Body
      exercises.push(
        {
          id: 1,
          name: 'Squats',
          weight: { value: 185, unit: 'lb' },
          sets: 3,
          reps: 10,
          completed: 0
        },
        {
          id: 2,
          name: 'Deadlifts',
          weight: { value: 225, unit: 'lb' },
          sets: 3,
          reps: 8,
          completed: 0
        },
        {
          id: 3,
          name: 'Lunges',
          weight: { value: 95, unit: 'lb' },
          sets: 3,
          reps: 12,
          completed: 0
        }
      );
    } else if (suggestion.id === 3) { // HIIT
      exercises.push(
        {
          id: 1,
          name: 'Burpees',
          sets: 4,
          reps: 15,
          completed: 0
        },
        {
          id: 2,
          name: 'Mountain Climbers',
          sets: 4,
          reps: 30,
          completed: 0
        },
        {
          id: 3,
          name: 'Jump Squats',
          sets: 4,
          reps: 20,
          completed: 0
        }
      );
    }

    const workout: Workout = {
      id: Date.now(),
      name: suggestion.name,
      exercises,
      startTime: new Date()
    };

    setActiveWorkout(workout);
    setView('session');
  };

  // Handle creating a custom workout
  const handleCreateWorkout = () => {
    setView('create');
  };

  // Handle starting a custom workout
  const handleStartCustomWorkout = (workout: Workout) => {
    setActiveWorkout(workout);
    setView('session');
  };

  // Handle completing a workout
  const handleCompleteWorkout = (workout: Workout) => {
    // In a real app, we would save the workout here
    // For the demo, we'll just show the download prompt
    onStartWorkout();
  };

  // Handle canceling a workout
  const handleCancelWorkout = () => {
    setActiveWorkout(null);
    setView('main');
  };

  return (
    <>
      {view === 'main' && (
        <div className="flex flex-col h-full w-full bg-dark">
          {/* Workout header */}
          <div className="bg-dark-darker py-3 px-4 border-b border-gray-700">
            <h2 className="text-white font-semibold">Workouts</h2>
          </div>

          {/* Start workout section */}
          <div className="p-4 border-b border-gray-700">
            <button
              onClick={handleCreateWorkout}
              className="w-full bg-primary-light text-dark py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Start New Workout
            </button>
          </div>

          {/* Workout content */}
          <div className="flex-grow overflow-y-auto">
            <div className="p-4">
              {/* Suggested workouts */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-4">Suggested For You</h3>

                <div className="space-y-3">
                  {workoutSuggestions.map((workout) => (
                    <div
                      key={workout.id}
                      className="bg-dark-lighter rounded-lg p-3 border border-gray-700 cursor-pointer hover:border-primary-light/30 transition-colors"
                    >
                      <h4 className="text-white font-medium">{workout.name}</h4>
                      <div className="flex justify-between mt-1">
                        <span className="text-gray-400 text-xs">{workout.duration}</span>
                        <span className="text-gray-400 text-xs">{workout.level}</span>
                      </div>
                      <div className="mt-2">
                        <span className="text-primary-light text-xs">{workout.focus}</span>
                      </div>
                      <button
                        onClick={() => handleStartSuggestedWorkout(workout)}
                        className="mt-3 w-full bg-primary-light/20 text-primary-light py-1 px-2 rounded text-xs font-medium hover:bg-primary-light/30 transition-colors"
                      >
                        Start This Workout
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workout history */}
              <div>
                <h3 className="text-white font-semibold mb-4">Recent Workouts</h3>

                <div className="space-y-3">
                  {workoutHistory.map((workout) => (
                    <div
                      key={workout.id}
                      className="bg-dark-lighter rounded-lg p-3 border border-gray-700 hover:border-primary-light/30 transition-colors cursor-pointer"
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
      )}

      {view === 'create' && (
        <CreateWorkout
          onStartWorkout={handleStartCustomWorkout}
          onCancel={handleCancelWorkout}
        />
      )}

      {view === 'session' && activeWorkout && (
        <WorkoutSession
          workout={activeWorkout}
          onComplete={handleCompleteWorkout}
          onCancel={handleCancelWorkout}
        />
      )}
    </>
  );
};

export default WorkoutTab;
