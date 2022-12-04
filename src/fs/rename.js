import { rename } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';



export const myRename = async () => {
    const fileToRename = "./files/wrongFilename.txt";
    const newFileName = "./files/properFilename.md";

    // it reads file wrongFilename.txt. If there is no such file, readFile will throw an error
    try {
        await readFile(fileToRename);
    } catch (e) {
        throw new Error ('FS operation failed: no file for renaming', e);
    }

    // check if properFilename.mb already exists
    // if it exists - throw en error.
    // if it doesn't exists - we can make rename operation.
    if (existsSync(newFileName)) {
        throw new Error ('FS operation failed: final file already exists');
    }

    rename(fileToRename, newFileName);
};

myRename();