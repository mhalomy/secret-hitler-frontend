import { combineReducers } from 'redux';

import { socketReducer } from './socket.reducer';
import gameReducer  from './gameReducer';
import userReducer  from './userReducer';
import playerListReducer from './playerListReducer';


const reducers = combineReducers({
  socketReducer,
  userReducer,
  gameReducer,
  playerListReducer,
});

export default reducers;
