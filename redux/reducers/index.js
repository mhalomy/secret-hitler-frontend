import { combineReducers } from 'redux';

import { socketReducer } from './socket.reducer';

import playerListReducer from './playerListReducer';

import userReducer from './userReducer';

const reducers = combineReducers({
  socketReducer,
  userReducer,
  playerListReducer
});

export default reducers;