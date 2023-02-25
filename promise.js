// promise = object that encapsulates the result of na asynchronous operation
//             let asynchronous methods return values like synchronous methods
// "I promise to return this course will be worth it for me to myself"

// the STATE is 'pending' then: 'fulfilled' or 'rejected'
// the RESULT is what can be returned
// 32 parts producing & consuming




const promise = new Promise((resolve, reject) => {
  let fileLoaded = true;

  if(fileLoaded){
    resolve("File Reloaded");
  }
  else{
    reject("File NOT Loaded")
  }
});

promise.then(value => console.log(value));


// const promise1 = new Promise(resolve => {
//   setTimeout(resolve, 5000);
// });

// promise1.then(() => console.log("Thanks for waiting!!!!!!!"));


const wait = time => new Promise(resolve => {
  setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting!!!!!!!"));



//async = makes a function return a promise
async function loadFile(){
  
  let fileLoaded = true;

  if(fileLoaded){
    return "File Loaded";
  }
  else{
    throw "File NOT Loaded";
  }
};

loadFile().then(value => console.log(value)).catch(error => console.log(error));




//sync and promise

//not that much effective
function loadFile(){
  
  let fileLoaded = true;

  if(fileLoaded){
    return Promise.resolve("File Loaded");
  }
  else{
    return Promise.reject("File NOT Loaded");
  }
};

promise.then(value => console.log(value)).catch(error => console.log(error));

//await = makes an async function wait for a promise
async function loadFile(){
  
  let fileLoaded = false;

  if(fileLoaded){
    return "File Loaded";
  }
  else{
    throw "File NOT Loaded";
  }
};

async function startProcess(){
  try{
  let message = await loadFile();
  console.log(message);
    
  }
  catch(error){
    console.log(error);
  }
}

startProcess();