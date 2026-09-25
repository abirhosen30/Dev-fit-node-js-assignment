import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="min-h-14 bg-[#1c1c1e] px-4 text-white shadow-sm">
      <div className="container mx-auto flex min-h-14 w-full items-center justify-between">

        {/* Logo */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-bold"
          >
            <Image
              src={logo}
              alt="FITLOG Logo"
              width={20}
              height={24}
              className="h-6 w-6"
            />

            <span>FITLOG</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-2">

            {/* Workouts */}
            <li>
              <Link
                href="/"
                className="
                  rounded-full
                  bg-[#273600]
                  px-3 py-1
                  text-[10px]
                  font-medium
                  text-[#b7f000]
                  hover:bg-[#344900]
                "
              >
                Workouts
              </Link>
            </li>

            {/* My Plan */}
            <li>
              <Link
                href="/context/ExercisesContext"
                className="
                  px-3 py-1
                  text-[10px]
                  text-gray-400
                  hover:text-white
                "
              >
                My Plan
              </Link>
            </li>

          </ul>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-5 text-[10px] md:flex">

          {/* Plan */}
          <Link
            href="/plan"
            className="flex items-center gap-1 text-gray-400 hover:text-white"
          >
            <span>Plan</span>

            <span
              className="
                flex h-3.5 w-3.5
                items-center justify-center
                rounded-full
                bg-[#b7f000]
                text-[8px]
                font-bold
                text-black
              "
            >
              0
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/saved"
            className="flex items-center gap-1 text-gray-400 hover:text-white"
          >
            <span>Saved</span>

            <span
              className="
                flex h-3.5 w-3.5
                items-center justify-center
                rounded-full
                bg-[#b7f000]
                text-[8px]
                font-bold
                text-black
              "
            >
              0
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
              className="h-5 w-5"
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
              w-40
              rounded-box
              bg-[#1c1c1e]
              p-2
              shadow-lg
            "
          >
            <li>
              <Link href="/" className="text-[#b7f000]">
                Workouts
              </Link>
            </li>

            <li>
              <Link href="/context/ExercisesContext" className="text-gray-400">
                My Plan
              </Link>
            </li>

            <li>
              <Link
                href="/plan"
                className="flex items-center justify-between text-gray-400"
              >
                <span>Plan</span>
                <span>0</span>
              </Link>
            </li>

            <li>
              <Link
                href="/saved"
                className="flex items-center justify-between text-gray-400"
              >
                <span>Saved</span>
                <span>0</span>
              </Link>
            </li>
          </ul>

        </div>

      </div>
    </div>
  );
};

export default NavBar;