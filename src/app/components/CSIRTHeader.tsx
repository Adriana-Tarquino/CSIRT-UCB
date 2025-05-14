"use client";
import Link from "next/link";

export const CSIRTHeader = () => {
  return (
    <header className="bg-[#0a0f1a] text-white px-6 py-4 border-b border-gray-700 ">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center">
          <svg
            aria-hidden="true"
            className="m-2 w-6 h-6 stroke-[#d9f99d]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L3 5v6c0 5 3 9 9 11 6-2 9-6 9-11V5l-9-3z"></path>
          </svg>
          <span className="font-bold text-xl">CSIRT UCB</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="hover:text-lime-400 transition-colors">
            ACERCA DE
          </Link>
          <Link
            href="#calendar"
            className="hover:text-lime-400 transition-colors"
          >
            CALENDARIO
          </Link>
          <Link
            href="#events"
            className="hover:text-lime-400 transition-colors"
          >
            PRÓXIMOS EVENTOS
          </Link>
          <Link href="#team" className="hover:text-lime-400 transition-colors">
            MIEMBROS
          </Link>
          <Link
            href="/"
            className="text-lime-400 font-bold hover:text-lime-300 transition-colors"
          >
            PRACTICAR
          </Link>
        </nav>
      </div>
    </header>
  );
};
