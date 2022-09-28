import fs from 'fs';

export const read = async () => {
    // Write your code here 
    const stream = fs.createReadStream('./files/fileToRead.txt');

    stream.on('error', err => console.log(err));

    stream.on('data', chunk => process.stdout.write(chunk));
};

read();