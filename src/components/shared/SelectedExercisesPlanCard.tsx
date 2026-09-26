"use client";

import Image from "next/image";
import { IExercise } from "@/types/exercieses.type";
import Link from "next/link";
import { toast } from "react-toastify";
import { Check, X } from "lucide-react";

interface ExercisePlanCardProps {
  exercise: IExercise;
  removeFromTodayPlan: (id: number) => void;
}

const ExercisePlanCard = ({
  exercise,
  removeFromTodayPlan,
}: ExercisePlanCardProps) => {

  // Mark as Done
  const handleMarkAsDone = () => {
    toast.success(`"${exercise.name}" marked as done`);

    removeFromTodayPlan(exercise.id);
  };

  // Remove from plan
  const handleRemove = () => {
    toast.success(`"${exercise.name}" removed from plan`);

    removeFromTodayPlan(exercise.id);
  };

  return (
    <div className="mb-4 flex items-center gap-4 border-b border-[#252a33] bg-[#0f1218] px-4 py-3">

      {/* IMAGE */}
      <div className="relative h-12 w-20 shrink-0 overflow-hidden rounded-md">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover"
        />
      </div>

      {/* INFO */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-xs font-bold uppercase text-white">
          {exercise.name}
        </h3>

        <p className="mt-0.5 text-[9px] text-gray-500">
          {exercise.muscleGroups?.join(", ")}
        </p>

        <div className="mt-1 flex items-center gap-3 text-[9px] text-gray-400">
          <span>◷ {exercise.duration} min</span>
          <span>🔥 {exercise.caloriesBurned} kcal</span>
          <span>☆ {exercise.rating}</span>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex shrink-0 items-center gap-2">

        {/* View Details */}
        <Link
          href={`/details/${exercise.id}`}
          className="flex items-center gap-2 rounded-full border border-gray-700 px-3 py-1.5 text-[9px] text-gray-300 transition hover:bg-gray-800"
        >
          View Details
        </Link>

        {/* Mark as Done */}
        <button
          type="button"
          onClick={handleMarkAsDone}
          className="flex items-center gap-1.5 rounded-full bg-lime-400 px-3 py-1.5 text-[9px] font-bold text-black transition hover:bg-lime-300"
        >
          <Check size={12} strokeWidth={3} />
          Mark as Done
        </button>

        {/* Remove */}
        <button
          type="button"
          onClick={handleRemove}
          aria-label="Remove from plan"
          className="flex items-center justify-center px-1 text-xs text-gray-500 transition hover:text-white"
        >
          <X size={15} />
        </button>

      </div>
    </div>
  );
};

export default ExercisePlanCard;

