'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routeRoom = (0, _express.Router)();

// routeRoom.get('/', (req, res) => {
//   const file = path.join(__dirname + '../../html/choose.html');
//   res.sendFile(file);
// });

routeRoom.get('/', (req, res) => {
  const file = _path2.default.join(__dirname + '../../html/index.html');
  res.sendFile(file);
});

exports.default = routeRoom;
//# sourceMappingURL=room.js.map