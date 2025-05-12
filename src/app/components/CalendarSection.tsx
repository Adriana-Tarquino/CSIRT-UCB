export default function CalendarSection() {
  return (
    <section className="p-8">
      <h3 className="text-lime-400 text-xl font-bold mb-4">Calendario mensual CSIRT</h3>
      <div className="bg-[#101928] border border-lime-400 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Calendar mock */}
        <div>
          <div className="text-sm text-center mb-2 text-gray-300">Mayo 2025</div>
          <div className="grid grid-cols-7 gap-1 text-center text-gray-300 text-sm">
            {["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"].map((d) => (
              <div key={d} className="font-bold text-lime-400">{d}</div>
            ))}
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className={`py-1 rounded ${i === 10 ? "bg-lime-400 text-black" : "hover:bg-lime-600"}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        {/* Events */}
        <div>
          <h4 className="text-center text-sm text-lime-300 mb-2">EVENTOS PARA 11 MAYO</h4>
          <ul className="text-sm text-gray-200">
            {[1, 2, 3].map((e) => (
              <li key={e} className="border-b border-gray-600 py-2">
                <p className="font-bold">Criptografía</p>
                <p>10:00 - 11:30 &nbsp; | &nbsp; Laboratorio A1-11</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}