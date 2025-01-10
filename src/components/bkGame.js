import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import GameGrid from './GameGrid';
import Keyboard from './Keyboard';
import SummaryPopup from './SummaryPopup';
import words from '../data/words.json'; // Importar el JSON con las palabras

function Game() {
  const [wordOfTheDay, setWordOfTheDay] = useState(null); // Palabra del día
  const [description, setDescription] = useState(''); // Descripción de la palabra del día
  const [guesses, setGuesses] = useState(Array(6).fill(''));
  const [currentGuess, setCurrentGuess] = useState('');
  const [rowIndex, setRowIndex] = useState(0); // Índice de la fila actual
  const [keyColors, setKeyColors] = useState({}); // Colores del teclado
  const [showSummary, setShowSummary] = useState(false); // Mostrar pantalla de resumen
  const [gameStatus, setGameStatus] = useState('playing'); // Estado del juego: 'playing', 'won', 'lost'

  // Cargar la última palabra del JSON como palabra del día
  useEffect(() => {
    const lastWord = words[words.length - 1]; // Última palabra del JSON
    setWordOfTheDay(lastWord.word);
    setDescription(lastWord.description);
  }, []);

  // Validar el intento actual
  const validateGuess = useCallback(() => {
    if (currentGuess.length !== (wordOfTheDay?.length || 0)) return;

    const newGuesses = [...guesses];
    newGuesses[rowIndex] = currentGuess;
    setGuesses(newGuesses);

    const newKeyColors = { ...keyColors };
    const wordOfTheDayArray = wordOfTheDay.split('');
    const guessArray = currentGuess.split('');

    // Arreglo temporal para manejar letras marcadas
    const markedLetters = Array(wordOfTheDay.length).fill(false);

    // Primera pasada: verificar verdes (posición correcta)
    guessArray.forEach((letter, index) => {
      if (letter === wordOfTheDayArray[index]) {
        newKeyColors[letter] = 'green';
        markedLetters[index] = true;
      }
    });

    // Segunda pasada: verificar amarillos (letras en la palabra pero en posición incorrecta)
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

    if (currentGuess === wordOfTheDay) {
      setGameStatus('won'); // El jugador ganó
      setTimeout(() => setShowSummary(true), 2000); // Mostrar el resumen después de 2 segundos
    } else if (rowIndex === guesses.length - 1) {
      setGameStatus('lost'); // El jugador perdió
      setTimeout(() => setShowSummary(true), 2000); // Mostrar el resumen después de 2 segundos
    }

    setRowIndex(rowIndex + 1);
    setCurrentGuess('');
  }, [currentGuess, guesses, keyColors, rowIndex, wordOfTheDay]);

  // Manejar la pulsación de teclas (físico o virtual)
  const handleKeyPress = useCallback(
    (key) => {
      if (showSummary || !wordOfTheDay) return; // No permitir más interacciones si el resumen está activo o no hay palabra cargada

      if (key === 'ENTER') {
        if (currentGuess.length === (wordOfTheDay?.length || 0)) {
          validateGuess();
        }
      } else if (key === 'BACKSPACE') {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (currentGuess.length < (wordOfTheDay?.length || 0)) {
        setCurrentGuess((prev) => prev + key);
      }
    },
    [currentGuess, validateGuess, showSummary, wordOfTheDay]
  );

  // Escuchar eventos del teclado físico
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
          wordOfTheDay={wordOfTheDay}
          guesses={guesses}
          gameStatus={gameStatus}
          description={description}
        />
      ) : (
        <>
          <Header />
          <GameGrid
            guesses={guesses}
            currentGuess={currentGuess}
            rowIndex={rowIndex}
            wordLength={wordOfTheDay?.length || 0}
            wordOfTheDay={wordOfTheDay || ''}
          />
          <Keyboard onKeyPress={handleKeyPress} keyColors={keyColors} />
        </>
      )}
    </div>
  );
}

export default Game;
