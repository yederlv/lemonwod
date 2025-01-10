# 🍋 Lemon WOD

Lemon WOD es un juego diario de palabras inspirado en "La Palabra del Día". El objetivo es adivinar la palabra oculta de 5 letras en un máximo de 6 intentos. El proyecto incluye características como colores visuales para indicar progreso, un temporizador para la próxima palabra, y una experiencia interactiva optimizada.

---

## 📂 Estructura de Archivos

```plaintext
lemon-wod/
├── public/                 # Archivos estáticos
│   ├── index.html          # Archivo base HTML
│   └── favicon.ico         # Icono del sitio
├── src/                    # Código fuente principal
│   ├── components/         # Componentes reutilizables
│   │   ├── Game.js         # Lógica principal del juego
│   │   ├── GameGrid.js     # Grilla interactiva del juego
│   │   ├── Header.js       # Encabezado con título y contador
│   │   ├── Instructions.js # Pantalla de instrucciones
│   │   ├── Keyboard.js     # Teclado virtual
│   │   ├── SummaryPopup.js # Pantalla final de resumen
│   │   ├── Timer.js        # Temporizador de nueva palabra
│   └── data/               # Datos del juego
│       └── words.json      # Palabras del día y descripciones
│   ├── styles/             # Archivos de estilos CSS
│   │   ├── GameGrid.css    # Estilos de la grilla
│   │   ├── Header.css      # Estilos del encabezado
│   │   ├── Instructions.css # Estilos de la pantalla de instrucciones
│   │   ├── Keyboard.css    # Estilos del teclado
│   │   ├── SummaryPopup.css # Estilos del resumen
│   └── App.js              # Configuración y estructura principal del proyecto
│   └── index.js            # Punto de entrada de React
├── README.md               # Documentación del proyecto
├── package.json            # Dependencias y scripts del proyecto
├── .gitignore              # Archivos y carpetas a ignorar por Git
└── yarn.lock               # Archivo de control de versiones de Yarn
```

---


## 🛠️ Instalación y Despliegue en Local

Sigue los pasos para configurar y ejecutar el proyecto en tu entorno local:

1. Clonar el Repositorio
git clone git@github.com:tuusuario/lemon-wod.git
cd lemon-wod
2. Instalar Dependencias
Usa npm o yarn para instalar las dependencias:

### Con npm
npm install

### Con yarn
yarn install
3. Ejecutar el Proyecto en Local
### Con npm
npm start

### Con yarn
yarn start
El proyecto estará disponible en http://localhost:3000.

## 🎨 Características del Proyecto

✅ Lógica del Juego
Adivina la palabra oculta de 5 letras en un máximo de 6 intentos.
Sistema de colores:
🟩 Verde: Letra correcta en la posición correcta.
🟨 Amarillo: Letra correcta en una posición incorrecta.
⬛ Gris: Letra incorrecta.
✅ Palabra del Día
Cada día hay una nueva palabra que se almacena en el archivo words.json.
La palabra del día incluye un ID y una breve descripción.
✅ Pantalla de Resumen
Muestra el progreso del jugador con emojis 🟩🟨⬛.
Botón para copiar el progreso y compartir en redes sociales.
Temporizador que indica el tiempo restante para la próxima palabra.
✅ Responsividad
Diseño adaptado para pantallas de escritorio y dispositivos móviles.
🚀 Despliegue en Producción

Puedes desplegar el proyecto fácilmente en servicios como Netlify, Vercel o GitHub Pages.

Usando Vercel:
Instalar el CLI de Vercel:
npm install -g vercel
Ejecutar el comando de despliegue:
vercel
Sigue las instrucciones para completar el despliegue.
🛡️ Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo, modificarlo y contribuir.

# 📬 Contacto

Si tienes dudas, sugerencias o quieres contribuir al proyecto:

GitHub: @yederlv
Twitter: @yederdev
Instagram: @tyeder.dev
¡Gracias por jugar a 🍋 Lemon WOD 🍋!
