let bgbuttonEl = document.getElementById('begin-btn');

let timeEl = document.querySelector('.time');
let mainEl = document.getElementById('#main');
let secondsLeft = 4;

bgbuttonEl.addEventListener('click', (function(){

}))

function setTime() {
    let timerInterval = setInterval(function(){
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

