'use client';
import Link from 'next/link';

export const CSIRTHeader = () => {
  return (
    <header className="bg-[#0a0f1a] text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center">
          <span className="text-lime-400 mr-2">◑</span>
          <span className="font-bold text-xl">CSIRT UCB</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/acerca-de" className="hover:text-lime-400 transition-colors">
            ACERCA DE
          </Link>
          <Link href="/calendario" className="hover:text-lime-400 transition-colors">
            CALENDARIO
          </Link>
          <Link href="/proximos-eventos" className="hover:text-lime-400 transition-colors">
            PRÓXIMOS EVENTOS
          </Link>
          <Link href="/miembros" className="hover:text-lime-400 transition-colors">
            MIEMBROS
          </Link>
          <Link href="/practicar" className="text-lime-400 font-bold hover:text-lime-300 transition-colors">
            PRACTICAR
          </Link>
        </nav>
      </div>
    </header>
  );
};
