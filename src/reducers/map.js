import { createSlice } from '@reduxjs/toolkit';

export const mapLocationSlice = createSlice({
  name: 'mapLocation',
  initialState: {
    coords: {}
  },
  reducers: {
    setMapLocation: (state, action) => {
      state.coords = { ...action.payload };
    }
  }
});

// Action creators are generated for each case reducer function
export const { setMapLocation } = mapLocationSlice.actions;

export default mapLocationSlice.reducer;
