// src/components/EventosYRepresentantes.tsx
import Image from "next/image";
import team from "../data/team-members.json";

export default function EventosYRepresentantes() {
  return (
    <section className="bg-[#0a0f1a] text-white px-6 py-12">
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-lime-400 mb-8" id="events">
          Próximos eventos
        </h2>
        <div className="bg-[#101624] p-6 rounded-xl flex flex-col items-center text-center max-w-md mx-auto">
          <div className="w-32 h-32 bg-gray-300 rounded-full mb-4">
            {" "}
            <Image
              src="/img/banner-ctf-agetic.jpeg"
              alt="Banner del CTF AGETIC"
              width={500} // Ajusta según necesites
              height={500} // Ajusta según necesites
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="text-sm text-gray-400">7 noviembre 2025</p>
          <p className="text-lg font-semibold">Capture the flag 2025</p>
          <p className="text-sm text-gray-400">Agetic</p>
        </div>
      </div>

      <div id="team">
        <h2 className="text-3xl font-bold text-lime-400 mb-8">
          Integrantes del CSIRT
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#101624] p-6 rounded-xl text-center w-80 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Imagen */}
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200} // Ajusta según el tamaño deseado
                  height={200} // Ajusta según el tamaño deseado
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Nombre */}
              <p className="font-semibold text-lg text-white">{member.name}</p>
              {/* Grado Universitario */}
              <p className="text-sm text-gray-400">{member.universityDegree}</p>
              {/* Especialización */}
              <p className="text-sm text-lime-400">{member.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
