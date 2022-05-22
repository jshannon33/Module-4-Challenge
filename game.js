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
        answer: '2',
    },
    {
        question: 'first question',
        choice1: 'one',
        choice1: 'two',
        choice1: 'three',
        choice1: 'four',
        answer: '2', 
    },
    {
        question: 'first question',
        choice1: 'one',
        choice1: 'two',
        choice1: 'three',
        choice1: 'four',
        answer: '2', 
    },
    {
        question: 'first question',
        choice1: 'one',
        choice1: 'two',
        choice1: 'three',
        choice1: 'four',
        answer: '2', 
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


// let bgbuttonEl = document.getElementById('begin-btn');
// let timeEl = document.querySelector('.time');
// let mainEl = document.getElementById('#main');

// document.getElementById('showQuiz').addEventListener('click', (function () {
    
//     let secondsLeft = 5;
//     let timerInterval = setInterval(function () {
//         secondsLeft--;
//         timeEl.textContent = secondsLeft + ' second(s) remaining';

//         if (secondsLeft === 0) {
//             clearInterval(timerInterval);
//             sendMessage();
//         }
//     }, 1000);
// }))

// function sendMessage() {
//     timeEl.textContent = 'Game Over';
// }

// // function displayQuestion(){
// //     const q = document.getElementById('question-div');
// //     q.style.display = 'block';
// // }

// (function() {
//     function buildQuiz() {
      
//       document.getElementById("showQuiz").style.visibility = "hidden"
//       const output = [];
    
//       myQuestions.forEach((currentQuestion, questionNumber) => {
//         const answers = [];
    
//         for (letter in currentQuestion.answers) {
//           answers.push(
//             `<label>
//             <input type="radio" name="question${questionNumber}" value="${letter}">
//             ${letter} :
//             ${currentQuestion.answers[letter]}
//           </label>`
//           );
//         }
    
//         output.push(
//           `<div class="question"> ${currentQuestion.question} </div>
//         <div class="answers"> ${answers.join("")} </div>`
//         );
//       });
    
//       quizContainer.innerHTML = output.join("");
//     }
    
    
//     var quizContainer = document.getElementById("quiz");
//     var myQuestions = [{
//         question: "Who is the strongest?",
//         answers: {
//           a: "Superman",
//           b: "The Terminator",
//           c: "Waluigi, obviously"
//         },
//         correctAnswer: "c"
//       },
//       {
//         question: "What is the best site ever created?",
//         answers: {
//           a: "SitePoint",
//           b: "Simple Steps Code",
//           c: "Trick question; they're both the best"
//         },
//         correctAnswer: "c"
//       }
//     ];
//       document.getElementById('showQuiz').addEventListener('click',buildQuiz);
//     }());