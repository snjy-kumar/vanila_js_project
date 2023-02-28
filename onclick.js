// const element = document.getElementById("myButton");
// const element = document.body;
// const element = document.getElementById("text");
const element = document.getElementById("myDiv");

// element.onclick = doSomething;
// element.onload = doSomething;
// element.onchange = doSomething;
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

function doSomething(){
  // alert("you have submitted your name.");
  element.style.backgroundColor = "red";
}

function doSomethingElse(){
  // alert("you have submitted your name.");
  element.style.backgroundColor = "lightgreen";
}