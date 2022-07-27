export const customPallete = {
  dark: {
    main: '#1E1D1E',
    mainText: '#FFFFFF',
  },
  light: {
    main: '#F1F5F9',
    mainText: '#111827',
    mainLight: '#f1f5f9',
    secondaryBlue: '#1D2432',
    pureWhite: '#FFFFFF',
    lightColor: 'rgba(255, 255, 255, 0.9)',
    warning: '#D32F2F',
  },
  warning: {
    main: '#D32F2F',
  },
};

export const customTypography = {
  headerLarge: {
    fontSize: '2.8rem',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    '@media (max-width:900px)': {
      fontSize: '2.2rem',
    },
    '@media (max-width:600px)': {
      fontSize: '1.6rem',
    },
  },
  header: {
    fontSize: '2rem',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    '@media (max-width:900px)': {
      fontSize: '1.8rem',
    },
    '@media (max-width:600px)': {
      fontSize: '1.5rem',
    },
  },
  headerSmall: {
    fontSize: '1.563rem',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    '@media (max-width:900px)': {
      fontSize: '1.4rem',
    },
    '@media (max-width:600px)': {
      fontSize: '1.2rem',
    },
  },
  title: {
    fontSize: '1rem',
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  default: {
    fontSize: '0.875rem',
    fontFamily: 'Montserrat',
    '@media (max-width:900px)': {
      fontSize: '0.813rem',
    },
    '@media (max-width:600px)': {
      fontSize: '0.813rem',
    },
  },
  caption: {
    fontSize: '0.75rem',
    fontFamily: 'Montserrat',
    '@media (max-width:900px)': {
      fontSize: '0.625rem',
    },
    '@media (max-width:600px)': {
      fontSize: '0.625rem',
    },
  },
};

export const customButton = {
  styleOverrides: {
    root: {
      fontSize: '0.85rem',
      borderRadius: '0.625rem',
      fontFamily: 'Montserrat',
      textTransform: 'none',
      '@media (max-width:600px)': {
        fontSize: '0.75rem',
      },
    },
  },
};

export const customInput = {
  styleOverrides: {
    root: {
      fontFamily: 'Montserrat',
      fontSize: '0.875rem',
    },
  },
};

export const customInputLabel = {
  styleOverrides: {
    root: {
      fontFamily: 'Montserrat',
      fontSize: '0.875rem',
    },
  },
};

export const customDivider = {
  styleOverrides: {
    wrapper: {
      fontFamily: 'Montserrat',
      fontSize: '0.875rem',
      opacity: '0.6',
    },
  },
};

export const customWarnings = {
  styleOverrides: {
    root: {
      color: customPallete.warning.main,
    },
  },
};
