// starting time
let SecondsLeft = 80;

// timer
let QuizTime = document.getElementById("Quiz-Time");

// scores
let QuizScores = document.getElementById("Quiz-Scores")

let buttons = document.getElementById("buttons");

let scoresBtn = document.getElementById("scores")

let StartButton  = document.getElementById("Start-Button")
StartButton.addEventListener("click", setTime);

var questions = document.getElementById("questions")

let results = document.getElementById("results")

var choices = document.getElementById("choices")

let emptyArray = [];

let storedArray = JSON.parse(window.localStorage.getItem("highScore"));

var questionsCount = 0;

let score = 0

function setTime() {
    displayQuestions()
    let timerinterval = setInterval(function() {
    SecondsLeft--;
    timer.textContent = "";
    timer.textContent = "Time: " + SecondsLeft;{
    if (SecondsLeft<= 0 || questionsCount === quizQuestions.length)
    clearInterval(timerinterval);
    getUserScore();
    }
  }, 1000);
}     

function displayQuestions() {
removeEventListener(StartButton);

if (questionsCount < quizQuestions.length) {
questions.innerHTML = quizQuestions[questionsCount].title;
choices.textContent = "";

for (let i = 0; i < quizQuestions[questionsCount].multipleChoice.length; i++) {
    let el = document.createElement("button");
    el.innerText = quizQuestions[questionsCount].multipleChoice[i];
    el.setAttribute("data-id", i);
    el.addEventListener("click", function (event) {
      event.stopPropagation();
      

    if (el.innerText === quizQuestions[questionsCount].answer) {
      score += SecondsLeft;
    } else {
      score -= 10
      SecondsLeft = SecondsLeft - 15;
    }

questions.innerHTML = "";

if (questionsCount === quizQuestions.length) {
return;
  } else {
questionsCount++;
displayQuestions();
  }
});
choices.append(el);
}
}
}

function getUserScore() {
  timer.remove();

  let 
}



    
    













