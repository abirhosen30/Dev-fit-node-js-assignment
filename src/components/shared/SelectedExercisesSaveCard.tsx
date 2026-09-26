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

        {/* Remove */}
        <button
          type="button"
          aria-label="Remove from saved plan"
          onClick={handleRemove}
          className="flex items-center justify-center px-1 text-gray-500 transition hover:text-white"
        >
          <X size={15} />
        </button>

      </div>
    </div>
  );
};

export default ExerciseSaveCard;

