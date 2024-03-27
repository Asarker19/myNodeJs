// FS = file system = read - write - update - delete etc

const fs = require('fs');

// writeFileSync takes 2 parameters - 1 - file name and 2- content
// it creates a file and it shows Hello Anup. 
// fs.writeFileSync('myfile.txt', 'Hello Anup.');

// to replace content of the file, we can just add the new content and it will replace in the file. 
// fs.writeFileSync('myfile.txt', 'How are you?');
// appendFileSync will add new details without replace 
// fs.appendFileSync('myfile.txt', 'This is Anup again.');

// fs.readFileSync will Read the file - in Syncronus way but node recommend to use Asyncronus 
// const data = fs.readFileSync('myfile.txt');
// console.log(data);
// it read and returns data as Buffer - binary format. We need to covert this into string using toString
// console.log(data.toString());

//Asyncornus way, the thred will request the read file and move to the next code, it will not wait for response. So we need to add a response request. 
// Call back function needs 2 parameters - first is error and second is data
// one of the parameter will be null: if there is error then data will be null || if there is data then error will be null :) 

const data = fs.readFile('myfile.txt', (err, data) =>{
    console.log(data.toString());

});

