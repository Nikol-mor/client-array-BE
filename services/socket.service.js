const asyncLocalStorage = require('./als.service');
const logger = require('./logger.service');

var gIo = null;

function connectSockets(http, session) {
  gIo = require('socket.io')(http, {
    cors: {
      origin: '*',
    },
  });
  gIo.on('connection', (socket) => {
    console.log('New socket', socket.id);
    socket.on('disconnect', (socket) => {
      console.log('Someone disconnected');
    });
    socket.on('addedArray', (array) => {
      socket.broadcast.emit('addedArray', array);
      console.log(' BE other user added array');
    });
  });
}

module.exports = {
  connectSockets,
};
