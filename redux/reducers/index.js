import { combineReducers } from 'redux';

import { socketReducer } from './socket.reducer';

import userReducer from './userReducer';

export default combineReducers({
  socketReducer,
  userReducer
});