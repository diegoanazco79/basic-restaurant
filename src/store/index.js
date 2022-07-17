import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './slices/auth';
import { uiSettingsSlice } from './slices/uiSettings';

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    auth: authSlice.reducer,
    uiSettings: uiSettingsSlice.reducer,
  },
});

export default store;
