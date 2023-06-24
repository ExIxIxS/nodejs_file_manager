import { createReadStream, createWriteStream, rm } from 'node:fs';
import { createGunzip } from 'node:zlib';

/*
decompress.js - implement function that decompresses archive.gz
    back to the fileToCompress.txt with same content as before compression using zlib and Streams API
*/

const FILE_PATH = './src/zip/files/fileToCompress.txt';
const ARCHIVE_PATH = './src/zip/files/archive.gz';

const decompress = async (filePath, zipDirectoryPath) => {
    const readStream = createReadStream(ARCHIVE_PATH);
    const writeStream = createWriteStream(FILE_PATH);
    const gunzip = createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);

    writeStream.on('finish', () => {
        rm(ARCHIVE_PATH, (err) => {
            if (err) {
                throw new Error(`Error deleting file: ${err}`);
            } else {
                console.log('Decompression completed!');
            }
        });
    });

    writeStream.on('error', (err) => {
        throw new Error(`Error decompressing file: ${err}`);
    });
};

await decompress();