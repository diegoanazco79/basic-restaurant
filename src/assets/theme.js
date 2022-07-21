import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      // Header large
      fontSize: '2.8rem',
      '@media (max-width:900px)': {
        fontSize: '2.2rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.6rem',
      },
    },
    h2: {
      // Header normal
      fontSize: '2rem',
    },
    h3: {
      // Header small
      fontSize: '1.563rem',
    },
    h4: {
      // Title
      fontSize: '1rem',
    },
    body1: {
      // Default
      fontSize: '0.875rem',
    },
    body2: {
      // Caption
      fontSize: '0.75rem',
    },
    fontFamily: ['Montserrat'].join(','),
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: '#D32F2F',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '1.563rem',
          '@media (max-width:600px)': {
            fontSize: '0.75rem',
          },
        },
      },
    },
  },
});

export default theme;
