import { appendFile } from 'node:fs';

import { userNavigator } from '../index.js';
import { ERROR_LOG_FILE_NAME } from '../constants/paths.js';

function handleError(err, comment) {
  console.error('Operation failed');
  logError(err, comment)
}

function logError(err, comment) {
  const logFilePath = `${userNavigator.userDirectory}/${ERROR_LOG_FILE_NAME}`;
  const errorDate = new Date();
  const errorDateStr = `${errorDate.getFullYear()}.${errorDate.getMonth()}.${errorDate.getDate()} - ${errorDate.getHours()}:${errorDate.getMinutes()}`;

  const errorMessage = `
    ${errorDateStr} - ${userNavigator.userName}
    Error description: ${comment}
    Error: ${JSON.stringify(err)}`

  appendFile(logFilePath, errorMessage + '\n', (err) => {
    if (err) {
      console.log('logging error');
    }
  });
}

export {
  handleError,
}
