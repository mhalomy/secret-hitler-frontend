import io from 'socket.io-client';

const socket = store => next => action => {
  if(!action.socket) return next(action);

  const {message, payload} = action.socket;

  const socket = io(process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000');

  socket.on('metaChannel', game => {
    if (game.id) {
      store.dispatch({
        type: action.type + '_success',
        game,
      })
    } else {
      console.error(game);
      store.dispatch({
        type: action.type + '_failure',
        game,
      })
    }
  });

  socket.emit('metaChannel', message, payload, res => console.log(res));

  socket.on('gameChannel', game => {
    if (game.id) {
      store.dispatch({
        type: action.type + '_success',
        game,
      })
    } else {
      console.error(game);
      store.dispatch({
        type: action.type + '_failure',
        game,
      })
    }
  });

  socket.emit('gameChannel', message, payload, res => console.log(res));

  next({
    ...action,
    type: action.type + '_pending'
  });
}

export default socket;
