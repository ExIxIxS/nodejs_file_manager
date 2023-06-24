import { mkdir, stat } from 'node:fs';
import { handleError } from '../services/errorHandler.js';

function createFolder(directoryPath, folderName, finishCallBack) {
  const forlderPath = `${directoryPath}/${folderName.toLowerCase()}`;

  function handleStat(err, _) {
    if (err) {
      mkdir(forlderPath, { recursive: true }, (err) => {
        if (err) {
          handleError(err, 'Cannot create a new folder');
        }

        if (typeof(finishCallBack) === 'function') {
          finishCallBack();
        }
      });
    } else {
      finishCallBack();
    }
  }

  stat(forlderPath, handleStat);
}

export default createFolder;
