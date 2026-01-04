import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface ExerciseProgress {
  exercise_id: string;
  sets_completed: boolean[];
  load_used?: number;
  notes?: string;
}

interface WorkoutProgress {
  workout_id: string;
  exercises: ExerciseProgress[];
}

interface Progression {
  [exercise_id: string]: {
    [week: string]: number;
  };
}

interface WorkoutState {
  current_week: number;
  start_date: string | null;
  completed_workouts: {
    [date: string]: WorkoutProgress;
  };
  progression: Progression;
  actions: {
    setStartDate: (date: string) => void;
    toggleSetCompleted: (date: string, workout_id: string, exercise_id: string, setIndex: number, totalSets: number) => void;
    setLoadUsed: (date: string, workout_id: string, exercise_id: string, load: number) => void;
    setNotes: (date: string, workout_id: string, exercise_id: string, notes: string) => void;
    clearProgress: () => void;
  };
}

const useWorkoutStore = create<WorkoutState>()(
  persist(
    (set) => ({
      current_week: 1,
      start_date: null,
      completed_workouts: {},
      progression: {},
      actions: {
        setStartDate: (date) => set({ start_date: date }),
        toggleSetCompleted: (date, workout_id, exercise_id, setIndex, totalSets) =>
          set((state) => {
            const newCompletedWorkouts = JSON.parse(JSON.stringify(state.completed_workouts));

            if (!newCompletedWorkouts[date]) {
              newCompletedWorkouts[date] = {
                workout_id: workout_id,
                exercises: [],
              };
            }

            let exerciseProgress = newCompletedWorkouts[date].exercises.find(
              (e) => e.exercise_id === exercise_id
            );

            if (!exerciseProgress) {
              exerciseProgress = {
                exercise_id: exercise_id,
                sets_completed: Array(totalSets).fill(false),
              };
              newCompletedWorkouts[date].exercises.push(exerciseProgress);
            }

            exerciseProgress.sets_completed[setIndex] = !exerciseProgress.sets_completed[setIndex];

            return { completed_workouts: newCompletedWorkouts };
          }),
        // setLoadUsed: (date, workout_id, exercise_id, load) =>
        //   set((state) => {
        //     // ... implementation to set load used
        //     return { completed_workouts: { ...state.completed_workouts } };
        //   }),
        // setNotes: (date, workout_id, exercise_id, notes) =>
        //   set((state) => {
        //     // ... implementation to set notes
        //     return { completed_workouts: { ...state.completed_workouts } };
        //   }),
        clearProgress: () =>
          set({
            current_week: 1,
            start_date: null,
            completed_workouts: {},
            progression: {},
          }),
      },
    }),
    {
      name: 'andrea-mitsuoka-workout-progress', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      partialize: ({ ...rest }) => rest,
    }
  )
);

export default useWorkoutStore;
