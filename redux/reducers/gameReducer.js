import initialAppState from './initialAppState';

const game = {}

export default gameReducer = (state = game, action) => {
  if (action.type === 'game_received') return action.payload
  return state;
};
