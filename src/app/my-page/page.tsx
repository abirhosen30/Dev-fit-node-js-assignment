"use client";

import React, { useContext, useState } from "react";
import ExercisePlanCard from "@/components/shared/SelectedExercisesPlanCard";
import { ExercisesContext } from "@/context/ExercisesContext";
import { IExercise } from "@/types/exercieses.type";
import ExerciseSaveCard from "@/components/shared/SelectedExercisesSaveCard";

const Page = () => {
  const context = useContext(ExercisesContext);

  if (!context) {
    throw new Error("Page must be used inside ExercisesProvider");
  }

  const { todayPlan, savePlan, removeFromTodayPlan, removeFromSavePlan } = context;

  // ১. একটি state রাখুন কোন ট্যাব সিলেক্টেড আছে ট্র্যাক করার জন্য
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const [sortBy, setSortBy] = useState<
    "rating" | "duration" | "calories"
  >("rating");

  // Sort exercises
  const sortExercises = (exercises: IExercise[]) => {
    const sortedExercises = [...exercises];

    if (sortBy === "rating") {
      sortedExercises.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "duration") {
      sortedExercises.sort((a, b) => b.duration - a.duration);
    } else {
      sortedExercises.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned
      );
    }

    return sortedExercises;
  };

  const sortedTodayPlan = sortExercises(todayPlan || []);
  const sortedSavePlan = sortExercises(savePlan || []);

  // ২. সিলেক্টেড ট্যাবের ওপর ভিত্তি করে প্ল্যান নির্ধারণ করুন
  const currentPlan = activeTab === "today" ? todayPlan || [] : savePlan || [];

  // ৩. সিলেক্টেড প্ল্যানের জন্য স্ট্যাটিসটিক্স হিসেব করুন
  const totalMinutes = currentPlan.reduce(
    (total, exercise) => total + Number(exercise.duration || 0),
    0
  );

  const totalCalories = currentPlan.reduce(
    (total, exercise) => total + Number(exercise.caloriesBurned || 0),
    0
  );

  return (
    <div className="container mx-auto mt-8 px-4">
      {/* HEADER */}
      <h2 className="text-3xl font-bold text-white">
        MY PLAN
      </h2>

      <p className="text-[12px] text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* STATS (এখন স্বয়ংক্রিয়ভাবে একটিভ ট্যাবের ডাটা দেখাবে) */}
      <div className="mt-6 rounded-xl border border-[#252a33] bg-[#12161e] px-5 py-4">
        <div className="grid grid-cols-3 divide-x divide-[#252a33]">
          
          {/* Exercises */}
          <div className="px-4 first:pl-0">
            <p className="text-[11px] text-gray-500">
              Exercises
            </p>
            <p className="mt-1 text-2xl font-bold text-lime-400">
              {currentPlan.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="px-6">
            <p className="text-[11px] text-gray-500">
              Minutes
            </p>
            <p className="mt-1 text-2xl font-bold text-white">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="px-6 last:pr-0">
            <p className="text-[11px] text-gray-500">
              Calories
            </p>
            <p className="mt-1 text-2xl font-bold text-white">
              {totalCalories}
            </p>
          </div>
        </div>
      </div>

      {/* SORT */}
      <div className="mt-5 flex items-center justify-end gap-2">
        <span className="text-[10px] text-gray-500">
          Sort By
        </span>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(
              e.target.value as
                | "rating"
                | "duration"
                | "calories"
            )
          }
          className="select select-sm border-gray-700 bg-[#12161e] text-xs text-gray-300"
        >
          <option value="rating">Rating</option>
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
        </select>
      </div>

      {/* TABS */}
      <div className="tabs tabs-box mt-4">

        {/* TODAY'S PLAN TAB */}
        <input
          type="radio"
          name="my_plan_tabs"
          className="tab"
          aria-label="Today's Plan"
          checked={activeTab === "today"}
          onChange={() => setActiveTab("today")}
        />

        <div className="tab-content border-base-300 bg-base-100 p-4">
          {sortedTodayPlan.length > 0 ? (
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
            <EmptyState message="No exercises in today's plan." />
          )}
        </div>

        {/* SAVED TAB */}
        <input
          type="radio"
          name="my_plan_tabs"
          className="tab"
          aria-label="Saved"
          checked={activeTab === "saved"}
          onChange={() => setActiveTab("saved")}
        />

        <div className="tab-content my-4 border-base-300 bg-base-100 p-4">
          {sortedSavePlan.length > 0 ? (
            <div className="overflow-hidden my-4 rounded-lg border border-[#252a33]">
              {sortedSavePlan.map((exercise) => (
                <ExerciseSaveCard
                  key={exercise.id}
                  exercise={exercise}
                  removeFromSavePlan={removeFromSavePlan}
                />
              ))}
            </div>
          ) : (
            <EmptyState message="No exercises in saved plan." />
          )}
        </div>
      </div>
    </div>
  );
};

/* EMPTY STATE */
const EmptyState = ({ message }: { message: string }) => {
  return (
    <div className="flex min-h-[180px] items-center justify-center">
      <p className="text-sm text-gray-500">
        {message}
      </p>
    </div>
  );
};

export default Page;