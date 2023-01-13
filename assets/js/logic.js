// Initalise variables
var currentQuestion = 0;
var score = 0;
var timer = 0;

// Created event listener that starts the quiz
document.getElementById("start").addEventListener("click", startQuiz);

// Function that starts the quiz
function startQuiz() {
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
    timer = 75;
    document.getElementById("time").textContent = timer;
    var interval = setInterval(function() {
        timer--;
        document.getElementById("time").innerHTML = timer;
        if (timer === 0) {
            clearInterval(interval);
            endQuiz();
        }
    }, 1000);
    showQuestion(currentQuestion);
}