// let seconds = 30;
// seconds = setInterval((Number(seconds) - 1), 1000);
// count = setInterval(count, 1000);


// function count() {
//   for (count = Number("timer"); count >= 0; count--) {
//     }
//   }
//   timer = count;
// }

var timer = 0;
var timerInterval;
var second = document.getElementById('timer');

function start() {
  stop();
  timerInterval = setInterval(function() {
  timer += 1/60;
  secondVal = Math.floor(timer) - Math.floor(timer/60) * 60;
  second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
  }, 1000/60);
}

function stop() {
  clearInterval(timerInterval);
}