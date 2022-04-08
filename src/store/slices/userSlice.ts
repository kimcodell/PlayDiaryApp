import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addDefaultCase(() => {})
  },
});

const {reducer, actions} = user;

export const {} = actions;

export default reducer;
