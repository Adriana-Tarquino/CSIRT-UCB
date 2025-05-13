'use client';
import Link from 'next/link';

export const CSIRTHero = () => {
  return (
    <div className="relative bg-[#0a0f1a] text-white">
      <div 
        className="w-full h-64 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cg fill='none' stroke='%2332ff00' stroke-opacity='0.15' stroke-width='1'%3E%3Crect x='0' y='0' width='50' height='50'/%3E%3Cg transform='translate(25 25)'%3E%3Ctext x='0' y='0' font-family='monospace' font-size='20' text-anchor='middle' dominant-baseline='middle' fill='%2332ff00'%3E0%3C/text%3E%3C/g%3E%3Crect x='50' y='0' width='50' height='50'/%3E%3Cg transform='translate(75 25)'%3E%3Ctext x='0' y='0' font-family='monospace' font-size='20' text-anchor='middle' dominant-baseline='middle' fill='%2332ff00'%3E1%3C/text%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundColor: '#0a0f1a'
        }}
      >
        <div className="absolute inset-0 bg-[#0a0f1a] bg-opacity-40 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">CSIRT UCB</h1>
          <p className="text-xl md:text-2xl mb-6">Computer Security Incident Response Team</p>
          <Link href="/practicar" 
                className="bg-lime-400 hover:bg-lime-500 text-[#0a0f1a] font-bold py-2 px-6 rounded-md transition-colors">
            Practicar
          </Link>
        </div>
      </div>
    </div>
  );
};
