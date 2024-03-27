// create a blank rount object 
// insdie the object 
// what we are doing here is : if sample route is send then we will call a function for this, if we are getting 'about'  we will call another function etc
// to keep these functions we will make another folder named handler and we will keep all these route functions 

// dependecies 
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandlers');

// this will keep all the key value of the routes and functions
const routes = {
'sample': sampleHandler, 
};

// we are exporting routes 
module.exports = routes; 