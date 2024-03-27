// module scaffolding
const handler = {};

// If the route not found then we need a "not found handler" it will be described under notFoundHandler.js
handler.sampleHandler = (requestProperties, callback) => {
    // we haven't use requestProperties, so just showing it on to console 
    console.log(requestProperties);
    
  // here we are sending status = 200 and payload object with one property message.
  callback(200, {
    message: "This is a sample url.",
  });
};

module.exports = handler;
