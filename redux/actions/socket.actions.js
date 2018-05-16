export const socketEvent = (data) => ({
  type: 'socket_event',
  socket: data,
});
