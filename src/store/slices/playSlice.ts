import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const play = createSlice({
  name: 'play',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addDefaultCase(() => {})
  },
});

const {reducer, actions} = play;

export const {} = actions;

export default reducer;
