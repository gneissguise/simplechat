//import Server from 'socket.io';
//import Express from 'express';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

export default function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

  app.use(express.static(path.resolve(__dirname, '..', 'public')));

  app.get('/', (req, res) => {
    res.sendfile(path.resolve(__dirname, '..', 'public', 'index.html'));
  });

  const server = http.createServer(app);
  const io = socketio(server);


  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log(`Message from user: ${msg}`);
      io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
  server.listen(PORT, () => console.log(`Server up and listening on port ${PORT}`));
}

