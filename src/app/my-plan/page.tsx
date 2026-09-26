"use client";

import React, { useContext, useState } from "react";
import ExercisePlanCard from "@/components/shared/SelectedExercisesPlanCard";
import { ExercisesContext } from "@/context/ExercisesContext";
import { IExercise } from "@/types/exercieses.type";
import ExerciseSaveCard from "@/components/shared/SelectedExercisesSaveCard";
import Link from "next/link";

const Page = () => {
  const context = useContext(ExercisesContext);

  if (!context) {
    throw new Error("Page must be used inside ExercisesProvider");
  }

  const { todayPlan, savePlan, removeFromTodayPlan, removeFromSavePlan } =
    context;

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  // Default sort changed to duration
  const [sortBy, setSortBy] = useState<
    "rating" | "duration" | "calories"
  >("duration");

  // Sort exercises
  const sortExercises = (exercises: IExercise[]) => {
    const sortedExercises = [...exercises];

    if (sortBy === "rating") {
      sortedExercises.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "duration") {
      sortedExercises.sort((a, b) => b.duration - a.duration);
    } else {
      sortedExercises.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    return sortedExercises;
  };

  const sortedTodayPlan = sortExercises(todayPlan || []);
  const sortedSavePlan = sortExercises(savePlan || []);

  // Selected tab plan
  const currentPlan = activeTab === "today" ? todayPlan || [] : savePlan || [];

  // Statistics
  const totalMinutes = currentPlan.reduce(
    (total, exercise) => total + Number(exercise.duration || 0),
    0,
  );

  const totalCalories = currentPlan.reduce(
    (total, exercise) => total + Number(exercise.caloriesBurned || 0),
    0,
  );

  return (
    <div className="container mx-auto mt-8 px-4">
      {/* HEADER */}
      <h2 className="text-3xl font-bold text-white">MY PLAN</h2>

      <p className="text-[12px] text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* STATS */}
      <div className="mt-6 rounded-xl border border-[#252a33] bg-[#12161e] px-5 py-4">
        <div className="grid grid-cols-3 divide-x divide-[#252a33]">
          {/* Exercises */}
          <div className="px-4 first:pl-0">
            <p className="text-[11px] text-gray-500">Exercises</p>

            <p className="mt-1 text-2xl font-bold text-lime-400">
              {currentPlan.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="px-6">
            <p className="text-[11px] text-gray-500">Minutes</p>

            <p className="mt-1 text-2xl font-bold text-white">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="px-6 last:pr-0">
            <p className="text-[11px] text-gray-500">Calories</p>

            <p className="mt-1 text-2xl font-bold text-white">
              {totalCalories}
            </p>
          </div>
        </div>
      </div>

      {/* TABS + SORT */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="tabs tabs-box">
          {/* TODAY'S PLAN TAB */}
          <input
            type="radio"
            name="my_plan_tabs"
            className="tab"
            aria-label="Today's Plan"
            checked={activeTab === "today"}
            onChange={() => setActiveTab("today")}
          />

          {/* SAVED TAB */}
          <input
            type="radio"
            name="my_plan_tabs"
            className="tab"
            aria-label="Saved"
            checked={activeTab === "saved"}
            onChange={() => setActiveTab("saved")}
          />
        </div>

        {/* SORT */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-[10px] text-gray-500">Sort By</span>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as "rating" | "duration" | "calories",
                )
              }
              className="select select-sm min-w-[120px] appearance-none border-gray-700 bg-[#12161e] px-3 pr-8 text-xs text-gray-300 outline-none"
            >
              <option value="duration">Duration</option>
              <option value="rating">Rating</option>
              <option value="calories">Calories</option>
            </select>
          </div>
        </div>
      </div>

      {/* TABS CONTENT */}
      <div className="mt-4">
        {activeTab === "today" ? (
          sortedTodayPlan.length > 0 ? (
            <div className="overflow-hidden rounded-lg border border-[#252a33]">
              {sortedTodayPlan.map((exercise) => (
                <ExercisePlanCard
                  key={exercise.id}
                  exercise={exercise}
                  removeFromTodayPlan={removeFromTodayPlan}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-[#252a33] bg-[#12161e] py-10 text-center">
              <h2>NOTHING HERE YET</h2>

              <p className="mt-2 text-sm text-gray-400">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/#Exercises"
                className="mt-4 rounded-[60px] bg-[#C2F800] px-4 py-2 text-sm font-medium text-black transition hover:bg-[#a8d800]"
              >
                Go to workouts
              </Link>
            </div>
          )
        ) : sortedSavePlan.length > 0 ? (
          <div className="overflow-hidden rounded-lg border border-[#252a33]">
            {sortedSavePlan.map((exercise) => (
              <ExerciseSaveCard
                key={exercise.id}
                exercise={exercise}
                removeFromSavePlan={removeFromSavePlan}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg border border-[#252a33] bg-[#12161e] py-10 text-center">
            <h2>NOTHING HERE YET</h2>

            <p className="mt-2 text-sm text-gray-400">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/#Exercises"
              className="mt-4 rounded-[60px] bg-[#C2F800] px-4 py-2 text-sm font-medium text-black transition hover:bg-[#a8d800]"
            >
              Go to workouts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

