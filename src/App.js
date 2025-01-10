import React, { useState } from 'react';
import Instructions from './components/Instructions';
import Game from './components/Game';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false); // Estado para manejar las vistas

  return (
    <div className="app-container">
      {/* Renderiza la pantalla de instrucciones o el juego según el estado */}
      {gameStarted ? (
        <Game />
      ) : (
        <Instructions onStart={() => setGameStarted(true)} />
      )}
    </div>
  );
}

export default App;
