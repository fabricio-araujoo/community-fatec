import { configureStore } from '@reduxjs/toolkit';
import mapLocationReducer from '~/reducers/map';
import userReducer from '~/reducers/user';

export const store = configureStore({
  reducer: {
    mapLocation: mapLocationReducer,
    userSession: userReducer
  }
});
