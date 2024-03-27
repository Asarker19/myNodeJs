// const fs = require('fs');
// below code is to read a big file

// const ourReadStream =  fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf-8');

// this will stream file in binary
// ourReadStream.on('data', (chunk) => {
//     console.log(chunk);
// });

// to mnake it readable we need to add encoding as utf8 or we canh use toString console.log(chunk.toString());
// ourReadStream.on('data', (data) => {
//     console.log(data);
// });

// this is for read a request in server

const http = require("http");
server.listen(3000);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html><head><title>Form</title></head>");
    res.write(
      '<body><form method="post" action="process"/><input name="message"/></form></body>'
    );
    res.end();
  } else if (req.url === "/process" && req.method === "POST") {
    req.on("data", (chunk) => {
      console.log(chunk);
    });
    res.write("Thank you for submitting.");
    res.end();
  }
});

