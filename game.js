const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [
    {
        question: 'first question',
        choice1: 'one',
        choice1: 'two',
        choice1: 'three',
        choice1: 'four',
        answer: 'one',
    },
    {
        question: 'second question',
        choice1: 'one',
        choice1: 'two',
        choice1: 'three',
        choice1: 'four',
        answer: 'two', 
    },
    {
        question: 'third question',
        choice1: 'one',
        choice1: 'two',
        choice1: 'three',
        choice1: 'four',
        answer: 'three', 
    },
    {
        question: 'fourth question',
        choice1: 'one',
        choice1: 'two',
        choice1: 'three',
        choice1: 'four',
        answer: 'four', 
    }
];

const score_points = 100;
const max_questions = 4;

startgame => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () =>{
    if(availableQuestions.length === 0 || questionCounter > max_questions){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${max_questions}`
    progressBarFull.style.width = `${(questionCounter/max_questions) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct'){
            incrementScore(score_points);
        }
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000)
    })
})


