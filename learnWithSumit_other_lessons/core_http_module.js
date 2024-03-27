const http = require("http");
console.log("Note 1: node js allows to create a server from the application");
console.log(
  "*************************************************************************************"
);
console.log("Note 2: http.createServer() creates the server");
console.log(
  "Note 3: server object also an Event Emitter so it has event raise/ listener/ on/ off etc in-built function"
);
console.log(
  "*************************************************************************************"
);
console.log(
  "Note 6: we are going to add a call back function inside the create server"
);
console.log(
  "Note 7: Create server call back function takes 2 parameter req and response"
);
console.log(
  "Note 8: response object can take write function, this function can be repeat multiple time"
);
console.log("Note 9: response write function needs to end by res.end().");

// this is when our request hit to root director http://localhost:3000/
// const server = http.createServer((req, res) => {
// res.write('Hello Anup.');
// res.write('How are you? ');
// res.end();
// });

// we are now going to check url by root '/' [http://localhost:3000/] ; '/about' [http://localhost:3000/about] and other url [http://localhost:3000/checkthis]
const server = http.createServer((req, res) => {
  // add a if to check requst url
  if (req.url === "/") {
    res.write("Hello Anup.");
    res.write("How are you? ");
    res.end();
  } else if(req.url === '/about'){
    res.write("This is about us page.");
    res.end();
  } else {
    res.write(" Not found....");
    res.end();
  }
});

console.log("Note 4: server.listen(port#)-- node server port 3000");
server.listen(3000);
console.log(
  "*************************************************************************************"
);
console.log("Listening on port 3000");
console.log(
  "*************************************************************************************"
);
// console.log("Note 5: server.on is a listener, it will fire when a new connection hits the server.");
// server.on('connection', ()=>{
//  console.log('new connection.........');
// });
