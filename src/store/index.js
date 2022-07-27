import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './slices/auth';
import { uiSettingsSlice } from './slices/uiSettings';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    uiSettings: uiSettingsSlice.reducer,
  },
});

export default store;
