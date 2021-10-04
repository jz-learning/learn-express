const fs = require('fs');

// Reads from files
const first = fs.readFileSync('../content/first.txt', 'utf8');
const second = fs.readFileSync('../content/second.txt', 'utf8');

// Writes to files, overrides and creates file if non exsistant
fs.writeFileSync('../content/result-sync.txt', `The results are: ${first}, ${second}`);

// Writes to files, with append flag
fs.writeFileSync('../content/result-sync.txt', `\nAdding some stuff to the end`, { flag: 'a' });
