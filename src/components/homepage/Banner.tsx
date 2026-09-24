import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto my-6 px-4 sm:my-8 sm:px-6 lg:px-0">
      <div className="flex flex-col items-center overflow-hidden rounded-lg border border-[#292c33] bg-[#15171D] px-5 py-6 text-center text-white sm:px-8 sm:py-8 md:flex-row md:items-center md:justify-between md:px-8 md:py-8 md:text-left lg:px-10 lg:py-6">
        {/* LEFT CONTENT */}
        <div className="flex w-full flex-col items-center md:w-[55%] md:items-start lg:w-[58%]">
          {/* Small Title */}
          <p className="mb-3 text-[8px] font-bold uppercase tracking-wider text-[#C2F800] sm:text-[9px]">
            WORKOUT LIBRARY
          </p>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-4xl md:text-4xl lg:text-5xl">
            TRAIN WITH INTENT. LOG <br /> EVERY SET.
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-md text-[10px] leading-relaxed text-gray-400 sm:text-xs md:text-[10px]">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today's plan, and watch the week's work
            add up.
          </p>

          {/* Button */}
          <button className=" mt-5 rounded-md bg-[#C2F800] px-4 py-2 text-[9px] font-bold uppercase text-black transition duration-300 hover:bg-[#a8d800] sm:px-5 sm:py-2.5">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-6 flex w-full items-center justify-center sm:mt-8 md:mt-0 md:w-[45%] md:justify-end lg:w-[42%]">
          <Image
            src={bannerImage}
            alt="Person working out"
            priority
            className="h-auto w-[180px] object-contain sm:w-[220px] md:w-[230px] lg:w-[280px] "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;