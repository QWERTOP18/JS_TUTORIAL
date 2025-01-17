//curl 'localhost:8080/api/parsetime?iso=2020-12-15T17:10:15.474Z'
//curl 'localhost:8080/api/unixtime?iso=2020-12-15T17:10:15.474Z'

/*
* status code 1xx: Informational
* status code 2xx: Success
* status code 3xx: Redirection
* status code 4xx: Client Error
* status code 5xx: Server Error
*/

const url = require('url');
const client = require('http');

if (process.argv.length !== 3) {
    console.error('usage: node time-server.js port');
    process.exit(1);
}

const server = client.createServer((req, res) => {
const parsedUrl = url.parse(req.url, true);

res.setHeader('Content-Type', 'application/json');

if (parsedUrl.pathname === '/api/parsetime' && parsedUrl.query.iso) {

    const isoDate = new Date(parsedUrl.query.iso);

    if (isoDate.getTime()) {
        const response = {
        hour: isoDate.getHours(),
        minute: isoDate.getMinutes(),
        second: isoDate.getSeconds(),
        };
        
        res.statusCode = 200;
        res.end(JSON.stringify(response) + '\n');
    } else {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid ISO date format' }) + '\n');
    }
} else if (parsedUrl.pathname === '/api/unixtime' && parsedUrl.query.iso) {

    const isoDate = new Date(parsedUrl.query.iso);

    if (isoDate.getTime()) {
        const response = {
        unixtime: isoDate.getTime(),
        };
        
        res.statusCode = 200;
        res.end(JSON.stringify(response) + '\n');
    } else {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid ISO date format' }) + '\n');
    }
} else {
// If the URL path is not recognized, return a 404
res.statusCode = 404;
res.end(JSON.stringify({ error: 'Not Found' }) + '\n');
}
});


const port = process.argv[2] || 8080;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
