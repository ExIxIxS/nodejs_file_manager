import { userNavigator } from "../index.js";
import { USER_COMMANDS } from "../constants/userCommands.js";
import { handleError } from "../services/errorHandler.js";
import { getExitMessage } from "../utils/messageGetters.js";

const handleUserCommand = async (command) => {
  const [commandName, ...args] = command.split(' ');

  if (!USER_COMMANDS.includes(commandName)) {
    handleError(new Error('Unknown user command'), `Unknown user command, ${commandName}`)
    return;
  }

  switch(commandName) {
    case '.exit': {
      console.log(getExitMessage(userNavigator.userName))
      process.exit(1);
    }
    case 'up': {
      userNavigator.goUpper();
      break;
    }
    case 'cd': {
      const [path] = args;

      userNavigator.goToDirectory(path);
      break;
    }

    default: {
      handleError(new Error('Unknown user command'), `Unknown user command, ${commandName}`)
    }
  }

  userNavigator.informAboutCurrenDirectory();

};

export default handleUserCommand;