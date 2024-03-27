// We will define a variable in people and we will access it from index.js

var people = ['Anup', 'Arjon', 'Arpon'];

var a = 10;

function test(){
    console.log("This is a test message");
}

// check what inside the module object
//console.log(module);
// We will only export people array for other modules to use 
//module.exports = people; 

// to export multiple items from this module, we are going to create an object, inside the object we will define what can be accessed by other modules.
module.exports = {
    people: people, 
    a:a,
    test:test
}



