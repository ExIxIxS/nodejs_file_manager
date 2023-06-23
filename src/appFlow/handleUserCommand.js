import { userNavigator } from "../index.js";
import { USER_COMMANDS } from "../constants/userCommands.js";
import { handleError } from "../services/errorHandler.js";
import { getExitMessage } from "../utils/messageGetters.js";
import { getFileListTable } from "../fs/ls.js";
import { readFileToConsole } from "../fs/filesReading.js";
import { create } from "../fs/create.js";
import { rename } from "../fs/rename.js";
import { copyFile } from "../fs/copyFile.js";

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
    case 'ls': {
      const filesTable = await getFileListTable();

      if (filesTable) {
        console.table(filesTable);
      }

      break;
    }
    case 'cat': {
      const [filePath] = args;
      await readFileToConsole(filePath);

      break;
    }
    case 'add': {
      const [fileName] = args;
      await create(fileName);

      break;
    }
    case 'rn': {
      const [filePath, fileName] = args;
      await rename(filePath, fileName);

      break;
    }
    case 'cp': {
      const [sourcePath, targetPath] = args;
      copyFile(sourcePath, targetPath);

      break;
    }
    default: {
      handleError(new Error('Unknown user command'), `Unknown user command, ${commandName}`)
    }
  }

  userNavigator.informAboutCurrenDirectory();

};

export default handleUserCommand;