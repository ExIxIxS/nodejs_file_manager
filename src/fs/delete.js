import { rm } from 'node:fs';
import { handleError } from '../services/errorHandler.js';

async function deleteFile(targetPath) {
    rm(targetPath, callback)
};

function callback(err) {
    if (err) {
        handleError(err, `file deleting error for: ${targetPath}`)
    };
}

export { deleteFile };
