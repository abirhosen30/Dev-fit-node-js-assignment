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
}

export const ExercisesContext = createContext<IExercisesContext | null>(null);

const ExercisesProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IExercise[]>([]);
  const [savePlan, setSavePlan] = useState<IExercise[]>([]);

  const sharedData: IExercisesContext = {
    todayPlan,
    setTodayPlan,
    savePlan,
    setSavePlan,
  };

  return (
    <ExercisesContext.Provider value={sharedData}>
      {children}
    </ExercisesContext.Provider>
  );
};

export default ExercisesProvider;