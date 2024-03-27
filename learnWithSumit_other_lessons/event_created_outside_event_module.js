const EventEmitter = require("events"); // this is a class and blue print.
// const emmitter = new EventEmitter(); 
// This is a new emmitter object for this instance. Ater we creats the School Class and This object we don't need the emitter object. 
console.log(
  "The emitter object raised 'bellRing' event but this can't be read by othe emmitter object."
);
console.log(
  "To fix this we will transform this EventEmitter class to a new class."
);

// function startPeriod() {
//   console.log("Class Started..");
// Raise an event when bell rings
//   setTimeout(() => {
//     emmitter.emit("bellRing", {
//       period: "first",
//       text: "period ended.",
//     });
//   }, 2000);
// }

// above code not going to work due to different object between two files. 
console.log(" we are going to extend this class with the EventEmitter. this will take all the properties of the EventEmitter class to School Class.");
class School extends EventEmitter{ // we are going to extend this class with the EventEmitter; this will take all the properties of the EventEmitter class to School Class.    
    startPeriod() { // we don't use function operator when we define function inside a Class.
          console.log("Class Started..");
        // Raise an event when bell rings
          setTimeout(() => {
            this.emit("bellRing", { // we are changing Emitter object with This..
              period: "first",
              text: "period ended.",
            });
          }, 2000);
        }
}
// module.exports = startPeriod;
console.log(" After new School class we don't need to export startPerod function but we are going to export the ahole School Class. ");
module.exports = School; 

