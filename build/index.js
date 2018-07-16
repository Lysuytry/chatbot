'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _chatServer = require('./common/chat-server.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = require('http').Server(_app2.default);
const io = require('socket.io')(server);

const { PORT } = process.env || 3000;

server.listen(PORT, () => {
  console.log(`Listen at port ${PORT}`);
});

io.sockets.on('connection', _chatServer.chatHandler);
//# sourceMappingURL=index.js.map