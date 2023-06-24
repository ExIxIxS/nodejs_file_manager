import { userNavigator } from "../index.js";
import { USER_COMMANDS } from "../constants/userCommands.js";
import { handleError } from "../services/errorHandler.js";
import { getExitMessage } from "../utils/getters.js";
import { getFileListTable } from "../fs/ls.js";
import { readFileToConsole } from "../fs/filesReading.js";
import { create } from "../fs/create.js";
import { rename } from "../fs/rename.js";
import { copyFile } from "../fs/copyFile.js";
import { deleteFile } from "../fs/delete.js";
import { moveFile } from "../fs/move.js";
import { handleOsCommand } from '../os/handleOsCommand.js';
import { getFileHash } from "../hash/calcHash.js";
import { compress } from "../zip/compress.js";
import { decompress } from "../zip/decompress.js";

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
      const [sourceFilePath, targetDirectoryPath] = args;
      copyFile(sourceFilePath, targetDirectoryPath);

      break;
    }
    case 'rm': {
      const [targetPath] = args;
      deleteFile(targetPath);

      break;
    }
    case 'mv': {
      const [sourceFilePath, targetDirectoryPath] = args;
      moveFile(sourceFilePath, targetDirectoryPath);

      break;
    }
    case 'os': {
      const [osArg] = args;
      handleOsCommand(osArg);

      break;
    }
    case 'hash': {
      const [filePath] = args;
      const hash = await getFileHash(filePath);
      if (hash) {
        console.log(hash);
      }

      break;
    }
    case 'compress': {
      const [filePath, zipDirectory] = args;
      await compress(filePath, zipDirectory);

      break;
    }
    case 'decompress': {
      const [filePath, zipDirectory] = args;
      await decompress(filePath, zipDirectory);

      break;
    }
    default: {
      handleError(new Error('Unknown user command'), `Unknown user command, ${commandName}`)
    }
  }

  userNavigator.informAboutCurrenDirectory();

};

export default handleUserCommand;