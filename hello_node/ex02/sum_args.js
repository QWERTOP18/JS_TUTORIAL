let sum = 0;
let isok = true;

if (process.argv.length < 3) 
{
    console.log("Usage: node sum_args.js 1 ...");
}
else
{
    
    for (let i = 2; i < process.argv.length; i++) 
    {
        let num = parseInt(process.argv[i], 10);
        if (!isNaN(num)) 
        {
            sum += num;
        } else 
        {
            console.log(`${process.argv[i]} is not a valid number.`);
            isok = false;
        }
    }
        
    if (isok)    
        console.log(sum);
}
