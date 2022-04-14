import { createSlice } from '@reduxjs/toolkit';

interface appState {}

const initialState: appState = {};

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addDefaultCase(() => {});
  },
});

const { reducer, actions } = app;

export const {} = actions;

export default reducer;
