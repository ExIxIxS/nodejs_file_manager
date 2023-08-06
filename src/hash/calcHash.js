import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

import { handleError } from '../services/errorHandler.js';

async function getFileHash(filePath) {
  try {
    return await calculateHash(filePath);
  } catch(err) {
    handleError(err, `hash calculation error for: ${filePath}`)
  }
}

async function calculateHash(filePath) {
    const hash = createHash('sha256');
    const input = createReadStream(filePath);

    return new Promise((resolve, reject) => {
      input.on('readable', () => {
        const data = input.read();
        if (data)
          hash.update(data);
        else {
          const fileHash = hash.digest('hex');
          resolve(fileHash);
        }
      });

      input.on('error', (err) => {
        reject(err);
      });
    });
};



export { getFileHash };
