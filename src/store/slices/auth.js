import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  user: null,
  roles: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginApp: (state, { payload }) => {
      localStorage.setItem('token', JSON.stringify(payload));
      return { ...state, token: payload };
    },
    logoutApp: (state, { payload }) => {
      localStorage.setItem('token', JSON.stringify(payload));
      return { ...state, token: payload };
    },
  },
});

export const { loginApp, logoutSession } = authSlice.actions;
