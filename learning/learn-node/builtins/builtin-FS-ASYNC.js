const { readFile, writeFile } = require('fs');

// Async reading and writing to files

// The callback functions returns after the async `read` has been completed
// Callabck hell, terrible way to do this
readFile('../content/first.txt', 'utf-8', (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res);
  const first = res;

  // Read second file during callback
  readFile('../content/second.txt', 'utf-8', (err, res) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = res;

    // Lastly, write file
    writeFile('../content/result-sync.txt', `The results are: ${first}, ${second}`, (err, res) => {
      console.log(res); // doesn't really return anything
    });
  });
});
