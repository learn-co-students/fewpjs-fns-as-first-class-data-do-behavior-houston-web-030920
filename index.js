/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  let hr = parseInt(time, 10)
  if (hr<12)return "Good Morning"
  if (hr>17)return "Good Evening"
  if (hr>12 && hr<17)return "Good Afternoon"
}

function displayMessage(str){
  let greeting = document.getElementById('greeting')
  greeting.innerText = str 
}