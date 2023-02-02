// 1. Создать таймер (один на весь класс (?)) с обратным отсчётом, 
// обновляемый после 0 сек.
// 2. Создать случайный arr с men, woman, child.
// 3. Если man - сравнивать queue-timer. 
// 4. Если woman - сравнивать queue-ppl. 
// 5. Если chaild - выбрать случайным образом.

// let seconds = document.getElementsByClassName('queue-timer');
// let timer = setInterval(seconds - 1), 1000);


function timer() {
let seconds = document.getElementsByClassName('queue-timer');
let timerInterval = setInterval(function () {
  for (i = seconds; i >= 0; i--) {
    if (i = 0) {
      timer();
    }
    else {
      return seconds;
    }
    }}, 1000);
  }

  function start() {
    timer();
  }

  function stop() {
  clearInterval(timerInterval);
}
