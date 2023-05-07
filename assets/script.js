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
//Basically on screen load right here its going to emmeditelly hide all of the questions buttons and the form

window.onload = function() {
    //the first for loop hides all the buttons as well as hiding the questions itself
    question.setAttribute("style", "display:none");
    for (let i = 0; i < allAnswers.length; i++) {
        allAnswers[i].style.display = "none";
      }
    
    initialsForm.setAttribute("style", "display:none");
    
    console.log("elements hidden");
  };

  //initialsForm.setAttribute("style", "display:"); will make my from visible

//This is my little countdown timer
let timer = 60;

// Unfortunately it starts when the page loads but I want to add an event listener so that it will only start when I press Start Quiz 


startquiz.addEventListener('click', function() {

    strtthequiz.setAttribute("style","display:none");

    question.setAttribute("style", "display:")

    for (let i = 0; i < allAnswers.length; i++) {
        allAnswers[i].style.display = "";
      }
      console.log("elements visible");

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
      question: "Which one changes the text?",
      answers: [".textContent", "setAttribute()", "splice()", "Answer 4"],
      correctAnswer: ".textContent"
    },
    {
      question: "What is the is the name of a true or false valued variable ?",
      answers: ["slap", "java", "boolean", "spoof"],
      correctAnswer: "boolean"
    }
  ];

let currentQuestion = 0;



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
  

  
