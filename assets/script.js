let timeText = document.getElementById("timeelapsed");
let startEl = document.getElementById("startquizbutton");
let countdown = document.getElementById("timeleft");
/////////////////////////////////////////////////////////////////
let formEl = document.getElementById("form");
///////////////////////////////////////////////////////////////////
let introEl = document.getElementById("strtquiz");
//////////////////////////////////////////////////////////////////////
let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");
////////////////////////////////////////////////////////////////////////
let viewHighscoresButton = document.getElementById("highscores")

let submitEl = document.getElementById("subbutton");


 ////////////////////////////////////////////////////////////////////////////////////

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


score = 0;
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
  document.getElementById("initials").value = "";

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
  let interval = setInterval(function() {
    timeLeft = timer;
    if(timeLeft > 0){
      timer--;
      countdown.textContent = timer;
    }
    if (timeLeft === 0){
      clearInterval(interval);
      forceShutOff();
    }
  }, 1000);
}
///////////////////////////////////////////////////////////////////
function selectedAnswer(e){
  const selectedBtn = e.target;
  const isFalse = selectedBtn.dataset.incorrect === "true";
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}else{
  selectedBtn.classList.add("incorrect");
  timer -= 5;
}
Array.from(answerButtons.children).forEach(button=> {
  if(button.dataset.correct === "true"){
    button.classList.add("correct");
  }
  button.disabled = true;
});
nextButton.style.display = "block";
}

//////////////////////////////////////////////////////////////////

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
///////////////////////////////////////////////////////////////////
function forceShutOff(){
  if(countdown.textContent == "0" && formEl.style.display === "none"){
    alert("You Didnt Finish The Quiz In Time...You Forfeit All Points.The Quiz Will Reset!");
    location.reload();

  }else{
    ;
  }
}
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


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
  clearInterval(timer);
  let initials = document.getElementById("initials").value;
  document.getElementById("initials").value = "";
  
});
///////////////////////////////////////////////////////////working here rn broseph dont forget!!!!!!!!!!
localStorage.setItem('highScores', score);
///////////////////////////////////////////////////////////
viewHighscoresButton.addEventListener('click', function() {
  
});


  

  
