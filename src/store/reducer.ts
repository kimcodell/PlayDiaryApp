import {combineReducers} from 'redux';
import app from './slices/appSlice';
import auth from './slices/authSlice';
import user from './slices/userSlice';
import play from './slices/playSlice';

const rootReducer = combineReducers({
  app,
  auth,
  user,
  play,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;