import React from "react";

const HomeLoading = () => {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg text-[#C2F800]" />

        <p className="mt-4 text-sm text-gray-400">
          Loading workouts…
        </p>
      </div>
    </div>
  );
};

export default HomeLoading;
