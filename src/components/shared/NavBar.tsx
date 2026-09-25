"use client";

import Image from "next/image";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExercisesContext } from "@/context/ExercisesContext";

const NavBar = () => {
  const pathname = usePathname();

  const context = useContext(ExercisesContext);
  const todayCount = context?.todayPlan?.length || 0;
  const savedCount = context?.savePlan?.length || 0;

  return (
    <div className="min-h-16 bg-[#1c1c1e] px-4 md:px-8 text-white shadow-sm flex items-center">
      <div className="container mx-auto flex min-h-16 w-full items-center justify-between">

        {/* Logo */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-2.5 text-base md:text-lg font-bold tracking-wide"
          >
            <Image
              src={logo}
              alt="FITLOG Logo"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span>FITLOG</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-3">

            {/* Workouts */}
            <li>
              <Link
                href="/"
                className={`px-4 py-1.5 text-xs md:text-sm font-medium transition-all ${
                  pathname === "/"
                    ? "rounded-full bg-[#273600] text-[#b7f000] hover:bg-[#344900]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Workouts
              </Link>
            </li>

            {/* My Plan */}
            <li>
              <Link
                href="/my-page"
                className={`px-4 py-1.5 text-xs md:text-sm font-medium transition-all ${
                  pathname === "/my-page"
                    ? "rounded-full bg-[#273600] text-[#b7f000] hover:bg-[#344900]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                My Plan
              </Link>
            </li>

          </ul>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-6 text-xs md:text-sm font-medium md:flex">

          {/* Plan */}
          <Link
            href="/my-page"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>Plan</span>
            <span
              className="
                flex h-5 w-5
                items-center justify-center
                rounded-full
                bg-[#b7f000]
                text-[11px]
                font-bold
                text-black
              "
            >
              {todayCount}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-page"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>Saved</span>
            <span
              className="
                flex h-5 w-5
                items-center justify-center
                rounded-full
                bg-[#b7f000]
                text-[11px]
                font-bold
                text-black
              "
            >
              {savedCount}
            </span>
          </Link>

        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end md:hidden">

          <button
            tabIndex={0}
            className="btn btn-ghost btn-sm text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="
              menu
              dropdown-content
              z-[1]
              mt-3
              w-44
              rounded-box
              bg-[#1c1c1e]
              p-3
              text-sm
              shadow-lg
            "
          >
            <li>
              <Link
                href="/"
                className={pathname === "/" ? "font-bold text-[#b7f000]" : "text-gray-400"}
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                href="/my-page"
                className={pathname === "/my-page" ? "font-bold text-[#b7f000]" : "text-gray-400"}
              >
                My Plan
              </Link>
            </li>

            <li>
              <Link
                href="/my-page"
                className="flex items-center justify-between text-gray-400"
              >
                <span>Plan</span>
                <span className="font-bold text-[#b7f000]">{todayCount}</span>
              </Link>
            </li>

            <li>
              <Link
                href="/my-page"
                className="flex items-center justify-between text-gray-400"
              >
                <span>Saved</span>
                <span className="font-bold text-[#b7f000]">{savedCount}</span>
              </Link>
            </li>
          </ul>

        </div>

      </div>
    </div>
  );
};

export default NavBar;