/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const string = document.getElementById("time").value;
  displayMessage(greet(string));
}

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}

function greet(str) {
  const hour = parseInt(str, 10);
  if (hour < 12) return "Good Morning";
  if (hour > 17) return "Good Evening";
  return "Good Afternoon";
}
