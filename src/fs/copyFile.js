import { createReadStream, createWriteStream } from 'node:fs'
import { handleError } from '../services/errorHandler.js';
import { isValidPath } from '../utils/checkers.js';
import { getFileNameFromFilePath } from '../utils/getters.js';

function copyFile(sourceFilePath, targetDirectoryPath, finishCallBack) {
  if (!isValidPath(sourceFilePath) || !isValidPath(targetDirectoryPath)) {
    handleError(new Error('invalid arguments'), 'invalid path arguments');

    return;
  }

  const fileName = getFileNameFromFilePath(sourceFilePath);

  const copyFilePath = `${targetDirectoryPath}/${fileName}`;

  const sourceStream = createReadStream(sourceFilePath);
  const targetStream = createWriteStream(copyFilePath);

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
