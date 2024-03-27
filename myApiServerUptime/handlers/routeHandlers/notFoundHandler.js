// module scaffolding 
const handler={};

// If the route not found then we need a "not found handler" it will be described under notFoundHandler.js
handler.notFoundHandler = (requestProperties, callback) =>{
callback(404, {
message: 'Your requested url was not found !'
});
};

module.exports = handler;