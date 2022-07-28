import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: JSON.parse(localStorage.getItem('theme')) || 'light',
  lang: JSON.parse(localStorage.getItem('lang')) || 'en',
};

export const uiSettingsSlice = createSlice({
  name: 'uiSettings',
  initialState,
  reducers: {
    toggleDarkMode: (state, { payload }) => {
      localStorage.setItem('theme', JSON.stringify(payload));
      return { ...state, theme: payload };
    },
    toggleLanguage: (state, { payload }) => {
      localStorage.setItem('lang', JSON.stringify(payload));
      return { ...state, lang: payload };
    },
  },
});

export const { toggleDarkMode, toggleLanguage } = uiSettingsSlice.actions;
