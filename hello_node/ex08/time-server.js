const net = require('net');

if (process.argv.length !== 3) {
    console.error('usage: node http-server.js port');
    process.exit(1);
}

const port = process.argv[2];

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        const request = data.toString();
        console.log(`Request received:\n${request}`);

        const currentDate = new Date();
    
        const formattedDate = currentDate.toISOString().slice(0, 16).replace('T', ' ');
        // create HTTP response
        const body = `${formattedDate}\n`;
        const response = 
`HTTP/1.1 200 OK
Content-Type: text/plain
Content-Length: ${body.length}

${body}`;

        socket.write(response);
        socket.end();
      
    });

    socket.on('error', (err) => {
        console.error(`Socket error: ${err.message}`);
    });
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
