import { combineReducers } from 'redux';
import client from './client';
import novel from './novel';
const rootReducer = combineReducers({
  client,
  novel,
});

export default rootReducer;
