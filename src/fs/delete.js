import { readFile } from 'node:fs/promises';
import { unlink } from 'node:fs/promises';

export const remove = async () => {
    const fileToRemove = './files/fileToRemove.txt';

    try {
        await readFile(fileToRemove);
        await unlink(fileToRemove);
    } catch (e) {
        throw new Error ('FS operation failed: fileToRemove.txt was not found', e);
    }
};

remove();