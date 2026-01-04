"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ReactPlayer from "react-player";

const ExerciseModal = ({ exercise, onClose }) => {
  if (!exercise) return null;

  return (
    <Dialog open={!!exercise} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 text-white border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl text-teal-400">{exercise.name}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div className="w-full h-64">
             <ReactPlayer url={exercise.video_url} width="100%" height="100%" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-pink-400">Execução Correta:</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>{exercise.execution.setup}</li>
              <li>{exercise.execution.movement}</li>
              <li>{exercise.execution.breathing}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-pink-400">Erros Comuns:</h3>
            <ul className="list-disc list-inside text-gray-300">
              {exercise.common_errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExerciseModal;
