let bgbuttonEl = document.getElementById('begin-btn');
let timeEl = document.querySelector('.time');
let mainEl = document.getElementById('#main');

bgbuttonEl.addEventListener('click', (function () {
    
    let secondsLeft = 5;
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + ' second(s) remaining';

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}))

function sendMessage() {
    timeEl.textContent = 'Game Over';
}

function displayQuestion(){
    const q = document.getElementById('question-div');
    q.style.display = 'block';
}

