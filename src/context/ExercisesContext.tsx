"use client";

import { IExercise } from "@/types/exercieses.type";
import React, {
  createContext,
  ReactNode,
  useState,
} from "react";

interface IExercisesContext {
  todayPlan: IExercise[];
  setTodayPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  savePlan: IExercise[];
  setSavePlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  removeFromTodayPlan: (exerciseId: number) => void;
  removeFromSavePlan: (exerciseId: number) => void;
}

export const ExercisesContext = createContext<IExercisesContext | null>(null);

const ExercisesProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IExercise[]>([]);
  const [savePlan, setSavePlan] = useState<IExercise[]>([]);

  const removeFromTodayPlan = (exerciseId: number) => {
    setTodayPlan(todayPlan.filter((exercise) => exercise.id !== exerciseId));
  };
  const removeFromSavePlan = (exerciseId: number) => {
    setSavePlan(savePlan.filter((exercise) => exercise.id !== exerciseId));
  };

  const sharedData: IExercisesContext = {
    todayPlan,
    setTodayPlan,
    savePlan,
    setSavePlan,
    removeFromTodayPlan,
    removeFromSavePlan,
  };

  return (
    <ExercisesContext.Provider value={sharedData}>
      {children}
    </ExercisesContext.Provider>
  );
};

export default ExercisesProvider;