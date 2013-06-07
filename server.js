
var express = require('express')
  , sio = require('socket.io')

app = express.createServer();
app.use(express.static(__dirname + '/public'));

app.listen(40231);
console.log('[server up listening on port 40231]');

// socket.io
var io = sio.listen(app);
io.set('log level', false);
io.set('transports', ['websocket']);
io.sockets.on('connection', function (socket) {
  socket.on('message', function (msg) {
    socket.send(msg);
  });
});
