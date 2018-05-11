import { combineReducers } from 'redux';

import { socketReducer } from './socket.reducer';

import gameReducer  from './gameReducer';

import userReducer from './userReducer';

const reducers = combineReducers({
  socketReducer,
  gameReducer,
  userReducer
});

export default reducers;