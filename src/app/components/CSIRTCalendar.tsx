'use client'

import { useState } from 'react';

const eventData = [
  { name: "Taller introductorio a CTF", date: "2025-04-26" },
  { name: "Taller de criptografía", date: "2025-05-03" },
  { name: "Taller OSINT", date: "2025-05-10" },
  { name: "Taller seguridad web", date: "2025-05-17" },
  { name: "CTF Nacional de Primavera", date: "2025-05-24" },
  { name: "Taller Ingeniería inversa", date: "2025-05-31" },
  { name: "Taller Explotación de vulnerabilidades", date: "2025-06-07" },
  { name: "Mini CTF todas las categorías(cripto, análisis forense, reversing, web y exploiting)", date: "2025-08-02" },
  { name: "Taller Análisis forense", date: "2025-08-09" },
  { name: "Taller de esteganografía y misc", date: "2025-08-16" },
  { name: "Taller de scripting", date: "2025-08-23" },
  { name: "CTF Interno CSIRT-UCB", date: "2025-08-30" },
];

export const CSIRTCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(4); 
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const dayNames = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];

  const prevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    let day = new Date(year, month - 1, 1).getDay();
    return day === 0 ? 6 : day - 1; 
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    
    const daysInPrevMonth = getDaysInMonth(currentYear, currentMonth - 1 < 1 ? 12 : currentMonth - 1);
    const prevMonthDays = Array.from({ length: firstDay }, (_, i) => ({
      day: daysInPrevMonth - firstDay + i + 1,
      currentMonth: false,
      date: `${currentMonth - 1 < 1 ? currentYear - 1 : currentYear}-${(currentMonth - 1 < 1 ? 12 : currentMonth - 1).toString().padStart(2, '0')}-${(daysInPrevMonth - firstDay + i + 1).toString().padStart(2, '0')}`
    }));
    
    const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => ({
      day: i + 1,
      currentMonth: true,
      date: `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${(i + 1).toString().padStart(2, '0')}`
    }));
    
    const totalDays = prevMonthDays.length + currentMonthDays.length;
    const remainingDays = 42 - totalDays; // 6 rows of 7 days
    
    const nextMonthDays = Array.from({ length: remainingDays }, (_, i) => ({
      day: i + 1,
      currentMonth: false,
      date: `${currentMonth + 1 > 12 ? currentYear + 1 : currentYear}-${(currentMonth + 1 > 12 ? 1 : currentMonth + 1).toString().padStart(2, '0')}-${(i + 1).toString().padStart(2, '0')}`
    }));
    
    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  const hasEvent = (date) => {
    return eventData.some(event => event.date === date);
  };

  const getEventsForDate = (date) => {
    return eventData.filter(event => event.date === date);
  };

  const generateWeeks = () => {
    const days = generateCalendarDays();
    const weeks = [];
    
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    
    return weeks;
  };

  const formatSelectedDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    return `${day} ${month}`;
  };

  return (
    <section id="calendario" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-400">Calendario de Actividades</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 bg-opacity-70 text-white p-6 rounded-lg border border-green-400/30">
            <h3 className="text-2xl font-bold text-green-400 mb-8">Calendario mensual CSIRT</h3>
            
            <div className="flex flex-col lg:flex-row">
              {/* Calendar Section */}
              <div className="w-full lg:w-1/2 lg:border-r border-green-400/20 pr-0 lg:pr-6 pb-6 lg:pb-0">
                <div className="flex justify-between items-center mb-6">
                  <button 
                    onClick={prevMonth} 
                    className="flex items-center text-green-400 hover:text-green-300"
                  >
                    <span className="mr-2">{'<'}</span>
                    <span>{monthNames[(currentMonth - 2 + 12) % 12]}</span>
                  </button>
                  <h2 className="text-green-400 font-bold text-xl bg-gray-800 px-4 py-1 rounded">{monthNames[currentMonth - 1]}</h2>
                  <button 
                    onClick={nextMonth} 
                    className="flex items-center text-green-400 hover:text-green-300"
                  >
                    <span>{monthNames[currentMonth % 12]}</span>
                    <span className="ml-2">{'>'}</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-7 gap-2 mb-4">
                  <div className="text-gray-500 text-sm">05</div>
                  {dayNames.map((day, index) => (
                    <div key={index} className="text-center text-sm text-gray-400 p-1">{day}</div>
                  ))}
                </div>
                
                {generateWeeks().map((week, weekIndex) => (
                  <div key={weekIndex} className="grid grid-cols-8 gap-2 mb-2">
                    <div className="text-gray-500 text-sm flex items-center justify-end pr-2">{weekIndex + 18}</div>
                    {week.map((day, dayIndex) => (
                      <div 
                        key={dayIndex}
                        onClick={() => setSelectedDate(day.date)}
                        className={`
                          flex items-center justify-center p-2 rounded cursor-pointer h-10 w-10
                          ${!day.currentMonth ? 'text-gray-600' : 'text-white'}
                          ${day.date === selectedDate ? 'bg-green-500' : ''}
                          ${hasEvent(day.date) && day.currentMonth ? 
                            (day.date === selectedDate ? 'bg-green-500' : 'border border-green-500 bg-gray-800') : 
                            (day.currentMonth ? 'bg-gray-800' : '')}
                          hover:bg-green-500/60 transition-colors
                        `}
                      >
                        {day.day}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              
              {/* Events Section */}
              <div className="w-full lg:w-1/2 pl-0 lg:pl-6 pt-6 lg:pt-0 border-t lg:border-t-0 border-green-400/20">
                <h2 className="text-xl font-bold mb-6 text-white">EVENTOS PARA {formatSelectedDate(selectedDate).toUpperCase()}</h2>
                
                {getEventsForDate(selectedDate).length > 0 ? (
                  getEventsForDate(selectedDate).map((event, index) => (
                    <div key={index} className="mb-6 border-b border-green-400/20 pb-4">
                      <h3 className="text-lg font-bold text-green-400">{event.name}</h3>
                      <div className="flex justify-between text-sm text-gray-300 mt-4">
                        <span>10:00 - 11:30</span>
                        <span>Laboratorio A1-11</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-400 py-8 text-center">No hay eventos programados para esta fecha</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CSIRTCalendar;