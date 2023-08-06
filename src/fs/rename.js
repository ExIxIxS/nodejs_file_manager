import { rename as fsRename } from 'node:fs';
import { access, constants } from 'node:fs/promises';
import { handleError } from '../services/errorHandler.js';

async function rename (filePath, newFileName) {
    const newFilePath = filePath
        .split('/')
        .slice(0, -1)
        .concat(newFileName)
        .join('/');

    try {
        await access(newFilePath, constants.F_OK);
        handleError(new Error('target file exists'), 'file with this name already exists');
    } catch {
        fsRename(filePath, newFilePath, renameCallback);
    }

};

function renameCallback(err) {
    if (err) {
        handleError(err, 'fsRename() error');
    };
}

export { rename };
