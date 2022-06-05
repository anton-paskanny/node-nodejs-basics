//const fs = require('fs/promises');
import fs from 'fs/promises';

// async function exists (path) {  
//     try {
//       await fs.access(path);
//       return true;
//     } catch {
//         ///throw new Error('FS operation failed');
//         console.log('return false!!!')
//       return false;
//     }
//   }

export const create = async () => {
    // Write your code here
    const fileContent = 'I am fresh and younasd asdas dg';
    const fileName = 'fresh.txt';
    const filePath = `./files/${fileName}`;
    const fileExistsErrText = 'FS operation failed - such file already exists!';

    try {
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        if (data) { throw new Error(fileExistsErrText); }
    } catch (e) {
        if (e.message !== fileExistsErrText) {
            await fs.writeFile(filePath, fileContent);
        }
    }
};

create();