"use client";

import React, { useContext, useState } from "react";
import ExercisePlanCard from "@/components/shared/SelectedExercisesCard";
import { ExercisesContext } from "@/context/ExercisesContext";
import { IExercise } from "@/types/exercieses.type";

const page = () => {
  const context = useContext(ExercisesContext);
  if (!context) {
    throw new Error("page must be used inside ExercisesProvider");
  }
  const { todayPlan, savePlan } = context;

  const [sortBy, setSortBy] = useState<"rating" | "duration" | "calories">(
    "rating",
  );

  const sortExercises = (exercises: IExercise[]) => {
    const sortedExercises = [...exercises];
    if (sortBy === "rating") {
      return sortedExercises.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "duration") {
      return sortedExercises.sort((a, b) => b.duration - a.duration);
    } else {
      return sortedExercises.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    return sortedExercises;
  };

  const sortedTodayPlan = sortExercises(todayPlan);
  const sortedSavePlan = sortExercises(savePlan);

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-3xl font-bold text-white">MY PLAN</h2>
      <p className="text-gray-400 text-[12px]">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      <div className="rounded-xl border border-[#252a33] bg-[#12161e] px-5 py-4 mt-6">
        <div className="grid grid-cols-3 divide-x divide-[#252a33]">
          {/* Exercises */}
          <div className="px-4 first:pl-0">
            <p className="text-[15px] text-gray-500">Exercises</p>

            <p className="mt-1 text-2xl font-bold">2</p>
          </div>

          {/* Minutes */}
          <div className="px-6">
            <p className="text-[15px] text-gray-500">Minutes</p>

            <p className="mt-1 text-2xl font-bold text-white">23</p>
          </div>

          {/* Calories */}
          <div className="px-6 last:pr-0">
            <p className="text-[15px] text-gray-500">Calories</p>

            <p className="mt-1 text-2xl font-bold text-white">190</p>
          </div>
        </div>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Today’s Plan"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Today’s Plan
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Saved"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "duration" | "calories")
          }
          className="select select-success"
        >
          <option value="rating">Rating</option>
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
        </select>

         <div className="tab-content border-base-300 bg-base-100 p-10">
          {sortedTodayPlan.length > 0 ? (
            sortedTodayPlan.map((exercise) => (
              <ExercisePlanCard key={exercise.id} exercise={exercise} />
            ))
          ) : (
            <p className="flex items-center justify-center text-gray-500">
              No exercises in today's plan.
            </p>
          )}
        </div>

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {sortedSavePlan.length > 0 ? (
            sortedSavePlan.map((exercise) => (
              <ExercisePlanCard key={exercise.id} exercise={exercise} />
            ))
          ) : (
            <p className="flex items-center justify-center text-gray-500">
              No exercises in saved plan.
            </p>
          )}
        </div>

      </div>


    </div>
  );
};

export default page;
