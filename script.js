//your JS code here. If required.
let timerDisplay = document.getElementById('timer')

let currentDate = new Date()

setInterval(() => {
  currentDate = new Date()
  timerDisplay.innerHTML = currentDate.toLocaleString()
}, 1000)
