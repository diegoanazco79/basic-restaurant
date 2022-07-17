import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: JSON.parse(localStorage.getItem('darkmode')) ?? true,
  lang: JSON.parse(localStorage.getItem('lang')) || 'en',
};

export const uiSettingsSlice = createSlice({
  name: 'uiSettings',
  initialState,
  reducers: {
    toggleDarkMode: (state, { payload }) => {
      localStorage.setItem('darkmode', JSON.stringify(payload));
      return { ...state, darkMode: payload };
    },
    toggleLanguage: (state, { payload }) => {
      localStorage.setItem('lang', JSON.stringify(payload));
      return { ...state, lang: payload };
    },
  },
});

export const { toggleDarkMode, toggleLanguage } = uiSettingsSlice.actions;
