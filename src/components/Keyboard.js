import React from 'react';
import '../styles/Keyboard.css';

function Keyboard({ onKeyPress, keyColors }) {
  const rows = [
    'QWERTYUIOP',
    'ASDFGHJKLÑ',
    'ZXCVBNM'
  ];

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.split('').map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className={`key ${keyColors[key] || ''}`}
            >
              {key}
            </button>
          ))}
          {/* Agregar ENTER y BACKSPACE en la tercera fila */}
          {rowIndex === 2 && (
            <>
              <button onClick={() => onKeyPress('ENTER')} className="key enter">
              ✓
              </button>
              <button onClick={() => onKeyPress('BACKSPACE')} className="key backspace">
                ⌫
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
