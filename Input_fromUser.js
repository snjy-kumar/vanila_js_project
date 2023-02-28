let username;
document.getElementById("myButton").onclick = function() {
  username = document.getElementById("userName").value;
  console.log(username);
  document.getElementById("myLabel").innerText = "Hello, Mr. " + username;
}