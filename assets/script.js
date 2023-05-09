
let startEl = document.getElementById("startquizbutton");
let countdown = document.getElementById("timeleft");

let questAnswEl = document.getElementById("quizdata");

let formEl = document.getElementById("form");

let introEl = document.getElementById("strtquiz");

const questions = [
  {
    question: "Which one changes the text?",
    answers: [
      {text: "", correct: "false"},
      {text: "", correct: "false"},
      {text: "", correct: "false"},
      {text: "", correct: "false"}
    ],
  },
  {
    question: "What is the is the name of a true or false valued variable ?",
    answers: [
      {text: "", correct: "false"},
      {text: "", correct: "false"},
      {text: "", correct: "false"},
      {text: "", correct: "false"}
    ],
  },
  {
      question: "What is the is the name of a true or false valued variable ?",
      answers: [
        {text: "", correct: "false"},
        {text: "", correct: "false"},
        {text: "", correct: "false"},
        {text: "", correct: "false"}
      ],
    },
    {
      question: "What is the is the name of a true or false valued variable ?",
      answers: [
        {text: "", correct: "false"},
        {text: "", correct: "false"},
        {text: "", correct: "false"},
        {text: "", correct: "false"}
      ]
    },
];

let currentQuestion = 0;

let questionEl = document.getElementById("question");
let answerButton = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");
/////////////////////////////////////////////////////////////////
let timer = 60;
function countdownEl(){
  setInterval(function timers() {
    let timeLeft = timer;
    if(timeLeft > 0){
        timer --;
        countdown.textContent = timer;
    } if (timeLeft === 0){
        clearInterval(timers);
    }
    console.log(timer);
}, 1000);
}
//////////////////////////////////////////////////////////////////
function hideQuestionAndAnswers() {
  questAnswEl.setAttribute("style", "display:none");
}
/////////////////////////////////////////////////////////////////
function showQuestionAndAnswers() {
  questAnswEl.setAttribute("style", "display:");
}
////////////////////////////////////////////////////////////////
function hideForm(){
  formEl.setAttribute("style", "display:none")
}
//////////////////////////////////////////////////////////////////
function showForm(){
  formEl.setAttribute("style", "display:")
}
//////////////////////////////////////////////////////////////////
function hideStrt(){
  introEl.setAttribute("style", "display:none")
}
//////////////////////////////////////////////////////////////////
//Onload funtion hides some elements I dont want the user to see
window.onload = function() {
  hideQuestionAndAnswers();
  hideForm();
}
/////////////////////////////////////////////////////////////////
startEl.addEventListener('click', function() {
  countdownEl();
  showQuestionAndAnswers();
  hideStrt();
});


  

  
