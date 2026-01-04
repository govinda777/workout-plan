"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const RestTimer = ({ durationInSeconds }) => {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
      setTimeout(() => setIsActive(false), 0);
      // Optional: Play a sound
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleStart = () => {
    setTimeLeft(durationInSeconds);
    setIsActive(true);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center space-x-2">
      <Button onClick={handleStart} disabled={isActive}>
        {isActive ? "Descansando..." : "Iniciar Descanso"}
      </Button>
      <div className="text-2xl font-mono">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
    </div>
  );
};

export default RestTimer;
