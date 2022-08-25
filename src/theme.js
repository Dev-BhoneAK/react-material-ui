import { red,pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: red.A700,
    },
    secondary: {
      main: pink.A700,
    },
    error: {
      main: red.A400,
    },
  },
});
