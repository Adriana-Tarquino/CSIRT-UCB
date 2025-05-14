"use client";
import Link from "next/link";
import Image from "next/image";

export const CSIRTHero = () => {
  return (
    <div className="relative overflow-hidden " id="hero">
<Image
  src="https://storage.googleapis.com/a1aa/image/a721a727-9179-48ca-b173-6fd23e36a2e3.jpg"
  alt="Matrix style green binary code vertical lines on black background"
  width={1200}
  height={200}
  className="w-full h-60 object-cover"
/>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 p-t">
        <h1 className="text-[#d9f99d] text-5xl font-semibold leading-tight">
          CSIRT UCB
        </h1>
        <p className="text-white text-sm sm:text-base font-normal mt-1">
          Computer Security Incident Response Team
        </p>
        <Link href="/">
        <button className="mt-3 bg-[#d9f99d] text-black text-xs sm:text-sm font-semibold rounded px-3 py-1 cursor-pointer">
          Practicar
        </button>
        </Link>
      </div>
    </div>
  );
};
