import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: JSON.parse(localStorage.getItem('token')) || null,
  user: JSON.parse(localStorage.getItem('user')) || null,
  roles: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginToken: (state, { payload }) => {
      localStorage.setItem('token', JSON.stringify(payload));
      return { ...state, token: payload };
    },
    loginUser: (state, { payload }) => {
      localStorage.setItem('user', JSON.stringify(payload));
      return { ...state, user: JSON.stringify(payload) };
    },
    logoutSession: (state, { payload }) => {
      localStorage.setItem('token', null);
      localStorage.setItem('user', null);
      return { ...state, user: payload, token: payload };
    },
  },
});

export const { loginToken, loginUser, logoutSession } = authSlice.actions;
