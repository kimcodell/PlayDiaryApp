import { createAsyncThunk } from '@reduxjs/toolkit';
import httpRequest from '../../utils/https/httpRequest';

const prefix = 'user';

export const getFollowers = createAsyncThunk(
  `${prefix}/getFollowers`,
  async (userId: number) => {
    const response = await httpRequest({
      url: `${prefix}/${userId}/followers`,
      method: 'GET',
    });
    if (!response) {
      return;
    }
    return response;
  },
);

export const getFollowings = createAsyncThunk(
  `${prefix}/getFollowings`,
  async (userId: number) => {
    const response = await httpRequest({
      url: `${prefix}/${userId}/followings`,
      method: 'GET',
    });
    if (!response) {
      return;
    }
    return response;
  },
);

export const followUser = createAsyncThunk(
  `${prefix}/followUser`,
  async (userId: number) => {
    const response = await httpRequest({
      url: `${prefix}/${userId}/follow`,
      method: 'POST',
    });
    if (!response) {
      return;
    }
    return response;
  },
);

export const unfollowUser = createAsyncThunk(
  `${prefix}/unfollowUser`,
  async (userId: number) => {
    const response = await httpRequest({
      url: `${prefix}/${userId}/follow`,
      method: 'DELETE',
    });
    if (!response) {
      return;
    }
    return response;
  },
);
