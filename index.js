/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet (string) {
  let parsedTime = parseInt(string)
  if (parsedTime < 12) {
    return ('Good Morning')
  } else if (parsedTime >= 12 && parsedTime <= 17) {
    return ('Good Afternoon')
  } else if (parsedTime > 17) {
    return ('Good Evening')
  }
}

/* Write your implementation of displayMessage() */

function displayMessage (string) {
  let message = document.getElementById('greeting')
  message.innerText = `${string}`
}
