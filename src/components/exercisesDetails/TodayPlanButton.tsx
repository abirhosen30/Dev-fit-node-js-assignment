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

  const { todayPlan, setTodayPlan, isTodayPlanFull } = context;

  const handleAddToTodayPlan = () => {
    // অলরেডি যোগ করা থাকলে আগের মতোই Toastify এরর দেখাবে
    const alreadyInPlan = todayPlan.some(
      (planExercise) => planExercise.id === exercise.id
    );

    if (alreadyInPlan) {
      toast.error(`"${exercise.name}" is already in today's plan.`);
      return;
    }

    setTodayPlan((currentPlan) => [
      ...currentPlan,
      exercise,
    ]);

    toast.success(`"${exercise.name}" added to today's plan`);
  };

  return (
    <button
      type="button"
      disabled={isTodayPlanFull}
      onClick={handleAddToTodayPlan}
      className={`rounded-md px-4 py-2 text-xs font-bold transition ${
        isTodayPlanFull
          ? "cursor-not-allowed bg-zinc-600 text-zinc-400 opacity-60"
          : "bg-lime-400 text-black hover:bg-lime-300"
      }`}
    >
      Add to Today&apos;s Plan
    </button>
  );
};

export default TodayPlanButton;