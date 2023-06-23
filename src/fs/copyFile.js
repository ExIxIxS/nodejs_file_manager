import { createReadStream, createWriteStream } from 'node:fs'
import { handleError } from '../services/errorHandler.js';
import { isValidPath } from '../utils/checkers.js';

function copyFile(sourceFilePath, targetFilePath, finishCallBack) {
  if (!isValidPath(sourceFilePath) || !isValidPath(targetFilePath)) {
    handleError(new Error('invalid arguments'), 'invalid path arguments');

    return;
  }

  const sourceStream = createReadStream(sourceFilePath);
  const targetStream = createWriteStream(targetFilePath);

  sourceStream.on('error', (err) => {
    handleError(err, 'Error reading the source file');
  });

  targetStream.on('error', (err) => {
    handleError(err, 'Error writing to the destination file');
  });

  sourceStream.pipe(targetStream);

  if (typeof(finishCallBack) === 'function') {
    targetStream.on('finish', finishCallBack)
  }
}

export { copyFile };
