var timeEl = document.querySelector('.time');
var mainEl = document.getElementById('#main');
var secondsLeft = 4;

function setTime() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft + 'seconds remaining';

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    },1000);
}
function sendMessage(){
    timeEl.textContent = 'done';
}

setTime();

