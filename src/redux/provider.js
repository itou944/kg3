
// src/redux/provider.js
'use client';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import keyGunsReducer from './features/keyGunsSlice';

const store = configureStore({
  reducer: {
    keyGuns: keyGunsReducer,
    // Add other reducers here as needed
  },
});

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}