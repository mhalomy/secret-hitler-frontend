import io from 'socket.io-client';

const socket = url => store => {
  const socket = io(url);


  socket.on('data', data => {
    const {type, payload} = data;
    console.log('PAYLOADDDDDD', payload)
    store.dispatch({
      type: type + '_received',
      payload,
    });
  });

  socket.on('message', message => {
    const {type, text} = message;
    console.log(`server ${type}: ${text}`);
    store.dispatch({
      type: 'server_' + type,
      text,
    });
  });

  return next => action => {
    if(!action.socket) return next(action);

    socket.emit('data', action.socket);

    next({
      ...action,
      type: action.type + '_sent'
    });
  }
}

export default socket;
