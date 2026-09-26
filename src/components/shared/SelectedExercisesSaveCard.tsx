"use client";

import Image from "next/image";
import { IExercise } from "@/types/exercieses.type";
import Link from "next/link";
import { toast } from "react-toastify";
import { X } from "lucide-react";

interface ExerciseSaveCardProps {
  exercise: IExercise;
  removeFromSavePlan: (id: number) => void;
}

const ExerciseSaveCard = ({
  exercise,
  removeFromSavePlan,
}: ExerciseSaveCardProps) => {

  const handleRemove = () => {
    removeFromSavePlan(exercise.id);
    toast.success(`"${exercise.name}" removed from saved plan`);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#252a33] bg-[#0f1218] p-3 sm:px-4 sm:py-3 transition-colors hover:bg-[#131720]">
      
      {/* LEFT: IMAGE & INFO */}
      <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
        {/* IMAGE */}
        <div className="relative h-14 w-20 sm:h-12 sm:w-20 shrink-0 overflow-hidden rounded-md border border-gray-800">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover"
          />
        </div>

        {/* INFO */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-xs sm:text-sm font-bold uppercase text-white">
            {exercise.name}
          </h3>

          <p className="mt-0.5 truncate text-[10px] text-gray-400">
            {exercise.muscleGroups?.join(", ")}
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] text-gray-400">
            <span>◷ {exercise.duration} min</span>
            <span>🔥 {exercise.caloriesBurned} kcal</span>
            <span>☆ {exercise.rating}</span>
          </div>
        </div>

        {/* MOBILE DELETE BUTTON */}
        <button
          type="button"
          onClick={handleRemove}
          aria-label="Remove from saved plan"
          className="flex sm:hidden items-center justify-center p-1.5 text-gray-400 hover:text-red-400"
        >
          <X size={16} />
        </button>
      </div>

      {/* RIGHT: ACTIONS */}
      <div className="flex items-center justify-between sm:justify-end gap-2 pt-2 sm:pt-0 border-t border-gray-800/60 sm:border-0">
        <Link
          href={`/details/${exercise.id}`}
          className="flex-1 sm:flex-none text-center rounded-full border border-gray-700 px-4 py-1.5 text-[10px] sm:text-xs text-gray-300 transition hover:bg-gray-800"
        >
          View Details
        </Link>

        {/* DESKTOP DELETE BUTTON */}
        <button
          type="button"
          onClick={handleRemove}
          aria-label="Remove from saved plan"
          className="hidden sm:flex items-center justify-center p-1.5 text-gray-400 transition hover:text-white"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default ExerciseSaveCard;