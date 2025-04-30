import { useState } from 'react';
import { parseWorkoutInput, extractExerciseInfo, Exercise, Workout } from '../../utils/workoutParser';

interface CreateWorkoutProps {
  onStartWorkout: (workout: Workout) => void;
  onCancel: () => void;
}

const CreateWorkout = ({ onStartWorkout, onCancel }: CreateWorkoutProps) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [workoutName, setWorkoutName] = useState('');

  // Handle adding an exercise
  const handleAddExercise = () => {
    if (!inputValue.trim()) return;
    
    const chips = parseWorkoutInput(inputValue);
    const exerciseInfo = extractExerciseInfo(chips);
    
    if (exerciseInfo.name) {
      const newExercise: Exercise = {
        id: Date.now(),
        name: exerciseInfo.name,
        weight: exerciseInfo.weight,
        sets: exerciseInfo.sets || 3, // Default to 3 sets if not specified
        reps: exerciseInfo.reps || 10, // Default to 10 reps if not specified
        completed: 0
      };
      
      setExercises([...exercises, newExercise]);
      setInputValue('');
    }
  };

  // Handle removing an exercise
  const handleRemoveExercise = (id: number) => {
    setExercises(exercises.filter(exercise => exercise.id !== id));
  };

  // Handle starting the workout
  const handleStartWorkout = () => {
    if (exercises.length === 0) return;
    
    const workout: Workout = {
      id: Date.now(),
      name: workoutName || 'Quick Workout',
      exercises,
      startTime: new Date()
    };
    
    onStartWorkout(workout);
  };

  // Handle input keydown (Enter to add exercise)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddExercise();
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-dark">
      {/* Create workout header */}
      <div className="bg-dark-darker py-3 px-4 border-b border-gray-700">
        <h2 className="text-white font-semibold">Create Workout</h2>
      </div>

      {/* Create workout content */}
      <div className="flex-grow overflow-y-auto p-4">
        <div className="mb-4">
          <label htmlFor="workout-name" className="block text-gray-300 text-sm mb-1">
            Workout Name
          </label>
          <input
            id="workout-name"
            type="text"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
            placeholder="Quick Workout"
            className="w-full bg-dark-lighter text-white rounded-lg py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary-light border border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="exercise-input" className="block text-gray-300 text-sm mb-1">
            Add Exercise
          </label>
          <div className="flex">
            <input
              id="exercise-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="e.g. Bench Press 135lb 3x10"
              className="flex-grow bg-dark-lighter text-white rounded-l-lg py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary-light border border-gray-700"
            />
            <button
              onClick={handleAddExercise}
              className="bg-primary-light text-dark rounded-r-lg px-4 font-semibold"
            >
              Add
            </button>
          </div>
          <p className="text-gray-400 text-xs mt-1">
            Format: Exercise Name [Weight] [Sets x Reps]
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-white font-semibold mb-2">Exercises</h3>
          
          {exercises.length === 0 ? (
            <div className="text-gray-400 text-sm p-4 text-center border border-gray-700 rounded-lg">
              No exercises added yet. Add your first exercise above.
            </div>
          ) : (
            <div className="space-y-3">
              {exercises.map((exercise) => (
                <div 
                  key={exercise.id} 
                  className="bg-dark-lighter rounded-lg p-3 border border-gray-700"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-white font-medium">{exercise.name}</h4>
                      <div className="text-gray-400 text-sm mt-1">
                        {exercise.sets} sets × {exercise.reps} reps
                        {exercise.weight && ` • ${exercise.weight.value}${exercise.weight.unit}`}
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveExercise(exercise.id)}
                      className="text-gray-400 hover:text-red-400"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
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
            onClick={handleStartWorkout}
            className="py-3 px-4 rounded-lg bg-primary-light text-dark font-semibold hover:bg-primary hover:text-white transition-colors"
            disabled={exercises.length === 0}
          >
            Start Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkout;
