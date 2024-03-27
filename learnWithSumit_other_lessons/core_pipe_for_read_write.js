// this is example of read and write using pipe
// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.pipe(ourWriteStream);

// now we are going to send data to the client by response

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const myReadStream = fs.createReadStream(__dirname + "/bigdata.txt", "utf-8");
  myReadStream.pipe(res);
});
server.listen(3000);
console.log("Listening port 3000");
