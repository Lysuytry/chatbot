import app from './app';
import {chatHandler} from './common/chat-server.js';

const server = require('http').Server(app);
const io = require('socket.io')(server);

const { PORT } = process.env || 3000;

server.listen(PORT, () => {
  console.log(`Listen at port ${PORT}`);
});

io.sockets.on('connection', chatHandler);
