// nc localhost 8080
// curl localhost:8080

const net = require('net');
if (process.argv.length !== 3) {
    console.error('usage: node time-server.js port');
    process.exit(1);
}
const port = process.argv[2];

const server = net.createServer((socket) => {
  
  const currentDate = new Date();
    
  const formattedDate = currentDate.toISOString().slice(0, 16).replace('T', ' ');

  //iso stands for International Organization for Standardization

  socket.write(formattedDate + '\n');
  socket.end();
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
