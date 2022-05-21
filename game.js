



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