// The Date Object is used to work with date and time

let date = new Date();
let date = new Date(0);
let date = new Date(2023, 0, 1, 2, 3, 4, 5);
let date = new Date("Febuary 22, 2023 00:00:00");

let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milliseconds = date.getMilliseconds();

date.setFullYear(2034);
date.setMonth(3);
date.setDate(31);
date.setHours(32);
date.setMinutes(3);
date.setSeconds(30);
date.setMilliseconds(98);

date = date.toLocaleString();
document.getElementById("myLabel").innerHTML = formatTime();

function formatTime(date){
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amOrPm = hours >= 12 ? "PM": "AM";

  hours = (hours % 12) || 12;
  return   `${hours}:${minutes}:${seconds} ${amOrPm}`
}
