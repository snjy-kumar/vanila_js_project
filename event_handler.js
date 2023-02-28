// .addeventListener (event, function, useCapture)
// you can add many event hadlers to one elment.
// Even the same event that invokes different functions

const myDiv = document.getElementById("myDiv");
const bigDiv = document.getElementById("bigDiv");

myDiv.addEventListener("click", changeRed, true);
bigDiv.addEventListener("click", changeRed);

function changeRed() {
  alert(`You selected ${this.id}`);
  this.style.backgroundColor = "red";

}

// myDiv.addEventListener("mouseover", changedRed);
// myDiv.addEventListener("mouseout", changedGreen);

// function changedRed(){
//   myDiv.style.backgroundColor = "red";
// }

// function changedGreen(){
//   myDiv.style.backgroundColor = "green";
// }