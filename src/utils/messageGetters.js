function getStartMessage(userName) {
  return `Welcome to the File Manager, ${userName}!`
}

function getExitMessage(userName) {
  return `Thank you for using File Manager, ${userName}, goodbye!`
}

export {
  getStartMessage,
  getExitMessage
};
