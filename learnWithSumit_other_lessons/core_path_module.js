// path.basename core module it takes one parameter and returns the base file name. 
const path = require('path');
const myPath = 'E:/Back_up from HP/myNodeJs/core_path.js';

console.log(path.basename(myPath));

// path.dirname
console.log(path.dirname(myPath));

// path.parse returns an object with a all the details 
console.log(path.parse(myPath));