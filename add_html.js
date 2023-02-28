//add/change HTML elements
// .innerHTML (vulnerable to XSS attacks so don't preferred)
// .textContent (more secures ways).

// const nameTag = document.createElement("h1");
// nameTag.textContent = prompt("Enter the Name:");
// document.body.append(nameTag);

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "Nothing";
// myList.append(listItem);
// myList.prepend(listItem);

// myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]);