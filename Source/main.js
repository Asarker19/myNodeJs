var http=require('http');
var URL=require('url');
// url module is a built-in Nodejs module

var server=http.createServer(function(req,res){
    var myURL="http://rabbil.com/blog.html?year=2020&month=july";
        /*
            http://rabbil.com =hostname
            blog.html = Path
            ?year=2020&month=july = Search Query
        */

    var myURLObj= URL.parse(myURL, true);
        // we are breaking the URL using parse
        //passing (myURL with a bollen true) which will return a object
        // we are using parsing function
    var myHostName=myURLObj.hostname;
    // we are calling only hostname from the myURL object
    var myPathName=myURLObj.pathname;
    var mySearchName=myURLObj.search;

    res.writeHead(200, {'Content-Type':'text/html'})
    //Adding message head
    //res.write(myHostName);
    //displaying Hostname as body
    res.write(mySearchName);
    res.end();
    // Ending the response

});



// Below is an example for create server and request and response
/* var server=http.createServer(function(req,res){
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is Home Page</h1>')
        res.end();
    }
    else if(req.url=="/about"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is About Page</h1>')
        res.end();
    }
    else if(req.url=="/contact"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is Contact Page</h1>')
        res.end();
    }
});
 */

server.listen(5050);
console.log("Server is running");



