import { createTheme } from '@mui/system';

const theme = createTheme({
  typography: {
    h1: { // Header
      fontSize: '2rem',
    },
    h2: { // Header small
      fontSize: '1.563rem',
    },
    h3: { // Title
      fontSize: '1rem',
    },
    body1: { // Default
      fontSize: '0.875rem',
    },
    body2: { // Caption
      fontSize: '0.75rem',
    },
    fontFamily: [
      'Inter',
    ].join(','),
  },
});

export default theme;
