"use client";

import { useState } from "react";
import athleteData from "@/data/athlete-data.json";
import ExerciseModal from "./ExerciseModal";
import useWorkoutStore from "@/store/useWorkoutStore";
import { Checkbox } from "./ui/checkbox";
import RestTimer from "./RestTimer";

const WorkoutTable = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const { current_week, completed_workouts, actions } = useWorkoutStore();
  const workout = athleteData.workouts.find((w) => w.id === "A");

  const today = new Date().toISOString().split("T")[0];

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleCloseModal = () => {
    setSelectedExercise(null);
  };

  const getRepsForWeek = (reps) => {
    return current_week < 3 ? reps.split("-")[0] : reps.split("-")[1];
  };

  const getLoadForWeek = (load) => {
    return current_week < 3 ? load.split("-")[0] : load.split("-")[1];
  };

  const parseRestToSeconds = (rest) => {
    const minutes = parseInt(rest);
    return minutes * 60;
  };

  if (!workout) return <div>Workout not found</div>;

  return (
    <div className="overflow-x-auto">
      {/* Desktop Table */}
      <table className="min-w-full divide-y divide-gray-700 hidden md:table">
        <thead className="bg-gray-800/50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Exercício</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Séries</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Reps</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Carga</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Descanso</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Concluído</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900/50 divide-y divide-gray-800">
          {workout.exercises.map((exercise) => (
            <tr key={exercise.id}>
              <td onClick={() => handleExerciseClick(exercise)} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white cursor-pointer hover:text-teal-400">{exercise.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{exercise.sets}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{getRepsForWeek(exercise.reps)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{getLoadForWeek(exercise.load)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                <RestTimer durationInSeconds={parseRestToSeconds(exercise.rest)} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  {Array.from({ length: exercise.sets }).map((_, i) => {
                    const isCompleted = completed_workouts[today]?.exercises.find(e => e.exercise_id === exercise.id)?.sets_completed[i] || false;
                    return (
                      <Checkbox
                        key={i}
                        checked={isCompleted}
                        onCheckedChange={() => actions.toggleSetCompleted(today, workout.id, exercise.id, i, exercise.sets)}
                      />
                    );
                  })}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {workout.exercises.map((exercise) => (
          <div key={exercise.id} className="bg-gray-900/50 rounded-lg p-4">
            <h3 onClick={() => handleExerciseClick(exercise)} className="text-lg font-bold text-teal-400 cursor-pointer">{exercise.name}</h3>
            <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
              <p><span className="font-semibold">Séries:</span> {exercise.sets}</p>
              <p><span className="font-semibold">Reps:</span> {getRepsForWeek(exercise.reps)}</p>
              <p><span className="font-semibold">Carga:</span> {getLoadForWeek(exercise.load)}</p>
              <p><span className="font-semibold">Descanso:</span> <RestTimer durationInSeconds={parseRestToSeconds(exercise.rest)} /></p>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <span className="font-semibold">Concluído:</span>
              {Array.from({ length: exercise.sets }).map((_, i) => {
                const isCompleted = completed_workouts[today]?.exercises.find(e => e.exercise_id === exercise.id)?.sets_completed[i] || false;
                return (
                  <Checkbox
                    key={i}
                    checked={isCompleted}
                    onCheckedChange={() => actions.toggleSetCompleted(today, workout.id, exercise.id, i, exercise.sets)}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {selectedExercise && <ExerciseModal exercise={selectedExercise} onClose={handleCloseModal} />}
    </div>
  );
};

export default WorkoutTable;
