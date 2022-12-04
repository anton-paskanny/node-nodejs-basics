import { readFile } from 'fs/promises';

export const read = async () => {
    const fileToRead = './files/fileToRead.txt';

    try {
        const data = await readFile(fileToRead, { encoding: 'utf-8' });
        console.log(data);
    } catch {
        throw new Error('FS operation failed');
    }
};

read();