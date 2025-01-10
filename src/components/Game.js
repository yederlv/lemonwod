import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import GameGrid from './GameGrid';
import Keyboard from './Keyboard';
import SummaryPopup from './SummaryPopup';
import words from '../data/words.json';

const WORD_OF_THE_DAY = words[words.length - 1].word; // Última palabra del JSON

function Game() {
  const [guesses, setGuesses] = useState(Array(6).fill(''));
  const [currentGuess, setCurrentGuess] = useState('');
  const [rowIndex, setRowIndex] = useState(0); // Índice de la fila actual
  const [keyColors, setKeyColors] = useState({}); // Colores del teclado
  const [showSummary, setShowSummary] = useState(false); // Mostrar pantalla de resumen
  const [gameDisabled, setGameDisabled] = useState(false); // Deshabilitar juego si ya jugó

  useEffect(() => {
    // Verificar si el usuario ya jugó hoy
    const lastPlayedDate = localStorage.getItem('lastPlayedDate');
    const today = new Date().toISOString().split('T')[0];

    if (lastPlayedDate === today) {
      setGameDisabled(true); // Deshabilitar juego si ya jugó hoy
      setShowSummary(true); // Mostrar el resumen si ya terminó el juego
    }
  }, []);

  const validateGuess = useCallback(() => {
    if (currentGuess.length !== WORD_OF_THE_DAY.length) return;

    const newGuesses = [...guesses];
    newGuesses[rowIndex] = currentGuess;
    setGuesses(newGuesses);

    const newKeyColors = { ...keyColors };
    const wordOfTheDayArray = WORD_OF_THE_DAY.split('');
    const guessArray = currentGuess.split('');

    const markedLetters = Array(WORD_OF_THE_DAY.length).fill(false);

    // Verificar verdes
    guessArray.forEach((letter, index) => {
      if (letter === wordOfTheDayArray[index]) {
        newKeyColors[letter] = 'green';
        markedLetters[index] = true;
      }
    });

    // Verificar amarillos
    guessArray.forEach((letter, index) => {
      if (
        letter !== wordOfTheDayArray[index] &&
        wordOfTheDayArray.includes(letter)
      ) {
        const matchIndex = wordOfTheDayArray.findIndex(
          (char, i) => char === letter && !markedLetters[i]
        );
        if (matchIndex !== -1) {
          if (newKeyColors[letter] !== 'green') {
            newKeyColors[letter] = 'yellow';
          }
          markedLetters[matchIndex] = true;
        }
      } else if (!wordOfTheDayArray.includes(letter)) {
        newKeyColors[letter] = 'gray';
      }
    });

    setKeyColors(newKeyColors);

    // Si el usuario adivina la palabra
    if (currentGuess === WORD_OF_THE_DAY || rowIndex === 5) {
      const today = new Date().toISOString().split('T')[0];
      localStorage.setItem('lastPlayedDate', today); // Guardar fecha en localStorage
      setTimeout(() => setShowSummary(true), 1000); // Mostrar resumen después de 1 segundo
      setGameDisabled(true); // Deshabilitar juego
    }

    setRowIndex(rowIndex + 1);
    setCurrentGuess('');
  }, [currentGuess, guesses, keyColors, rowIndex]);

  const handleKeyPress = useCallback(
    (key) => {
      if (gameDisabled) return; // Si el juego está deshabilitado, no hacer nada

      if (key === 'ENTER') {
        if (currentGuess.length === WORD_OF_THE_DAY.length) {
          validateGuess();
        }
      } else if (key === 'BACKSPACE') {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (currentGuess.length < WORD_OF_THE_DAY.length) {
        setCurrentGuess((prev) => prev + key);
      }
    },
    [currentGuess, validateGuess, gameDisabled]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      if (key === 'ENTER' || key === 'BACKSPACE' || /^[A-ZÑ]$/.test(key)) {
        handleKeyPress(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyPress]);

  return (
    <div>
      {showSummary ? (
        <SummaryPopup
          wordOfTheDay={WORD_OF_THE_DAY}
          guesses={guesses}
          description={words[words.length - 1].description}
        />
      ) : (
        <>
          <Header />
          <GameGrid
            guesses={guesses}
            currentGuess={currentGuess}
            rowIndex={rowIndex}
            wordLength={WORD_OF_THE_DAY.length}
            wordOfTheDay={WORD_OF_THE_DAY}
          />
          <Keyboard onKeyPress={handleKeyPress} keyColors={keyColors} />
        </>
      )}
    </div>
  );
}

export default Game;
