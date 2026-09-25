"use client";

import { IExercise } from "@/types/exercieses.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { ExercisesContext } from "@/context/ExercisesContext";

interface SavePlanButtonProps {
  exercise: IExercise;
}

const SavePlanButton = ({ exercise }: SavePlanButtonProps) => {
  const context = useContext(ExercisesContext);

  if (!context) {
    throw new Error(
      "SavePlanButton must be used inside ExercisesProvider"
    );
  }

  const { savePlan, setSavePlan } = context;

  const handleAddToSavePlan = () => {
    console.log("Add to save plan btn triggered", exercise);

    const alreadyInPlan = savePlan.some(
      (planExercise) => planExercise.id === exercise.id
    );

    if (alreadyInPlan) {
      toast.error(
        `"${exercise.name}" is already in your save plan.`
      );
      return;
    }

    setSavePlan((currentPlan) => [
      ...currentPlan,
      exercise,
    ]);

    toast.success(
      `"${exercise.name}" added to your save plan`
    );
  };

  return (
    <button
      type="button"
      className="rounded-md border border-gray-700 text-white px-4 py-2 text-xs font-bold text-black transition hover:bg-gray-700"
      onClick={handleAddToSavePlan}
    >
      Save for later
    </button>
  );
};

export default SavePlanButton;