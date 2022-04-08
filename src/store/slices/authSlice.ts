import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addDefaultCase(() => {})
  },
});

const {reducer, actions} = auth;

export const {} = actions;

export default reducer;
