import { Router } from 'express';
import path from 'path';

const routeRoom = Router();

// routeRoom.get('/', (req, res) => {
//   const file = path.join(__dirname + '../../html/choose.html');
//   res.sendFile(file);
// });

routeRoom.get('/', (req, res) => {
  const file = path.join(__dirname + '../../html/index.html');
  res.sendFile(file);
});

export default routeRoom;
