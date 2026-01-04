"use client";

import useWorkoutStore from "@/store/useWorkoutStore";

const WeekSelector = () => {
  const currentWeek = useWorkoutStore((state) => state.current_week);
  const setCurrentWeek = (week: number) => {
    useWorkoutStore.setState({ current_week: week });
    };

  return (
    <div className="mb-8 flex justify-center">
      <div className="flex rounded-lg bg-gray-800/50 p-1">
        <button
          onClick={() => setCurrentWeek(1)}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            currentWeek === 1 ? "bg-teal-500 text-white" : "text-gray-400"
          }`}
        >
          Semanas 1-2
        </button>
        <button
          onClick={() => setCurrentWeek(3)}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            currentWeek === 3 ? "bg-teal-500 text-white" : "text-gray-400"
          }`}
        >
          Semanas 3-4
        </button>
      </div>
    </div>
  );
};

export default WeekSelector;
