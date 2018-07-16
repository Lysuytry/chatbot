export const chatHandler = socket => {

  socket.on('join', (data) => {
    const {channel, id} = data;
    const oldChannel = socket.channel;
    if(oldChannel){
      console.log(`user:${id} left: ${channel}`);
      socket.leave(oldChannel);
      socket.to(channel).emit('broadcast', `left chat ${id} `);
    }
    socket.channel = channel;
    console.log(`user:${id} joined: ${channel}`);
    socket.join(channel);
    socket.to(channel).emit('broadcast', `Join chat ${id} `);
  });

  socket.on('chat', (data) => {
    const channel = socket.channel;
    const { username, messages } = data;
    socket.to(channel).emit('chat', { username, room: channel, messages});
  });
};
