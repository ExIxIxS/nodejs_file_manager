import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';

import { getFileNameFromFilePath } from '../utils/getters.js';
import { handleError } from '../services/errorHandler.js';
import { isValidPath } from '../utils/checkers.js';

async function compress(filePath, zipDirectoryPath) {
    if (!isValidPath(filePath) || !isValidPath(zipDirectoryPath)) {
        handleError(new Error('invalid arguments'), 'invalid path arguments');

        return;
    }

    const fileName = getFileNameFromFilePath(filePath);
    const zipFilePath = `${zipDirectoryPath}/${fileName}.bz`;
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(zipFilePath);
    const bzip = createBrotliCompress();

    readStream.pipe(bzip).pipe(writeStream);

    readStream.on('error', (err) => {
        handleError(err, 'compress readStream error')
    });

    writeStream.on('error', (err) => {
        handleError(err, 'compress writeStream error')
    });
};

export { compress };
