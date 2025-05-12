export default function HeroSection() {
  return (
    <section className="relative h-60 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/bg-header.png')" }}>
      <div className="text-center">
        <h2 className="text-3xl font-bold">CSIRT UCB</h2>
        <p className="text-xl">Computer Security Incident Response Team</p>
        <button className="mt-4 px-6 py-2 bg-lime-400 text-black font-semibold rounded hover:bg-lime-500">
          Practicar
        </button>
      </div>
    </section>
  );
}