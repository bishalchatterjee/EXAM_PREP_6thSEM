
const os = require('os');


const totalMemory = os.totalmem();
const kb = totalMemory / 1024;
const mb = kb / 1024;
const gb = mb / 1024;

console.log(`Total Memory: ${totalMemory} bytes`);
console.log(`Total Memory: ${kb} KB`);
console.log(`Total Memory: ${mb} MB`);
console.log(`Total Memory: ${gb} GB`);