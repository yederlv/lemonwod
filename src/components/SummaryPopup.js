import React from 'react';
import Timer from './Timer';
import '../styles/SummaryPopup.css';
import words from '../data/words.json'; // Importar el JSON con las palabras

function SummaryPopup({ guesses, wordOfTheDay, description }) {
  // Obtener la información de la palabra actual desde el JSON
  const wordInfo = words.find((word) => word.word === wordOfTheDay);

  // Generar los resultados en formato de emoji
  const generateResultEmoji = () => {
    return guesses
      .filter((guess) => guess)
      .map((guess) =>
        guess
          .split('')
          .map((char, index) => {
            if (char === wordOfTheDay[index]) return '🟩';
            if (wordOfTheDay.includes(char)) return '🟨';
            return '⬛';
          })
          .join('')
      )
      .join('\n');
  };

  // Generar el texto completo para copiar
  const handleCopy = () => {
    const attemptCount = guesses.filter((guess) => guess).length;
    const resultEmoji = generateResultEmoji();
    const textToCopy = `LEMON WOD 🍋 #${wordInfo.id} ${attemptCount}/6\n\n${resultEmoji}\n\nhttps://yederlv.github.io/lemonwod/`;

    // Copiar al portapapeles
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        alert('¡Resultado copiado al portapapeles!');
      },
      (err) => {
        alert('Error al copiar el resultado: ' + err);
      }
    );
  };

  return (
    <div className="summary-popup">
      <h1 className="summary-title">🍋 LEMON WOD 🍋</h1>
      <h1 className="summary-title">#{wordInfo.id}</h1>
      <div className="emoji-result">
        <pre>{generateResultEmoji()}</pre>
      </div>
      <p className="summary-word">
        <strong>WOD:</strong> {wordInfo.word}
      </p>
      <p className="description">
        {wordInfo.description}
      </p>

      <div className="next-word-timer">
        <p>SIGUIENTE PALABRA</p>
        <Timer />
      </div>

      <div className="share-section">
        <button className="share-button" onClick={() => alert('En desarrollo 👨🏻‍💻🦝')}>Compartir tablero</button>
        <button className="share-button" onClick={handleCopy}>
          Copiar
        </button>
        <div className="social-icons">
          <a
            href="https://twitter.com"
            className="social-icon twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://wa.me"
            className="social-icon whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            href="https://t.me/lemonlat"
            className="social-icon telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </div>
      </div>

      <div className="promotional-banner">
        <span>👨🏻‍💻 ¿Quieres apoyar a $raccoondev? 🌍</span>
        <p>Lemonea, se aceptan cualquier token de Lemon</p>
      </div>
    </div>
  );
}

export default SummaryPopup;
