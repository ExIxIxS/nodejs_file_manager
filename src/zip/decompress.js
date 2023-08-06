import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';

import { isValidPath } from '../utils/checkers.js';
import { handleError } from '../services/errorHandler.js';
import { getFileNameFromFilePath } from '../utils/getters.js';

async function decompress(zipFilePath, unzipDirectoryPath) {
    if (!isValidPath(zipFilePath) || !isValidPath(unzipDirectoryPath)) {
        handleError(new Error('invalid arguments'), 'invalid path arguments');

        return;
    }

    const fileName = getFileNameFromFilePath(zipFilePath)
        .replaceAll('.bz', '');

    const unzipFilePath = `${unzipDirectoryPath}/${fileName}`;

    const readStream = createReadStream(zipFilePath);
    const writeStream = createWriteStream(unzipFilePath);
    const bzip = createBrotliDecompress();

    readStream.pipe(bzip).pipe(writeStream);

    readStream.on('error', (err) => {
        handleError(err, 'decompress readStream error')
    });

    writeStream.on('error', (err) => {
        handleError(err, 'decompress writeStream error')
    });
};

export { decompress };