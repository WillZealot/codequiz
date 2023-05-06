
let countdown = document.getElementById("timeleft");
let startquiz = document.getElementById("startquizbutton")

//This is my little countdown timer
let timer = 75;

// Unfortunately it starts when the page loads but I want to add an event listener so that it will only start when I press Start Quiz 
startquiz.addEventListener('click', function() {
    setInterval(function() {
        let timeLeft = timer--;
        if(timer >= 0);{
            timeLeft;
            countdown.textContent = timer;
        } if (timer <= 0){
            countdown.textContent = '';
            clearInterval(downtimer);
        }
    }, 1000);
  });
