// Synchronous Code = In an ordered sequence
//                     Step-by-step linear instructions
//                     (start now, finish now)

// Asynchronous Code = Out of sequence.
//                     Ex. Access a dataBase
//                         Fetch a file
//                       Tasks that take time
//                         (start now, finish sometime later)


//synchronous code Example

console.log("START");
console.log("This is synchronous line of code it execute one after ohters");
console.log("END");


//This is asynchronous code example
console.log("START");
setTimeOut(() => console.log("This is asynchronous line of code it execute after some time But"), 5000);
console.log("END Before 2nd line 3rd line will execute and then 2nd line will execute");





//console.time() = starts a timer you can use to 
//                  track how long an operation takes
//                    Give each timer a unique name


//start 
console.time("Response Time");


// alert("CLICK THE OK");
setTimeout(() => console.log("Hllow"), 5000);

//
console.timeEnd("Response Time");