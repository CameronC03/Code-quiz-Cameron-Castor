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
    if (SecondsLeft<= 0 || questionsCount === question.length)
    clearInterval(timerinterval);
    getUserScore();
    }
  }, 1000);
}     

function displayQuestions() {
removeEventListener(StartButton);

if (questionsCount < question.length) {
questions.innerHTML = questions[questionsCount].title;
choices.textContent = "";

for (let i = 0; i< questions[questionsCount].multipleChoice.length; i++) {
    score += SecondsLeft;
} else {
score -= 10;
SecondsLeft = SecondsLeft - 10;
}




    
    













