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
// Function that checks the answer and displays correct or wrong
function checkAnswer(event) {
    var answer = event.target.innerHTML;
    if (answer === questions[currentQuestion].answer) {
        document.getElementById("feedback").innerHTML = "Correct!";
    } else {
        timer -= 10;
        document.getElementById("feedback").innerHTML = "Wrong!";
    }
    document.getElementById("feedback").classList.remove("hide");
    setTimeout(function() {
        document.getElementById("feedback").classList.add("hide");
    }, 1000);
    currentQuestion++;
    if (currentQuestion === questions.length) {
        endQuiz();
    } else {
        showQuestion(currentQuestion);
    }
}
// Function that ends the quiz and displays the result on screen and an eventlistener that saves the score with your initials
function endQuiz() {
    score = timer;
    document.getElementById("time").classList.add("hide");
    document.getElementById("questions").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
    document.getElementById("final-score").innerHTML = score;
    document.getElementById("submit").addEventListener("click", saveScore);
}
// Function that saves your score and initials into local storage
function saveScore() {
    var initials = document.getElementById("initials").value;
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.push({initials: initials, score: score});
    localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "highscores.html";
}