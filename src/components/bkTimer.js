import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(86400); // Tiempo en segundos (24 horas)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return <h2>{formatTime(time)}</h2>;
}

export default Timer;
