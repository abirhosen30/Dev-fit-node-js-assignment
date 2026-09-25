"use client";

import { IExercise } from "@/types/exercieses.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { ExercisesContext } from "@/context/ExercisesContext";

interface TodayPlanButtonProps {
  exercise: IExercise;
}

const TodayPlanButton = ({ exercise }: TodayPlanButtonProps) => {
  const context = useContext(ExercisesContext);

  if (!context) {
    throw new Error(
      "TodayPlanButton must be used inside ExercisesProvider"
    );
  }

  const { todayPlan, setTodayPlan } = context;

  const handleAddToTodayPlan = () => {
    console.log("Add to today plan btn triggered", exercise);

    const alreadyInPlan = todayPlan.some(
      (planExercise) => planExercise.id === exercise.id
    );

    if (alreadyInPlan) {
      toast.error(
        `"${exercise.name}" is already in today's plan.`
      );
      return;
    }

    setTodayPlan((currentPlan) => [
      ...currentPlan,
      exercise,
    ]);

    toast.success(
      `"${exercise.name}" added to today's plan`
    );
  };

  return (
    <button
      type="button"
      className="rounded-md bg-lime-400 px-4 py-2 text-xs font-bold text-black transition hover:bg-lime-300"
      onClick={handleAddToTodayPlan}
    >
      Add to Today's Plan
    </button>
  );
};

export default TodayPlanButton;
