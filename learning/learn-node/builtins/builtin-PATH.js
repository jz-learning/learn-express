const path = require('path');

console.log(path.sep); // "/"

// Using the system separater to join paths together
const filePath = path.join('/learning', '/learn-node', 'import-modules.js');

// Different paths joined together
const absolute = path.resolve(__dirname, 'learning', 'learn-node');

console.log(absolute);
