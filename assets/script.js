let timeText = document.getElementById("timeelapsed");
let startEl = document.getElementById("startquizbutton");
let countdown = document.getElementById("timeleft");

let formEl = document.getElementById("form");

let introEl = document.getElementById("strtquiz");

let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");
let viewHigh = document.getElementById("highscores")

let submitEl = document.getElementById("subbutton");

let highScores = [];
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
      question: "What character assigns a variable?",
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
    score++;
}else{
  selectedBtn.classList.add("incorrect")
}
Array.from(answerButtons.children).forEach(button=> {
  if(button.dataset.correct === "true"){
    button.classList.add("correct");
  }
  button.disabled = true;
});
nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = 'block';

}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
  showForm();

}

nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
    formEl.setAttribute("style", "display:none")
  }
})
//////////////////////////////////////////////////////////////////////
let timer = 30;
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
///////////////////////////////////////////////////////

function showForm() {
  if (currentQuestionIndex === questions.length) {
    countdown.textContent = "Quiz Complete";
    countdown.setAttribute("style", "display:none");
    timeText.setAttribute("style", "display:none");
    formEl.setAttribute("style", "display:");
  }
}
//////////////////////////////////////////////////////////////////
highScores.sort(function(a, b) {
  return b.score - a.score;
});
////////////////////////////////////////////////////////////////////
function submitScore() {
  const initials = document.getElementById("initials").value;
  const score = {
    initials: initials,
    score: score
  };
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push(score);
  localStorage.setItem("highScores", JSON.stringify(highScores));
}
///////////////////////////////////////////////////////////////////
function viewHighScores() {
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.sort((a, b) => b.score - a.score);
  let scoresList = document.createElement("ul");
  highScores.forEach(score => {
    let scoreItem = document.createElement("li");
    scoreItem.textContent = `${score.initials}: ${score.score}`;
    scoresList.appendChild(scoreItem);
  });
  viewHigh.parentNode.insertBefore(scoresList, viewHigh.nextSibling);
}
///////////////////////////////////////////////////////////////////
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

submitEl.addEventListener("click", function (e){
  e.preventDefault();
  let initials = document.getElementById("initials").value;
  let scoreObj = {initials: initials, score: score};
  highScores.push(scoreObj);
});

viewHigh.addEventListener("click", function() {
  let highScoresList = document.createElement("ul");
  highScores.forEach(function(scoreObj) {
    let scoreItem = document.createElement("li");
    scoreItem.textContent = scoreObj.initials + " - " + scoreObj.score;
    highScoresList.appendChild(scoreItem);
  });
  viewHigh.appendChild(highScoresList);
});

  

  
