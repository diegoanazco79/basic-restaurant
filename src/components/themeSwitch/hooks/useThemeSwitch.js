import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleDarkMode } from '../../../store/slices/uiSettings';

const useThemeSwitch = () => {
  const theme = useSelector((state) => state.uiSettings.theme);
  const dispatch = useDispatch();

  const [currentTheme, setCurrentTheme] = useState(theme);
  const setTheme = (_theme) => dispatch(toggleDarkMode(_theme));

  const handleChange = () => {
    setCurrentTheme(theme === 'light' ? 'dark' : 'light');
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return {
    /* States */
    currentTheme,

    /* States functions */

    /* Functions */
    handleChange,
  };
};

export default useThemeSwitch;
