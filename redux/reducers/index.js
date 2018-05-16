import { combineReducers } from 'redux';

import { socketReducer } from './socket.reducer';
import gameReducer  from './gameReducer';
import userReducer  from './userReducer';
import playerListReducer from './playerListReducer';


const reducers = combineReducers({
  socket: socketReducer,
  game: gameReducer,
  user: userReducer,
  player: playerListReducer,

});

export default reducers;
