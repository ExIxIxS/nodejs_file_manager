import { rm } from 'node:fs';

import { handleError } from '../services/errorHandler.js';

function deleteFile(targetPath) {
    try {
        rm(targetPath, callback)
    } catch(err) {
        handleError(err, `file deleting error for path: ${targetPath}`)
    }

};

function callback(err) {
    if (err) {
        handleError(err, `file deleting error for path: ${targetPath}`)
    };
}

export { deleteFile };
