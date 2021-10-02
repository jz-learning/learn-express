// Global variables in Node

// __dirname	- Path to current directory
// __filename 	- file name
// require		- function to use modules (COmmonJS)
// module		- infor about current module (file)
// process		- info about env where the program is being executed

console.log(__dirname);
// c:\Users\james\OneDrive\Code\learn\learn-express\learn\learn-node

console.log(__filename);
// c:\Users\james\OneDrive\Code\learn\learn-express\learn-node\intro.js

console.log(module);
const mod = {
  id       : '.',
  path     : 'c:\\Users\\james\\OneDrive\\Code\\learn\\learn-express\\learn-node',
  exports  : {},
  parent   : null,
  filename : 'c:\\Users\\james\\OneDrive\\Code\\learn\\learn-express\\learn-node\\intro.js',
  loaded   : false,
  children : [],
  paths    : [
    'c:\\Users\\james\\OneDrive\\Code\\learn\\learn-express\\learn-node\\node_modules',
    'c:\\Users\\james\\OneDrive\\Code\\learn\\learn-express\\node_modules',
    'c:\\Users\\james\\OneDrive\\Code\\learn\\node_modules',
    'c:\\Users\\james\\OneDrive\\Code\\node_modules',
    'c:\\Users\\james\\OneDrive\\node_modules',
    'c:\\Users\\james\\node_modules',
    'c:\\Users\\node_modules',
    'c:\\node_modules'
  ]
};

setInterval(() => {
  console.log('hello world');
}, 100);

// Run module by using `node app.js`