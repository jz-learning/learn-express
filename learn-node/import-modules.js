console.log('\n');

// Modules are files, like classes

// Import statement
const { name1, name2 } = require('./example-modules/names');
const greeting = require('./example-modules/utils');

greeting(name1);
greeting(name2);
