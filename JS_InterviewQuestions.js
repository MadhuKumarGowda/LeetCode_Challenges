// Promise Implementation
let myPromise = new Promise((res, rej) => {
  let success = true;
  if (success) {
    res();
  } else {
    rej();
  }
});

// Promise with then and catch
myPromise.then((value) => {}).catch((err) => {});

// Implementation of module exports
function sum(a, b) {
  return a + b;
}

sub = (a, b) => {
  return b - a;
};

module.exports = {
  sum,
  sub,
};

// event emitters

const events = require("events");
const myEvent = events.EventEmitter();

myEvent.on("send", () => {
  console.log("send event triggered");
});

myEvent.on("update", (name) => {
  console.log(`Hello, ${name}`);
});

myEvent.emit("send");
myEvent.emit("update", "madhu");

// Buffer

// Create a buffer from a string
const buff1 = Buffer.from("Hello World", "utf-8");

// Create a buffer from array of bytes
const buff2 = Buffer.from([72, 101, 108, 108, 111]);

// Allocate a buffer of a specific size
const buff3 = Buffer.alloc(10);

buff3.write("nodejs", 0, "utf-8");

// convert the buffer to String
console.log(buff1.toString("utf-8")); // o/p Hello World
// below code will convert the 72, 101, 108, 108, 111 to respective char then display
console.log(buff2.toString("utf-8"));
console.log(buff3.toString("utf-8"));

// concat 2 buffer

const newBuff = Buffer.concat([buff1, buff3]);
console.log(newBuff.toString("utf-8"));
