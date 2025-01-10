import React from 'react';
import '../styles/GameGrid.css';

function GameGrid({ guesses, currentGuess, rowIndex, wordLength, wordOfTheDay }) {
  return (
    <div className="grid">
      {guesses.map((guess, i) => (
        <div key={i} className="grid-row">
          {Array.from({ length: wordLength }, (_, j) => (
            <div
              key={j}
              className={`grid-item ${
                i < rowIndex
                  ? guess[j] === wordOfTheDay[j]
                    ? 'green'
                    : wordOfTheDay.includes(guess[j])
                    ? 'yellow'
                    : 'gray'
                  : ''
              }`}
            >
              {i === rowIndex ? currentGuess[j] || '' : guess[j] || ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameGrid;
