"use client";

import { IExercise } from "@/types/exercieses.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { Bookmark } from "lucide-react";
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
      className="flex items-center gap-2 rounded-md border border-gray-700 px-4 py-2 text-xs font-bold text-white transition hover:bg-gray-700"
      onClick={handleAddToSavePlan}
    >
      <Bookmark size={14} />
      Save for later
    </button>
  );
};

export default SavePlanButton;

