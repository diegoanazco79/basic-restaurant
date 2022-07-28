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

const darkTheme = createTheme({
  palette: customPallete,
  typography: {
    ...customTypography,
    headerLarge: {
      ...customTypography.headerLarge,
      color: customPallete.dark.mainText,
    },
    header: {
      ...customTypography.header,
      color: customPallete.dark.mainText,
    },
    headerSmall: {
      ...customTypography.headerSmall,
      color: customPallete.dark.mainText,
    },
    title: {
      ...customTypography.title,
      color: customPallete.dark.mainText,
    },
    default: {
      ...customTypography.default,
      color: customPallete.dark.mainText,
    },
    caption: {
      ...customTypography.caption,
      color: customPallete.dark.mainText,
    },
  },
  components: {
    MuiButton: {
      ...customButton,
      variants: [{
        props: { variant: 'primary' },
        style: {
          fontWeight: '600',
          color: customPallete.dark.pureWhite,
          backgroundColor: customPallete.dark.mainGreen,
          '&:hover': {
            backgroundColor: customPallete.dark.secondaryGreen,
          },
        },
      },
      {
        props: { variant: 'secondary' },
        style: {
          fontWeight: '600',
          color: customPallete.dark.pureWhite,
          backgroundColor: customPallete.dark.mainGray,
          '&:hover': {
            backgroundColor: customPallete.dark.secondaryGray,
          },
        },
      }],
    },
    MuiInputBase: customInput,
    MuiInputLabel: customInputLabel,
    MuiDivider: customDivider,
    MuiFormHelperText: customWarnings,
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: customPallete.light.pureWhite,
          '&:hover': {
            backgroundColor: customPallete.dark.secondaryGray,
          },
        },
      },
    },
  },
});

export default darkTheme;
