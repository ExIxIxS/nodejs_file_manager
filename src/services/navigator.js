import { isAbsolute, resolve } from 'node:path';

import { handleError } from './errorHandler.js';

import { USERS_FOLDER_PATH } from "../constants/paths.js";
import { isNonEmptyString } from '../utils/checkers.js';
import createFolder from '../fs/createFolder.js';

const ABSOLUTE_ROOT_PATH = resolve(USERS_FOLDER_PATH);

class Navigator {
  constructor(userName) {

    this.userName = userName;
    createFolder(userName);
    this.switchToUserDirectory();
  }

  get currentDirectory() {
    return process.cwd();
  }

  switchToUserDirectory() {
    process.chdir(`${USERS_FOLDER_PATH}/${this.userName}`);
  }

  goUpper() {
    this.goToDirectory('..')
  }

  goToDirectory(pathToDirectory) {
    if (!isNonEmptyString(pathToDirectory)) {
      handleError(new TypeError('path should be a strind'), `path: ${pathToDirectory} should be a strind`);
      return;
    }

    const currentDirectory = process.cwd();
    const absolutePath = isAbsolute(pathToDirectory)
      ? pathToDirectory
      : resolve(currentDirectory, pathToDirectory);

    if (absolutePath.startsWith(ABSOLUTE_ROOT_PATH) && absolutePath !== ABSOLUTE_ROOT_PATH) {
      try {
        process.chdir(absolutePath);
      } catch (err) {
          handleError(err, 'Error changing working directory');
      }
    } else {
      handleError(new Error('Error changing working directory'), 'Cannot navigate beyond the root directory');
    }
  }

  informAboutCurrenDirectory() {
    console.log(`You are currently in ${process.cwd()}`);
  }

}

export default Navigator;
