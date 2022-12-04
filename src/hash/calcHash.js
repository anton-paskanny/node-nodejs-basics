import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

export const calculateHash = async () => {
    // Write your code here
    try {
        const file = await readFile('./files/fileToCalculateHashFor.txt');
        const hash = createHash('sha256').update(file).digest('hex');
        console.log('Hash: ', hash);
    } catch (error) {
        throw new Error(error);
    }
};

calculateHash();