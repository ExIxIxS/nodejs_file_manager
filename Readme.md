## Node.js File Manager Application
### 1. Description:
The file manager is able to do the following:
- Work using CLI
- Perform basic file operations (copy, move, delete, rename, etc.)
- Utilize Streams API
- Get information about the host machine operating system
- Perform hash calculations
- Compress and decompress files

### 2. How to use:
+ use cli script 'npm run start -- --username=YourName' or use test template 'npm run start -- --username=batman',

### 3. Features with usage examples
##### General
| Feature | Usage example |
| :---: | :---: |
| Application accepts username and prints proper message | npm run start -- --username=batman |
| Application exits if user pressed ctrl+c or sent .exit command and proper message is printed | 'ctrl+c' or '.exit' |
##### Operations fail
| Feature | Usage example |
| :---: | :---: |
| Attempts to perform an operation on a non-existent file or work on a non-existent path result in the operation fail | 'cp toCopy.txt notExists' or 'cp notExists.txt' |
| Operation fail doesn't crash application | 'cp toCopy.txt notExists' or 'cp notExists.txt forCopies' |
##### Navigation & working directory operations implemented properly
| Feature | Usage example |
| :---: | :---: |
| Go upper from current directory | 'cd forCopies' + 'up' |
| Go to dedicated folder from current directory | 'cd forCopies' |
| List all files and folders in current directory | 'ls' |
##### Basic operations with files implemented properly
| Feature | Usage example |
| :---: | :---: |
| Read file and print it's content in console | 'cat toRead.txt' |
| Create empty file | 'add new.txt' |
| Rename file | 'rn new.txt old.txt' |
| Copy file | 'cp toCopy.txt forCopies' |
| Move file | 'mv toMove.txt betaTest' |
| Delete file | 'rm toDelete.txt' |
##### Operating system info (prints following information in console) implemented properly
| Feature | Usage example |
| :---: | :---: |
| Get EOL (default system End-Of-Line) | 'os --EOL' |
| Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) | 'os --cpus' |
| Get home directory | 'os --homedir' |
| Get current system user name (Do not confuse with the username that is set when the application starts) | 'os --username' |
| Get CPU architecture for which Node.js binary has compiled | 'os --architecture' |
##### Hash calculation implemented properly
| Feature | Usage example |
| :---: | :---: |
| Calculate hash for file | 'hash toRead.txt' |
##### Compress and decompress operations
| Feature | Usage example |
| :---: | :---: | -- | -- |
| Compress file (using Brotli algorithm) | 'compress toCompress.txt archives' |
| Decompress file (using Brotli algorithm) | 'decompress archives/toCompress.txt.bz ./' |
#### Advanced Scope
| Feature | Usage example |
| :---: | :---: |
| All operations marked as to be implemented using certain streams should be performed using Streams API | Streams API used |
| No synchronous Node.js API with asynchronous analogues is used (e.g. not used readFileSync instead of readFile) | Asynchronous analogues used in all modules |
| Codebase is written in ESM modules instead of CommonJS | ESM used in all modules |
#### Error logging
| Feature | Usage example |
| :---: | :---: |
| For each user, errors are logged to a file userErrorsLog.txt. | Open userErrorsLog.txt |

#### NOTE: in development used 18.16.0 LTS version of Node.js

---------------------------

#### Task: [Node.js File Manager](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md)
