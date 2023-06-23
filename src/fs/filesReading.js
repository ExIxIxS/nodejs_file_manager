import { createReadStream } from 'node:fs';
import { handleError } from '../services/errorHandler.js';

/*
  Read file and print it's content in console (should be done using Readable stream)
*/

async function readFileToConsole(filePath) {
    const stream = createReadStream(filePath);

    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    stream.on('error', (err) => {
      handleError(err, 'readFileToConsole() stream error');
    });
};

export { readFileToConsole };
