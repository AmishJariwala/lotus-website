import { useState, useEffect } from 'react';
import { Exercise, Workout } from '../../utils/workoutParser';

interface WorkoutSessionProps {
  workout: Workout;
  onComplete: (workout: Workout) => void;
  onCancel: () => void;
}

const WorkoutSession = ({ workout, onComplete, onCancel }: WorkoutSessionProps) => {
  const [currentWorkout, setCurrentWorkout] = useState<Workout>(workout);
  const [timer, setTimer] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(true);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  // Format timer as mm:ss
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Complete a set for an exercise
  const completeSet = (exerciseId: number) => {
    setCurrentWorkout(prev => {
      const updatedExercises = prev.exercises.map(exercise => {
        if (exercise.id === exerciseId && exercise.completed < exercise.sets) {
          return { ...exercise, completed: exercise.completed + 1 };
        }
        return exercise;
      });
      
      return { ...prev, exercises: updatedExercises };
    });
  };

  // Check if workout is complete
  const isWorkoutComplete = (): boolean => {
    return currentWorkout.exercises.every(exercise => exercise.completed >= exercise.sets);
  };

  // Finish the workout
  const finishWorkout = () => {
    const completedWorkout: Workout = {
      ...currentWorkout,
      endTime: new Date()
    };
    setIsActive(false);
    onComplete(completedWorkout);
  };

  return (
    <div className="flex flex-col h-full w-full bg-dark">
      {/* Workout header */}
      <div className="bg-dark-darker py-3 px-4 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-semibold">{currentWorkout.name || 'Workout'}</h2>
          <div className="text-primary-light font-mono">{formatTime(timer)}</div>
        </div>
      </div>

      {/* Workout content */}
      <div className="flex-grow overflow-y-auto p-4">
        <div className="space-y-4">
          {currentWorkout.exercises.map((exercise) => (
            <div 
              key={exercise.id} 
              className="bg-dark-lighter rounded-lg p-4 border border-gray-700"
            >
              <h3 className="text-white font-semibold mb-2">{exercise.name}</h3>
              
              {exercise.weight && (
                <div className="text-gray-300 text-sm mb-2">
                  Weight: {exercise.weight.value}{exercise.weight.unit}
                </div>
              )}
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-300 text-sm">
                  {exercise.sets} sets × {exercise.reps} reps
                </span>
                <span className="text-primary-light text-sm font-semibold">
                  {exercise.completed}/{exercise.sets} sets
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {Array.from({ length: exercise.sets }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => index === exercise.completed ? completeSet(exercise.id) : null}
                    disabled={index !== exercise.completed}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index < exercise.completed 
                        ? 'bg-primary-light text-dark' 
                        : index === exercise.completed
                          ? 'bg-dark-lighter border-2 border-primary-light/50 text-white'
                          : 'bg-dark-lighter border border-gray-600 text-gray-500'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="p-4 border-t border-gray-700">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onCancel}
            className="py-3 px-4 rounded-lg border border-gray-600 text-gray-300 font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={finishWorkout}
            className="py-3 px-4 rounded-lg bg-primary-light text-dark font-semibold hover:bg-primary hover:text-white transition-colors"
            disabled={!isWorkoutComplete()}
          >
            {isWorkoutComplete() ? 'Finish' : 'Complete All Sets'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSession;
