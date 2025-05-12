'use client';
import React, { useState } from 'react'; 
import './globals.css'
const Home = () => {
  const [currentMonth, setCurrentMonth] = useState('May');

  const months = ['April', 'May', 'June'];
  const currentDate = new Date();
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const events = [
    { title: 'Criptografía', time: '10:00 - 11:30', location: 'Laboratorio A-11' },
    { title: 'Criptografía', time: '10:00 - 11:30', location: 'Laboratorio A-11' },
    { title: 'Criptografía', time: '10:00 - 11:30', location: 'Laboratorio A-11' },
  ];

  const changeMonth = (direction: 'prev' | 'next') => {
    const currentIndex = months.indexOf(currentMonth);
    if (direction === 'prev' && currentIndex > 0) {
      setCurrentMonth(months[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < months.length - 1) {
      setCurrentMonth(months[currentIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl mr-2">🛡️</span>
          <h1 className="text-xl font-bold">CSIRT UCB</h1>
        </div>
        <nav className="flex space-x-4 text-green-400">
          <a href="#acerca">Acerca de</a>
          <a href="#calendario">Calendario</a>
          <a href="#proximos">Próximos Eventos</a>
          <a href="#miembros">Miembros</a>
          <a href="#practicar" className="bg-green-400 text-black px-2 rounded">Practicar</a>
        </nav>
      </header>
      <main className="p-6">
        <section className="mb-8">
          <div className="bg-green-900 bg-opacity-50 p-4 rounded-lg text-center relative">
            <div className="absolute inset-0 bg-binary bg-contain bg-repeat opacity-20"></div>
            <h2 className="text-3xl font-bold text-green-400 relative z-10">CSIRT UCB</h2>
            <h3 className="text-2xl font-semibold text-white relative z-10">Computer Security Incident Response Team</h3>
            <button className="mt-4 bg-green-400 text-black px-4 py-2 rounded relative z-10">Practicar</button>
          </div>
        </section>
        <section id="acerca" className="mb-8">
          <h2 className="text-xl text-green-400 mb-2">Acerca de</h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section id="calendario" className="mb-8">
          <h2 className="text-xl text-green-400 mb-2">Calendario mensual CSIRT</h2>
          <div className="flex space-x-4">
            <div className="w-1/2 bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between mb-4">
                <button onClick={() => changeMonth('prev')} className="text-green-400">&lt;</button>
                <span className="text-green-400">{currentMonth}</span>
                <button onClick={() => changeMonth('next')} className="text-green-400">&gt;</button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                  <div key={day} className="text-gray-400">{day}</div>
                ))}
                {days.map(day => (
                  <div key={day} className={day === currentDate.getDate() && currentMonth === 'May' ? 'bg-green-400 text-black rounded-full' : 'text-gray-400'}>
                    {day}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/2 bg-gray-800 p-4 rounded-lg">
              <h3 className="text-green-400 mb-2">EVENTOS PARA 11 MAYO</h3>
              {events.map((event, index) => (
                <div key={index} className="flex justify-between text-gray-300">
                  <span>{event.title}</span>
                  <span>{event.time}</span>
                  <span>{event.location}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;