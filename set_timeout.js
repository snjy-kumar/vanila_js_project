let item  = "watermelon";
let price = 333;


let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price){
  alert(`Buy this ${item} at ${price}`)
}
function secondMessage(){
  alert(`Buy this  will to much in demand course`)
}
function thirdMessage(){
  alert(`Again Buy this course`)
}

document.getElementById("hero").onclick = function(){
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);
  alert(`Do it now for purchase this course`)
}



//setInterval() = invokes a function repeadetly after certain time which is put already.
//It is a asynchrous function (which doesn't change during execution)

let count = 0;
let max = prompt("count up to what the number?");
max = Number(max);

const myTimer = setInterval(countUp, 3000);

function countUp(){
  count+= 1;
  console.log(count);
  if(count>= max){
    clearInterval(myTimer);
  }
}