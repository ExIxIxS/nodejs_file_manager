import os from 'node:os';

import { handleError } from "../services/errorHandler.js";

function handleOsCommand(commandArg) {
  switch(commandArg) {
    case '--EOL': {
      console.log(JSON.stringify(os.EOL));
      break;
    }
    case '--cpus': {
      const cpusInfo = os.cpus();

      console.log(`Host cpu amount: ${cpusInfo.length}`);
      cpusInfo.forEach((cpuInfoObj) => {
        console.log(`${cpuInfoObj.model} / ${cpuInfoObj.speed / 1000} GHz`);
      })
      break;
    }
    case '--homedir': {
       console.log(os.homedir());

      break;
    }
    case '--username': {
      console.log(os.userInfo().username);

     break;
    }
    case '--architecture': {
      console.log(os.arch());

     break;
   }
    default: {
      handleError(new Error('Unknown os command arg '), `Unknown os command arg, ${commandArg}`)
    }
  }
}

export { handleOsCommand };
