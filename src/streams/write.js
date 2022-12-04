import fs from 'fs';

export const write = async () => {
    const stream = fs.createWriteStream('./files/fileToWrite.txt');

    process.stdin.on('data', data => {
        stream.write(data + '\n');
    });
};

write();