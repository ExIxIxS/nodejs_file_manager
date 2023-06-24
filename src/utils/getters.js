function getStartMessage(userName) {
  return `Welcome to the File Manager, ${userName}!`
}

function getExitMessage(userName) {
  return `Thank you for using File Manager, ${userName}, goodbye!`
}

function getFileNameFromFilePath(filePath) {
  const normalizedFilePath = filePath.replaceAll('\\', '/')

  return normalizedFilePath
    .split('/')
    .slice(-1)
    .join('');
}

export {
  getStartMessage,
  getExitMessage,
  getFileNameFromFilePath
};
