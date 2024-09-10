let timer = 0;
let intervalId = null;

function startTimer() {
  intervalId = setInterval(() => {
    timer++;
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.title = formattedTime;
  }, 1000);
}

startTimer();