
let countdown = document.getElementById("timeleft");
let startquiz = document.getElementById("startquizbutton")
let divarea = document.getElementsByTagName("div")
let strtthequiz = document.getElementById("strtquiz");
let quest1 = document.getElementById("firstq");
let quest2 = document.getElementById("secondq");
let quest3 = document.getElementById("thirdq");
let quest4 = document.getElementById("fourthq");
//This is my little countdown timer
let timer = 60;

// Unfortunately it starts when the page loads but I want to add an event listener so that it will only start when I press Start Quiz 
startquiz.addEventListener('click', function() {
    strtthequiz.setAttribute("style","display:none");
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



  
