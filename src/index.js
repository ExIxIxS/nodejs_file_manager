import execute from './appFlow/execute.js'
import { ERROR_LOG_FILE_NAME } from './constants/paths.js';
import { createLogFile } from './fs/create.js';
import createFolder from './fs/createFolder.js';
import Navigator from './services/navigator.js';
import { getStartMessage } from './utils/getters.js';

const args = process.argv.slice(2);
const userNameArg = args.find(arg => arg.startsWith('--username='));

if (!userNameArg) {
  throw new Error('Please provide a username using the --username argument.');
}

const [, userName] = userNameArg.split('=');

const userNavigator = new Navigator(userName);

createFolder(userNavigator.rootPath, userName, () => {
  userNavigator.switchToUserDirectory();
  createLogFile(ERROR_LOG_FILE_NAME);
  console.log(getStartMessage(userName));
  userNavigator.informAboutCurrenDirectory();
});

await execute();

export { userNavigator };
