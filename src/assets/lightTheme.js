import { createTheme } from '@mui/material/styles';

import {
  customButton,
  customPallete,
  customTypography,
  customInput,
  customInputLabel,
  customDivider,
  customWarnings,
} from './constants';

const lightTheme = createTheme({
  palette: customPallete,
  typography: {
    ...customTypography,
    headerLarge: {
      ...customTypography.headerLarge,
      color: customPallete.light.mainText,
    },
    header: {
      ...customTypography.header,
      color: customPallete.light.mainText,
    },
    headerSmall: {
      ...customTypography.headerSmall,
      color: customPallete.light.mainText,
    },
    title: {
      ...customTypography.title,
      color: customPallete.light.mainText,
    },
    default: {
      ...customTypography.default,
      color: customPallete.light.mainText,
    },
    caption: {
      ...customTypography.caption,
      color: customPallete.light.mainText,
    },
  },
  components: {
    MuiButton: {
      ...customButton,
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            fontWeight: '600',
            color: customPallete.light.pureWhite,
            backgroundColor: customPallete.light.mainBlue,
            '&:hover': {
              backgroundColor: customPallete.light.secondaryBlue,
            },
            '& .MuiSvgIcon-root': {
              color: customPallete.light.pureWhite,
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            fontWeight: '600',
            color: customPallete.light.mainDark,
            backgroundColor: customPallete.light.mainGray,
            '&:hover': {
              backgroundColor: customPallete.light.secondaryGray,
            },
            '& .MuiSvgIcon-root': {
              color: customPallete.light.mainBlue,
            },
          },
        },
      ],
    },
    MuiInputBase: customInput,
    MuiInputLabel: customInputLabel,
    MuiDivider: customDivider,
    MuiFormHelperText: customWarnings,
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: customPallete.light.mainBlue,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: customPallete.light.main,
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        root: {
          '& .MuiDrawer-paper': {
            width: '15rem',
            boxSizing: 'border-box',
            backgroundColor: customPallete.light.main,
            boxShadow:
              '0 0.188rem 0.25rem -0.063rem rgba(0,0,0,.2),0 0.25rem 0.5rem 0 rgba(0,0,0,.14),0 0.063rem 0.875rem 0 rgba(0,0,0,.12)',
          },
        },
      },
    },
  },
});

export default lightTheme;
