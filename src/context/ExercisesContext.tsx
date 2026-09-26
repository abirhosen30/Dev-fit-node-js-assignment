"use client";

import { IExercise } from "@/types/exercieses.type";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export const MAX_TODAY_PLAN = 5;

interface IExercisesContext {
  todayPlan: IExercise[];
  setTodayPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  savePlan: IExercise[];
  setSavePlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  addToTodayPlan: (exercise: IExercise) => boolean;
  addToSavePlan: (exercise: IExercise) => boolean;
  removeFromTodayPlan: (exerciseId: number) => void;
  removeFromSavePlan: (exerciseId: number) => void;
  isTodayPlanFull: boolean;
  isLoaded: boolean;
}

export const ExercisesContext = createContext<IExercisesContext | null>(null);

const ExercisesProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IExercise[]>([]);
  const [savePlan, setSavePlan] = useState<IExercise[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    try {
      const storedToday = localStorage.getItem("exercise_today_plan");
      if (storedToday) {
        setTodayPlan(JSON.parse(storedToday));
      }

      const storedSave = localStorage.getItem("exercise_save_plan");
      if (storedSave) {
        setSavePlan(JSON.parse(storedSave));
      }
    } catch (error) {
      console.error("Failed to load plans from localStorage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("exercise_today_plan", JSON.stringify(todayPlan));
    } catch (error) {
      console.error("Failed to save todayPlan to localStorage:", error);
    }
  }, [todayPlan, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("exercise_save_plan", JSON.stringify(savePlan));
    } catch (error) {
      console.error("Failed to save savePlan to localStorage:", error);
    }
  }, [savePlan, isLoaded]);

  const isTodayPlanFull = todayPlan.length >= MAX_TODAY_PLAN;

  const addToTodayPlan = (exercise: IExercise): boolean => {
    if (todayPlan.length >= MAX_TODAY_PLAN) {
      alert(`You can only add up to ${MAX_TODAY_PLAN} exercises to Today's Plan!`);
      return false;
    }

    const isAlreadyAdded = todayPlan.some((item) => item.id === exercise.id);
    if (isAlreadyAdded) {
      alert("This exercise is already in your Today's Plan!");
      return false;
    }

    setTodayPlan((prev) => [...prev, exercise]);
    return true;
  };

  const addToSavePlan = (exercise: IExercise): boolean => {
    const isAlreadySaved = savePlan.some((item) => item.id === exercise.id);
    if (isAlreadySaved) {
      alert("This exercise is already saved!");
      return false;
    }

    setSavePlan((prev) => [...prev, exercise]);
    return true;
  };

  const removeFromTodayPlan = (exerciseId: number) => {
    setTodayPlan((prev) => prev.filter((exercise) => exercise.id !== exerciseId));
  };

  const removeFromSavePlan = (exerciseId: number) => {
    setSavePlan((prev) => prev.filter((exercise) => exercise.id !== exerciseId));
  };

  const sharedData: IExercisesContext = {
    todayPlan,
    setTodayPlan,
    savePlan,
    setSavePlan,
    addToTodayPlan,
    addToSavePlan,
    removeFromTodayPlan,
    removeFromSavePlan,
    isTodayPlanFull,
    isLoaded,
  };

  return (
    <ExercisesContext.Provider value={sharedData}>
      {children}
    </ExercisesContext.Provider>
  );
};

export const useExercises = () => {
  const context = useContext(ExercisesContext);
  if (!context) {
    throw new Error("useExercises must be used within an ExercisesProvider");
  }
  return context;
};

export default ExercisesProvider;