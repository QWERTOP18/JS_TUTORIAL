const client = url.startsWith('https') ? require('https') : require('http');

if (process.argv.length !== 3) {
    console.error('usage: node http-client.js url');
    process.exit(1);
}

const url = process.argv[2];

client.get(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        console.log(data.length);
        console.log(data);
    });

    response.on('error', (err) => {
        console.error('Error:', err);
    });

}).on('error', (err) => {
    console.error('Request Error:', err);
});

