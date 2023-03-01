//Animation
const myButton = document.getElementById("hero");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);


function begin(){
  let timerId = null;
  let scaleX = 1;
  let scaleY = 1;

  timerId = setInterval(frame, 5);

  function frame(){
    if(scaleX >=2){
      clearInterval(timerId);
    }
    }else {
    scaleX+=0.01;
    myAnimation.style.transform = "scale("+scaleX+","+scaleY")";
    }
  }
}


//Diagonally Rotating Animation
// function begin(){
//   let timerId = null;
//   let degrees = 0;
//   let x = 0;
//   let y = 0;

//   timerId = setInterval(frame, 5);

//   function frame(){
//     if(x>=200||y>=200){
//       clearIneterval(timerId);
      
//     }else {
//       degrees+=3;
//       x+=1;
//       y+=1;
//       myAnimation.style.left = x + "px";
//       myAnimation.style.top = y + "px";
//       myAnimation.style.transform = "rotateZ("+degrees+"deg)";
//     }
//   }
// }









//for diagonally Animation
// function begin(){
//   let timerId = null;
//   let x = 0;
//   let y = 0;

//   timerId = setInterval(frame, 5);

//   function frame(){
//     if(x>= 200 || y>=200){
//       clearIneterval(timerId);
      
//     }else {
//       x+=1;
//       y+=1;
//       myAnimation.style.left = x + "px";
//       myAnimation.style.top = y + "px";
//     }
//   }
// }