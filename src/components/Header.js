import React, { useEffect, useState } from 'react';
import words from '../data/words.json'; // Importar el JSON con las palabras
import '../styles/Header.css'; // Importar el archivo CSS

function Header() {
  const [wordId, setWordId] = useState(null); // Estado para el ID de la palabra del día

  useEffect(() => {
    // Obtener la última palabra del JSON
    const lastWord = words[words.length - 1];
    if (lastWord) {
      setWordId(lastWord.id);
    }
  }, []);

  return (
    <header>
      <h1>🍋 LEMON WOD 🍋</h1>
      {wordId && <h1>#{wordId}</h1>}
    </header>
  );
}

export default Header;
