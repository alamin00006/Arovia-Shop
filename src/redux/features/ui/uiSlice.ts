import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'ui',
  initialState: { filterSheetOpen: false },
  reducers: { toggleFilterSheet: (state) => { state.filterSheetOpen = !state.filterSheetOpen; } }
});

export const { toggleFilterSheet } = slice.actions;
export default slice.reducer;
