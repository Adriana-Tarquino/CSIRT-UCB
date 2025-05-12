export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#0f1528] border-b border-gray-700">
      <h1 className="text-lime-400 font-bold text-lg">🛡 CSIRT UCB</h1>
      <ul className="flex gap-6 text-sm">
        <li className="hover:text-lime-400 cursor-pointer">ACERCA DE</li>
        <li className="hover:text-lime-400 cursor-pointer">CALENDARIO</li>
        <li className="hover:text-lime-400 cursor-pointer">PRÓXIMOS EVENTOS</li>
        <li className="hover:text-lime-400 cursor-pointer">MIEMBROS</li>
        <li className="text-lime-400 font-semibold cursor-pointer">PRACTICAR</li>
      </ul>
    </nav>
  );
}