const fs = require('fs');


if (process.argv.length !== 3) 
{
  console.log('usage: node io.js file');
}
else
{
    const filePath = process.argv[2];
    
    let fileContent;
    // try 
    // {
    //     fileContent = fs.readFileSync(filePath, 'utf8');
    // }
    // catch (e) 
    // {
    //     console.log(`Error: ${e.message}`);
    //     process.exit(1);
    // }
    fileContent = fs.readFileSync(filePath, 'utf8');
    let newlineCount = 0;
    for (let i = 0; i < fileContent.length; i++) 
    {
        if (fileContent[i] === '\n') 
        {
            newlineCount++;
        }
    }
    console.log(newlineCount);
}


