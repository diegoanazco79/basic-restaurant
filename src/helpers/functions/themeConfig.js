/**
 * It returns the current palette based on the current theme
 * @param theme - The theme object that contains the palettes.
 * @param currentTheme - This is the current theme that the user has selected.
 * @returns The current pallete based on the current theme.
 */
const getCurrentPallete = (theme, currentTheme) => {
  switch (currentTheme) {
    case 'light':
      return theme.palette.light;
    case 'dark':
      return theme.palette.dark;
    default:
      return theme.palette.light;
  }
};

export default getCurrentPallete;
