import React, { useState, useEffect } from 'react';

function Timer() {
  const [timeLeft, setTimeLeft] = useState(0); // Tiempo restante en segundos

  useEffect(() => {
    const getNextMidnight = () => {
      const now = new Date();
      const nextMidnight = new Date(now);
      nextMidnight.setDate(now.getDate() + 1);
      nextMidnight.setHours(0, 0, 0, 0); // Configurar la hora a medianoche
      return nextMidnight.getTime();
    };

    // Obtener el tiempo almacenado en localStorage o calcular la próxima medianoche
    const nextWordTime = localStorage.getItem('nextWordTime') || getNextMidnight();
    localStorage.setItem('nextWordTime', nextWordTime); // Guardar en localStorage

    const calculateTimeLeft = () => {
      const now = Date.now();
      const timeDifference = Math.max(0, nextWordTime - now);
      setTimeLeft(Math.floor(timeDifference / 1000)); // Convertir a segundos
    };

    // Actualizar el tiempo restante al montar el componente
    calculateTimeLeft();

    // Configurar un intervalo para actualizar cada segundo
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return <h2>{formatTime(timeLeft)}</h2>;
}

export default Timer;
