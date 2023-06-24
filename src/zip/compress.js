import { createReadStream, createWriteStream, rm } from 'node:fs';
import { createGzip } from 'node:zlib';

/*
compress.js - implement function that compresses file fileToCompress.txt
    to archive.gz using zlib and Streams API
*/

const FILE_PATH = './src/zip/files/fileToCompress.txt';
const ARCHIVE_PATH = './src/zip/files/archive.gz';

const compress = async () => {
    const readStream = createReadStream(FILE_PATH);
    const writeStream = createWriteStream(ARCHIVE_PATH);
    const gzip = createGzip();

    readStream.pipe(gzip).pipe(writeStream);

    writeStream.on('finish', () => {
        rm(FILE_PATH, (err) => {
            if (err) {
                throw new Error(`Error deleting file: ${err}`);
            } else {
                console.log('Compression completed!');
            }
        });
    });

    writeStream.on('error', (err) => {
        throw new Error(`Error compressing file: ${err}`);
    });
};

await compress();
