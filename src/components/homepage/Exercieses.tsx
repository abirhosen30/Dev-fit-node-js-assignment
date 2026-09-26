import React from "react";
import ExercisesCard from "../shared/ExercisesCard";
import { IExercise } from "@/types/exercieses.type";
import Link from "next/link";

const getExercises = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  const data = await res.json();

  return data;
};

const Exercises = async () => {
  const exercisesData = await getExercises();

  return (
    <section id="Exercises" className="container mx-auto py-10 px-4">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-4">THE LIBRARY</h2>
      <p className="text-gray-600 mb-8">Twelve lifts covering every major muscle group.</p>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercisesData.map((exercise: IExercise, ind: number) => {
          return (
            <Link href={`/details/${exercise.id}`} key={ind}>
              <ExercisesCard exercise={exercise} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Exercises;