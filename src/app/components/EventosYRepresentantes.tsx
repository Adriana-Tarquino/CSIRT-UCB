// src/components/EventosYRepresentantes.tsx

export default function EventosYRepresentantes() {
  return (
    <section className="bg-[#0a0f1a] text-white px-6 py-12">
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-lime-400 mb-8">Próximos eventos</h2>
        <div className="bg-[#101624] p-6 rounded-xl flex flex-col items-center text-center max-w-md mx-auto">
          <div className="w-32 h-32 bg-gray-300 rounded-full mb-4" />
          <p className="text-sm text-gray-400">7 noviembre 2025</p>
          <p className="text-lg font-semibold">Capture the flag 2025</p>
          <p className="text-sm text-gray-400">Agetic</p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-lime-400 mb-8">Representantes del CTF</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="bg-[#101624] p-4 rounded-xl text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4" />
              <p className="font-semibold">Nombre y apellido</p>
              <p className="text-sm text-gray-400">Carrera</p>
              <p className="text-sm text-lime-400">area de interés</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}