const fs = require('fs');

if (process.argv.length !== 3) {
    console.log('usage: node io.js file');
}
else {
    fs.readFile(process.argv[2], 'utf8', (err, data) => {
        if (err) {
            console.log('read error', err);
            return;
        }
        console.log(data.split('\n').length - 1);
    });
}