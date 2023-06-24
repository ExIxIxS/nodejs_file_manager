import execute from './appFlow/execute.js'
import Navigator from './services/navigator.js';
import { getStartMessage } from './utils/getters.js';

const args = process.argv.slice(2);
const userNameArg = args.find(arg => arg.startsWith('--username='));

if (!userNameArg) {
  throw new Error('Please provide a username using the --username argument.');
}

const [, userName] = userNameArg.split('=');

const userNavigator = new Navigator(userName);

userNavigator.switchToUserDirectory();
console.log(getStartMessage(userName));
userNavigator.informAboutCurrenDirectory();

await execute();

export { userNavigator };
