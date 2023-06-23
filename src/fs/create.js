import { open, close } from 'node:fs';
import { handleError } from '../services/errorHandler.js';
import { userNavigator } from '../index.js';

async function create(fileName) {
    const filePath = `${userNavigator.currentDirectory}/${fileName}`;

    open(filePath, 'wx', (err, fd) => {
        if (err) {
            if (err?.code === 'EEXIST') {
                handleError(err, 'file have already exists');
            } else {
                handleError(err, 'file creating error');
            }
        } else {
            closeFd(fd);
        }
    });

};

function closeFd(fd) {
  close(fd, (err) => {
    if (err) {
        handleError(err, 'file closing error');
    };
  });
}

export { create };
