import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0d0e10] px-4 py-5 text-gray-500">
      <div className="container mx-auto flex items-center justify-between">

        {/* Left Side - Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[9px] font-bold text-white"
        >
          <Image
            src={logo}
            alt="FITLOG Logo"
            width={16}
            height={16}
            className="h-4 w-4"
          />

          <span>FITLOG</span>
        </Link>

        {/* Right Side - Copyright */}
        <p className="text-[8px] text-gray-600">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;