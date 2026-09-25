"use client";
import Image from "next/image";
import { IExercise } from "@/types/exercieses.type";
interface ExercisePlanCardProps {
  exercise: IExercise;
}
const ExercisePlanCard = ({ exercise }: ExercisePlanCardProps) => {
  return (
    <div className="flex items-center gap-4 border-b border-[#252a33] bg-[#0f1218] px-4 py-3">
      {" "}
      {/* IMAGE */}{" "}
      <div className="relative h-12 w-20 shrink-0 overflow-hidden rounded-md">
        {" "}
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover"
        />{" "}
      </div>{" "}
      {/* INFO */}{" "}
      <div className="min-w-0 flex-1">
        {" "}
        <h3 className="truncate text-xs font-bold uppercase text-white">
          {" "}
          {exercise.name}{" "}
        </h3>{" "}
        <p className="mt-0.5 text-[9px] text-gray-500">
          {" "}
          {exercise.muscleGroups?.join(", ")}{" "}
        </p>{" "}
        <div className="mt-1 flex items-center gap-3 text-[9px] text-gray-400">
          {" "}
          <span>◷ {exercise.duration} min</span>{" "}
          <span>🔥 {exercise.caloriesBurned} kcal</span>{" "}
          <span>☆ {exercise.rating}</span>{" "}
        </div>{" "}
      </div>{" "}
      {/* ACTIONS */}{" "}
      <div className="flex shrink-0 items-center gap-2">
        {" "}
        <button
          type="button"
          className="rounded-full border border-gray-700 px-3 py-1.5 text-[9px] text-gray-300 transition hover:bg-gray-800"
        >
          {" "}
          View Details{" "}
        </button>{" "}
        <button
          type="button"
          className="rounded-full bg-lime-400 px-3 py-1.5 text-[9px] font-bold text-black transition hover:bg-lime-300"
        >
          {" "}
          ✓ Mark as Done{" "}
        </button>{" "}
        <button
          type="button"
          className="px-1 text-xs text-gray-500 transition hover:text-white"
        >
          {" "}
          ×{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};
export default ExercisePlanCard;
