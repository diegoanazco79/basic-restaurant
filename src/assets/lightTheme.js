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
      variants: [{
        props: { variant: 'primary' },
        style: {
          fontWeight: '600',
          color: 'green',
          backgroundColor: 'green',
          '&:hover': {
            backgroundColor: 'green',
            color: 'green',
          },
        },
      }],
    },
    MuiInputBase: customInput,
    MuiInputLabel: customInputLabel,
    MuiDivider: customDivider,
    MuiFormHelperText: customWarnings,
  },
});

export default lightTheme;
