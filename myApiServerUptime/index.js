// dependencies
const http = require("http");
// const url = require("url");
// const { StringDecoder } = require("string_decoder"); // we are just pluck string_decoder from the StringDecoder class

// we are bringing the handleReqRes function 
const {handleReqRes} =require('./helpers/handleReqRes'); 

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

app.handleReqRes = handleReqRes; // now app.handleReqRes will call the handleReqRes function. 

// handle Request Response -- this function now moved under /helper/handlerReqRes.js
/********************************************************************************************************************* */
// app.handleReqRes = (req, res) => {
// request handler
// - First we need to get the url and parse the url
// We will create a new variable call parseUrl and we will use core module url.parse() function to get the url.
// url.parse function takes 2 parameter - 1] full url path --> we can get this from req.url 2] 2nd parameter is true ot false --> we are asking the req.url to consider query string if we use "true" example: http://localhost:3000/aboutus?./as8e.id#123222etc
// we can also use false to say do not consider query string
//   const parsedUrl = url.parse(req.url, true);
//Checking what inside the parsedUrl
//console.log(parsedUrl);
// Note: parsedUrl variable already has : protocol, search, query, pathname, path, herf etc info. we will use them as needed
//   const path = parsedUrl.pathname;
// console.log(path);

// sometime user may use / before and after end of the url-- to fix it we need trmimming
//   const trimmedPath = path.replace(/^\/+|\/+$/g, ""); // replace is a javascript function it takes 2 parameters. ('before', 'after')
//   console.log(trimmedPath);

// Next we need to find how the user make the request - get, put, post etc.. || toLowerCase will transform it in lowercase.
//   const method = req.method.toLowerCase();
//   console.log(method);

// next we need to extract querystring from the end of the url-- we are going get this as an Object. refer parsedUrl variable. it is inside that
// test: postman url: http://localhost:3000/about/index?id=12133434 it will return [Object: null prototype] { id: '12133434' }
//   const queryStringObject = parsedUrl.query;
// console.log(queryStringObject);

// Now we need to find **request headers** from the "req " we can capture it using req.headers function- check oneNote for details.
// meta data will be captured as object - as it has many properties
//   const headersObject = req.headers;
//   console.log(headersObject);

// Note for get request we can use header but for post request we need to catch body

// how to receive body data or request payload -- using stream and buffer method -- this time we are using stringDecoder not toString to convert binary to string
//   const decoder = new StringDecoder("utf-8"); // we are creating an object as StringDecoder is a class and passing the encoding as utf8
// now creating a blank variable to capture the data
//   let realData = ""; // we used const before, we are reassigning realData so this needs to be let
//   req.on("data", (buffer) => {
// req.on will have data and buffer
// realData += decoder.write(buffer);
//   });
// once the streaming is finished, we are going to end the buffer
//   req.on("end", () => {
// realData += decoder.end();
// console.log(realData);
//resposne handler
// res.end("Hello Bangladesh.");
//   });
// };
/********************************************************************************************************************* */

// start the server
app.createServer();
