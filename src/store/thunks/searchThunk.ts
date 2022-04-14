import { createAsyncThunk } from '@reduxjs/toolkit';
import httpRequest from '../../utils/https/httpRequest';

const prefix = 'search';

export const fetchSearchResult = createAsyncThunk(
  `${prefix}/fetchSearchResult`,
  async (keyword: string) => {
    const response = await httpRequest({
      url: `${prefix}/${keyword}`,
      method: 'GET',
    });
    if (!response) {
      return;
    }
    return response;
  },
);
