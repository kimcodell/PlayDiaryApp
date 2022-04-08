import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addDefaultCase(() => {})
  },
});

const {reducer, actions} = app;

export const {} = actions;

export default reducer;
