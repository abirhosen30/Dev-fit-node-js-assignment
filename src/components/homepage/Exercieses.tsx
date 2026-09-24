import React from "react";
import ExercisesCard from "../shared/ExercisesCard";
import { IExercise } from "@/types/exercieses.type";

const getExercises = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  const data = await res.json();

  return data;
};

const Exercises = async () => {
  const exercisesData = await getExercises();

  return (
    <section className="container mx-auto py-10 px-4">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-8">Books</h2>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercisesData.map((exercise: IExercise, ind: number) => {
          return <ExercisesCard key={ind} exercise={exercise} />;
        })}
      </div>
    </section>
  );
};

export default Exercises;