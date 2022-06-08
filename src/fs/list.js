import { readdir } from 'node:fs/promises';

export const list = async () => {
    const sourceFolderPath = './files';

    try {
        const filesToCopy = await readdir(sourceFolderPath);
        for (const file of filesToCopy) { 
            console.log(file);
        };
    } catch {
        throw new Error('FS operation failed');
    }
};

list();