import { existsSync, mkdir } from 'node:fs';
import { USERS_FOLDER_PATH } from '../constants/paths.js'
import { handleError } from '../services/errorHandler.js';

function createFolder(folderName) {
  const forlderPath = `${USERS_FOLDER_PATH}/${folderName.toLowerCase()}`

  if (!existsSync(forlderPath)) {
    mkdir(forlderPath, { recursive: true }, (err) => {
      if (err) {
        handleError(err, 'Cannot create a new folder');
      }
    });
  }
}

export default createFolder;
