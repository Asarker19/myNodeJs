// Node JS is basically non-blocking event driven runtime
//EventEmitter means something has happened -- event raise

// const EventEmitter = require("events"); // Node JS is basically non-blocking event driven runtime  is class, it has a lots of other objects , functions etc.

// const emmitter = new EventEmitter(); // now we are going to create an object from the EventEmitter class. this is the raiser or the emmitter of the event.

// const startPeriod = require('./event_created_outside_event_module');
const School = require("./event_created_outside_event_module");
console.log(" We changed startPeriod function with the School Class. ");

//Step two - register a listener to listen to the bellRing event, when the event triggered listener will fire a function or something
//listener takes 2 parameters, 1- event name 2- a function: what will happen for the event
// emmitter.on('bellRing', function(){
//     console.log('Home time ...');
// });

// Transform above to arrow function
// emmitter.on('bellRing', () => {
//     console.log('Home time ...let-s runnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn');
// });

// We are going to pass a parameter inside the listener function - first update event with the second parameter
// emmitter.on("bellRing", (period) => {
//   console.log(`The bell has rang ${period}`); // to make this a template letarel replace ' ' with the `` [this next to #1 key], else the parameter will ot work
// });

// We are now destructured function parameters into object
// emmitter.on("bellRing", ({period, text}) => {
//     console.log(`The bell has rang ${period} ${text}`); // to make this a template letarel replace ' ' with the `` [this next to #1 key], else the parameter will ot work
//   });

console.log(
  "In pervious scenario we used the emmitter object to create the bellRing function, now after School Class we will use the new school object. "
);

// Step one - raise an event
// emmitter.emit('bellRing');

// It will have senond parameter: the bell will ring to indicate second period ended. We will use this para and pass it thtough the listener function
// emmitter.emit("bellRing", "second period ended.");

// to pass multiple parameters- it needs an object
// emmitter.emit("bellRing", {
//     period: 'first',
//     text: 'period ended.'});

// we can put the event inside another function- it will run after 2 sec
// setTimeout(() => {
//     emmitter.emit("bellRing", {
//         period: 'first',
//         text: 'period ended.'});
// }, 2000);

/******************************************************** */
// we are using outside event trigger for this listener
// startPeriod();
//We are now calling school.startPeriod function from the new Class.

const school = new School();
school.on("bellRing", ({ period, text }) => {
  console.log(`The bell has rang ${period} ${text}`); // to make this a template letarel replace ' ' with the `` [this next to #1 key], else the parameter will ot work
});
school.startPeriod();
console.log(
  "Why we created a New Class: when we are calling emmiter object from the event_created_outside_module.js, this is not listend by the core_event_module emmiter object. "
);
console.log(
  "becasue: the emitter object created under the event_created_outside_module.js is different then the core_event_module"
);
console.log(
  "To fix the issue we will create a new class under event_created_outside_module and use the object to core_event_module . "
);

/******************************************************** */
// ORDER: Listener first then the EVENT
// same event require for event raise and event listen. 