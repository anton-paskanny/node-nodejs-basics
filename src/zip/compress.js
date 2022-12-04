import fs from 'fs';
import zlib from 'zlib';

export const compress = async () => {
    const rS = fs.createReadStream('./files/fileToCompress.txt');
    const wS = fs.createWriteStream('./files/archive.gz');
    const gzip = zlib.createGzip();

    rS.pipe(gzip).pipe(wS);
};

compress();