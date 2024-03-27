// We are going to use this module in other applications. 
var url = 'http://mylogger.io/log';
// we are going to send our logging message to this remote server. 
function log(message){
    // this function will take a input as message and send an HTTP request.
    console.log(message);
}

module.exports.log = log;
//module.exports.endPoint= url; 
