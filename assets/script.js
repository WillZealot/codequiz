let countdown = document.getElementById("timeleft");
let startquiz = document.getElementById("startquizbutton")
let strtthequiz = document.getElementById("strtquiz");
let quizData = document.querySelector("quizdata");

let question = document.getElementById("quizQuestion");

let options = document.getElementsByTagName("button")
let answer1 = document.getElementById("button1");
let answer2 = document.getElementById("button2");
let answer3 = document.getElementById("button3");
let answer4 = document.getElementById("button4");
let initialsForm = document.querySelector(".hideform")

let allAnswers = [answer1,answer2,answer3,answer4];

let timer = 60;

function hideQuestionAndAnswers() {
    question.setAttribute("style", "display:none");
    for (let i = 0; i < allAnswers.length; i++) {
      allAnswers[i].style.display = "none";
    }
  }

  function showQuestionAndAnswers() {
    question.setAttribute("style", "display:");
    for (let i = 0; i < allAnswers.length; i++) {
      allAnswers[i].style.display = "";
    }
  }


//Basically on screen load right here its going to emmeditelly hide all of the questions buttons and the form
window.onload = function() {
    //the first for loop hides all the buttons as well as hiding the questions itself
    question.setAttribute("style", "display:none");
    hideQuestionAndAnswers();

    
    initialsForm.setAttribute("style", "display:none");
    
    console.log("elements hidden");
  };


startquiz.addEventListener('click', function() {

    strtthequiz.setAttribute("style","display:none");
    showQuestionAndAnswers();

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
});

let questions = [
    {
      question1: "Which one changes the text?",
      answers1: [".textContent", "setAttribute()", "splice()", "Answer 4"],
      correctAnswer1: ".textContent"
    },
    {
      question2: "What is the is the name of a true or false valued variable ?",
      answers2: ["slap", "java", "boolean", "spoof"],
      correctAnswer2: "boolean"
    },
    {
        question3: "What is the is the name of a true or false valued variable ?",
        answers3: ["slap", "java", "boolean", "spoof"],
        correctAnswer3: "boolean"
      },
      {
        question3: "What is the is the name of a true or false valued variable ?",
        answers3: ["slap", "java", "boolean", "spoof"],
        correctAnswer3: "boolean"
      },
  ];

let currentQuestion = 0;

function firstQuestion(){

}

//to do i need to create a funtion that will set the question element textcontent to question1 in my object array and also change all
// the buttoins etxt content to answers1 and it also needs to appear after start quiz event is triggered then it needs to target where what they clicked === correct answer1 
//if not -5 seconds off of the timer if it === then dont remove time from timer then after each question is answerd i need it to display correct or wrong under then after
// a fewe seconds the next question pops up.
//after the last question is answered then you need to make the form appear then we can talk buster






//allAnswers.forEach(function(answer) {
//    answer.addEventListener('click', function() {
//        question.setAttribute("style", "display:none");
//    for (let i = 0; i < allAnswers.length; i++) {
//        allAnswers[i].style.display = "none";
//      }
      // do something here
//    });
//  });

// allAnswers.forEach(function(answer) {
//    answer.addEventListener('click', function() {
//      question.setAttribute("style", "display:");
//      for (let i = 0; i < allAnswers.length; i++) {
//        allAnswers[i].style.display = "";
//      }
//     // call a function to update the question and answers
//      updateQuestionAndAnswers("Which one changes the text", [".textContent", "setAttribute()", "splice()", "Answer 4"]);
//    });
//  });
  
//  function updateQuestionAndAnswers(newQuestion, newAnswers) {
    // update the question text
//    question.textContent = newQuestion;
    // update each answer text
//    for (let i = 0; i < allAnswers.length; i++) {
//      allAnswers[i].textContent = newAnswers[i];
//   }
//  }

// allAnswers.forEach(function(answer) {
//    answer.addEventListener('click', function() {
//       question.setAttribute("style", "display:");
//        for (let i = 0; i < allAnswers.length; i++) {
//          allAnswers[i].style.display = "";
//       }
//        // call a function to update the question and answers
//        updateQuestionAndAnswers("What is the is the name of a true or false valued variable ?", ["slap", "java", "boolean", "spoof"]);
//      });
//    });
//    
//    function updateQuestionAndAnswers(newQuestion, newAnswers) {
//      // update the question text
//      question.textContent = newQuestion;
//      // update each answer text
//      for (let i = 0; i < allAnswers.length; i++) {
//        allAnswers[i].textContent = newAnswers[i];
//      }
//    }
  

  
