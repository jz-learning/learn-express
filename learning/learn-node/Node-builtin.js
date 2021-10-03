// Node built-in moduels
// OS
// PATH
// FS
// HTTP

const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// system uptime in seconds
const uptime = os.uptime();
console.log(`The system uptime is: ${uptime}`);

// System info
const currentOS = {
  name     : os.type(),
  release  : os.release(),
  totalMem : os.totalmem(),
  freeMem  : os.freemem()
};

console.log(currentOS);
