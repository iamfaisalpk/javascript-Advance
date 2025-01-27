// synchronous
console.log("Start");
console.log("Middle");
console.log("End");


// Asynchronous:

console.log("Start");

setTimeout(() => {
console.log("Middle (delayed)");
}, 2000);

console.log("End");
