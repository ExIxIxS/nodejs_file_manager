import { copyFile } from "./copyFile.js";
import { deleteFile } from "./delete.js";

function moveFile(sourceFilePath, targetDirectoryPath) {
  copyFile(sourceFilePath, targetDirectoryPath, deleteFile.bind(null, sourceFilePath));
}

export { moveFile };
