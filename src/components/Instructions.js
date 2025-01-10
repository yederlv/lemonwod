import React from 'react';
import '../styles/Instructions.css';

function Instructions({ onStart }) {
  return (
    <div className="instructions-container">
      <h1 className="game-title">
        <span className="title-box">🍋</span>
        <span className="title-box green">LEMON</span>
        <span className="title-box yellow">WOD</span>
        <span className="title-box">🍋</span>
      </h1>
      <div className="instructions-content">
        <p className="instructions-text">
          Las reglas son simples: adivina la palabra oculta en <strong>6 intentos</strong>.
          Cada intento debe ser una palabra válida y si la palabra no existe el juego te avisará.
        </p>
        <p className="instructions-text">
          Después de cada intento el color de las casillas cambia para mostrar qué tan cerca estás
          de acertar la palabra.
        </p>
        <div className="example-container">
          <div className="example-row">
            <div className="example-box green">M</div>
            <span>VERDE significa que la letra está en la palabra y en la posición CORRECTA.</span>
          </div>
          <div className="example-row">
            <div className="example-box yellow">A</div>
            <span>AMARILLO significa que la letra está presente en la palabra pero en la posición INCORRECTA.</span>
          </div>
          <div className="example-row">
            <div className="example-box gray">R</div>
            <span>GRIS significa que la letra NO está presente en la palabra.</span>
          </div>
        </div>
        <p className="instructions-text">¡Una palabra nueva cada día!</p>
        <button className="start-button" onClick={onStart}>
          ¡Jugar!
        </button>
        <p className="instructions-link">
          <button
            className="link-button"
            onClick={() => alert('No hay nada, no estan dificil jugar. 👨🏻‍💻🦝')}
          >
            Leer las instrucciones completas del juego.
          </button>
        </p>
      </div>
      <footer className="instructions-footer">
        <p>
          Desarrollado por{' '}
          <a
            href="https://lat.lemon.me/$raccoondev"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            $raccoondev 👨🏻‍💻🦝
          </a>
        </p>
        {/* <div className="social-links">
          <a
            href="https://twitter.com/yederdev"
            className="social-icon twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/yeder.dev"
            className="social-icon instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div> */}
      </footer>
    </div>
  );
}

export default Instructions;
