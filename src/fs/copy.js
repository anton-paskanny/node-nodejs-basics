import { mkdir } from 'node:fs/promises';
import { readdir } from 'node:fs/promises';
import { copyFile } from 'node:fs/promises';

const createFolder = async (path) => {
    try {
        await mkdir(path);
        return true;
    } catch (e) {
        throw new Error('createFolder, FS operation failed, e: ', e);
    }
}

export const copy = async () => {
    // 1. create folder "files_copy" 
    //      1.1. if it already exists - throw an error
    // 2 take data from folder "files"
    //      2. 1 if folder doesn't exists - throw an error
    // 3 put data from "files" folder into "files_copy"

    const destFolderPath = './files_copy';
    const sourceFolderPath = './files';

    await createFolder(destFolderPath);

    try {
        const filesToCopy = await readdir(sourceFolderPath);
        for (const file of filesToCopy) { 
            console.log(file); 
            await copyFile(`${sourceFolderPath}/${file}`, `${destFolderPath}/${file}`);
        };
    } catch (e) {
        throw new Error('copy, FS operation failed, e: ', e);
    }
};

copy();