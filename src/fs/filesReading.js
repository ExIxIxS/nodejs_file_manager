import { createReadStream } from 'node:fs';

import { handleError } from '../services/errorHandler.js';

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
