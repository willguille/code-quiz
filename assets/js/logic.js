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
// Function that shows the next question, taking them from the array in questions.js
function showQuestion(questionIndex) {
    var question = questions[questionIndex];
    document.getElementById("question-title").textContent = question.question;
    var choices = question.choices;
    var choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    for (var i = 0; i < choices.length; i++) {
        var button = document.createElement("button");
        button.classList.add("choice");
        button.textContent = choices[i];
        button.addEventListener("click", checkAnswer);
        choicesContainer.appendChild(button);
    }
}
