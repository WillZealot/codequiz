
let startEl = document.getElementById("startquizbutton");
let countdown = document.getElementById("timeleft");

let formEl = document.getElementById("form");

let introEl = document.getElementById("strtquiz");

let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");
////////////////////////////////////////////////////////////////////////////////////
const questions = [
  {
    question: "Which one changes the text?",
    answers: [
      {text: ".innerHtml", correct: "true"},
      {text: "splice()", correct: "false"},
      {text: "shift()", correct: "false"},
      {text: "pop()", correct: "false"}
    ],
  },
  {
    question: "What is the is the name of a true or false valued variable ?",
    answers: [
      {text: "Thomas", correct: "false"},
      {text: "45", correct: "false"},
      {text: "Boolean", correct: "true"},
      {text: ".getElementById()", correct: "false"}
    ],
  },
  {
      question: "What haracter asigns a variable?",
      answers: [
        {text: "+", correct: "false"},
        {text: "=", correct: "true"},
        {text: "-", correct: "false"},
        {text: "%", correct: "false"}
      ],
    },
    {
      question: "Who developed JavaScript in the early 1990s ?",
      answers: [
        {text: "Sun Microsystems", correct: "true"},
        {text: "Costco", correct: "false"},
        {text: "Wells Fargo Bank", correct: "false"},
        {text: "Microsoft", correct: "false"}
      ]
    },
];

let currentQuestionIndex = 0;
let score = 0;
////////////////////////////////////////////////////////////////////////
function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHtml = "Next";
  showQuestion();
}
////////////////////////////////////////////////////////////////////////
function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

  currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectedAnswer);
  });
}
//////////////////////////////////////////////////////////////////////
function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
//////////////////////////////////////////////////////////////////////
function selectedAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct"); 
}else{
  selectedBtn.classList.add("incorrect");
  timer - 5;
}
}
//////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////

function hideStuff(){
  questionElement.setAttribute("style", "display:none")
  answerButtons.setAttribute("style", "display:none")
  nextButton.setAttribute("style", "display:none")
  formEl.setAttribute("style", "display:none")
}

//////////////////////////////////////////////////////////////////
function showStuff(){

  introEl.setAttribute("style", "display:none")
  questionElement.setAttribute("style", "display:")
  answerButtons.setAttribute("style", "display:")
  nextButton.setAttribute("style", "display:")
}
//////////////////////////////////////////////////////////////////
//Onload funtion hides some elements I dont want the user to see
window.onload = function() {
  hideStuff();
}
/////////////////////////////////////////////////////////////////
startEl.addEventListener('click', function() {

  countdownEl();
  showStuff();
  startQuiz();

});


  

  
