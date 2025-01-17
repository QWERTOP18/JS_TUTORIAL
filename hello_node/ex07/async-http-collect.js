const http = require('http');
const https = require('https');


function getData(url) {
  return new Promise((resolve, reject) => {
    let data = '';
    const client = url.startsWith('https') ? https : http;
    client.get(url, (response) => {
      response.setEncoding('utf8');

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        resolve(data);
      });

      response.on('error', (err) => {
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}


if (process.argv.length !== 5) {
  console.error('Usage: node async-http-collect.js <url1> <url2> <url3>');
  process.exit(1);
}


const urls = process.argv.slice(2);

async function collectData() {
  try {
    for (let i = 0; i < urls.length; i++) {
      const data = await getData(urls[i]);
      console.log(data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

collectData();
