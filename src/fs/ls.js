import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

import { userNavigator } from "../index.js";
import { handleError } from '../services/errorHandler.js';

async function getFileListTable() {
  try {
    const path = userNavigator.currentDirectory;
    const files = await readdir(path);
    const filesTable = await getTableFromFileList(files, path);

    return filesTable;

    } catch (err) {
      handleError(err, 'readdir() error');
    }

}

async function getTableFromFileList(fileList, currentDirectory) {
  let table;
  try {
    const promisesTable = fileList.map(async (fileName) => {
      const filePath = join(currentDirectory, fileName);
      const stats = await stat(filePath);
      const isFile = stats.isFile();
      const type = isFile
        ? 'file'
        : 'directory';

      return { fileName, type };
    })

    table = await Promise.all(promisesTable);
  } catch(err) {
    handleError(err, 'getTableFromFileList() error');
    return;
  }

  table
    .sort(sortFilesByTypeInAsc);

  return table;
}

function sortFilesByTypeInAsc(a, b) {
  if (a.type === b.type) {
    return a.fileName.localeCompare(b.fileName);
  }

  return a.type === 'directory'
    ? -1
    : 1;
}

export { getFileListTable };
