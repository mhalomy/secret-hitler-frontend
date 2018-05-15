export const socketEvent = (message, payload) => ({
  type: 'socket_event',
  socket: {
    message,
    payload,
  }
});
