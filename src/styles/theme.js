import { createTheme } from '@mui/material/styles';

const lemonTheme = createTheme({
  palette: {
    primary: {
      main: '#34C759', // Verde Lemon
    },
    secondary: {
      main: '#FFC107', // Amarillo Lemon
    },
    background: {
      default: '#1C1C1E', // Fondo oscuro
    },
    text: {
      primary: '#FFFFFF', // Blanco
      secondary: '#A1A1A1', // Gris claro
    },
  },
});

export default lemonTheme;
