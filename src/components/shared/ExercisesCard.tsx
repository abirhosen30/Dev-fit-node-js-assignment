import Image from "next/image";
import React from "react";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["500", "600"] });

export type Exercise = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty?: string;
  duration: number;
  caloriesBurned: number;
  sets?: number;
  reps?: string;
  rating: number;
  description?: string;
  instructions?: string[];
};

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const FlameIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor">
    <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z" />
  </svg>
);

const ExerciseCard = ({ exercise }: { exercise: Exercise }) => {
  return (
    <div className="w-full overflow-hidden rounded-[20px] bg-[#141821] text-white shadow-lg">
      {/* Image (full, no crop) */}
      <Image
        src={exercise.image}
        alt={exercise.name}
        width={740}
        height={740}
        sizes="(max-width: 640px) 100vw, 320px"
        className="block h-auto w-full"
      />

      {/* Content */}
      <div className="px-[18px] pb-[18px] pt-4">
        {/* Muscle groups */}
        <div className="flex flex-wrap gap-2">
          {exercise.muscleGroups?.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#A6F000] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#0d1400]"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2
          className={`${oswald.className} mb-1 mt-3 text-2xl font-semibold uppercase leading-[1.15] tracking-wide`}
        >
          {exercise.name}
        </h2>

        {/* Equipment */}
        <p className="mb-3.5 text-sm text-[#9aa3b2]">{exercise.equipment}</p>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#9aa3b2]">
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon />
            {exercise.duration} min
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FlameIcon />
            {exercise.caloriesBurned} kcal
          </span>
          <span className="inline-flex items-center gap-1.5">
            <StarIcon />
            {exercise.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;