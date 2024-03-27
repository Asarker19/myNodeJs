// Module scaffolding
const handler = {};

// dependeces section
const url = require("url");
const { StringDecoder } = require("string_decoder"); // we are just pluck string_decoder from the StringDecoder class
const routes = require("../routes"); // We are importing routes.js
const {
  notFoundHandler,
} = require("../handlers/routeHandlers/notFoundHandler"); // notFound Handler for routes not in our list
// we are bringing the function from the index.js
handler.handleReqRes = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  // we will use trip path and will handle route
  // By analysing trim path we will decide which handler to use.
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;

  // we are creating a requestProperties object, we will pass this object in the chosenHandler variable
  const requestProperties = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headersObject,
  };
  const decoder = new StringDecoder("utf-8");
  let realData = "";

  // Now we are chosing if this is in the route or not
  // chosenHandler's value will be routes[trimmedPath] or it will be notFoundhandler value
  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  // We are calling chosenHandler function [outside of this file] means we are calling sampleHandler function or other functions
  // we will create a callback function on other handler functions and this will be called inside the chosenHandler
  chosenHandler(requestProperties, (statusCode, payload) => {
    // are taking statusCode and payload as parameter
    // both are coming from other handler function, we will use it as response in this function
    statusCode = typeof statusCode === "number" ? statusCode : 500;
    payload = typeof payload === "object" ? payload : {};
    // response will be displayed after stringify
    const payloadString = JSON.stringify(payload);
    // return the final response
    res.writeHead(statusCode);
    res.end(payloadString);
  });

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);

    res.end("Hello all.");
  });
};

// we are exporting handler
module.exports = handler;

// Routing set-up: when an user hit a particular route -- what we are going to return
// we are going to keep all our routes in a separate file called routes.js
