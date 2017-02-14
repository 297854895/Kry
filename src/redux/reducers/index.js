import { combineReducers } from 'redux';
import client from './client';
import novel from './novel';
import music from './music';
const rootReducer = combineReducers({
  client,
  novel,
  music
});

export default rootReducer;
