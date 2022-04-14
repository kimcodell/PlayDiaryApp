import { createAsyncThunk } from '@reduxjs/toolkit';
import httpRequest from '../../utils/https/httpRequest';

const prefix = 'play';

export const fetchHotPlays = createAsyncThunk(
  `${prefix}/fetchHotPlays`,
  async () => {
    const response = await httpRequest({
      url: `${prefix}/hotplays`,
      method: 'GET',
    });
    if (!response) {
      return;
    }
    return response;
  },
);
