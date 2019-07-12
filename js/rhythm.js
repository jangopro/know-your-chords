let timer = 60 * 5;
const display = document.querySelector('#timer');
let minutes = null;
let seconds = null;
const duration = timer;
startTimer();
document
    .querySelector('#rhythm-img')
    .setAttribute('src', `img/${localStorage['rhythm']}.gif`);
function startTimer() {
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
