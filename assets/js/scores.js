window.onload = function() {
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    var highscoresList = document.getElementById("highscores");
  
    for (var i = 0; i < highscores.length; i++) {
      var score = highscores[i];
      var li = document.createElement("li");
      li.textContent = score.initials + " - " + score.score;
      highscoresList.appendChild(li);
    }
  
    document.getElementById("clear").addEventListener("click", function() {
      localStorage.removeItem("highscores");
      highscoresList.innerHTML = "";
    });
  };
  