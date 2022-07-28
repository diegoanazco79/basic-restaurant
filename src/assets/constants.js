export const customPallete = {
  dark: {
    main: '#1E1D1E',
    mainLight: '#F1F5F9',
    mainText: '#FFFFFF',
    pureWhite: '#FFFFFF',
    mainGreen: '#055C43',
    secondaryGreen: '#056D4F',
    mainGray: '#3D3F41',
    secondaryGray: '#37393B',
  },
  light: {
    main: '#F1F5F9',
    mainDark: '#1E1D1E',
    mainBlue: '#1D2942',
    secondaryBlue: '#263657',
    mainGray: '#DADDE0',
    secondaryGray: '#D0D3D6',
    mainText: '#111827',
    pureWhite: '#FFFFFF',
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
