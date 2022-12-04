import fs from 'fs';
import zlib from 'zlib';

export const decompress = async () => {
    const rS = fs.createReadStream('./files/archive.gz');
    const wS = fs.createWriteStream('./files/fileToCompressCheck.txt');
    const unzip = zlib.createUnzip();

    rS.pipe(unzip).pipe(wS);
};

decompress();