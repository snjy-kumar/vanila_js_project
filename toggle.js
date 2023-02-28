const myBtn = document.querySelector("#myBtn");
const myImg = document.querySelector("#myImg");

imgBtn.addEventListener("click", () => {
    if(myImg.style.visibility == "hidden"){
      myImg.style.visibility = "visible";
    }
    else{
      myImg.style.visibility = "hidden";
    }
  
})


//instead of visibility = > display property can be written but it will not give any initial space.

// hidden ==> none
// visible ==> block