import { Transform } from 'node:stream';
import handleUserCommand from './handleUserCommand.js';
import { getExitMessage } from '../utils/getters.js';
import { userNavigator } from '../index.js';

const execute = async () => {
    const appStream = new Transform({
        transform(chunk, _, callback) {
            const strChunk = chunk.toString().trim();

            this.push(strChunk);
            handleUserCommand(strChunk);
            callback();
        },
      });

    process.stdin.pipe(appStream);

    process.on('SIGINT', () => {
        console.log(getExitMessage(userNavigator.userName));
        process.exit(1);
    });
};

export default execute;
