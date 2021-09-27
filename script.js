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

  let initInput = document.createElement("input");
  let afterScoresBtn = document.createElement("input");
  
  results.innerHTML = `your score is ${score} enter name`
  afterScoresBtn.setAttribute("type", "button");
  afterScoresBtn.setAttribute("value", "Post your score");
  afterScoresBtn.setAttribute("type", "text");
  afterScoresBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let scoresA = definescoresA(storedArray, emptyArray)
    
    let init = initInput.value;
    let scoresAndUsers = {
      score: score,
      init: init,
  };
 
  scoresA.push(scoresAndUsers);
  saveScore(scoresA);
  displayAllScore();
  clearScoreBtn();
  cancelButton();
  seeScoresBtn.remove();
});

results.append(initInput)
results.append(afterScoresBtn)
}

const saveScore = (Array) => { 
  window.localStorage.setItem("highScore", JSON.stringify(Array));
}

const defineScoresA = (a1, a2) => {
if(a1 !== null) {
  return a1
} else {
return a2
}
}

const removeEventListener = (...els) => {
  for (let el of els) el.remove();
}

function displayAllScore() {
  removeEventListener(timer, results, StartButton)\
  let scoresA = defineScoresA(storedArray, emptyArray)

  scoresA.forEach(obj => {
    let scoreA = obj.scoreA
    let init = obj.init
    let resultsP = document.createElement("p")
    resultsP.innerText = `${init}: ${scoreA}`;
    QuizScores.append(resultsP);
  });
}

function seeScores() {
seeScoresBtn.addEventListener("click" function(event) {
  event.preventDefault();
  removeEventListener(timer, StartButton)
  displayAllScore();
  removeEventListener(seeScoresBtn);
  clearScoreBtn();
  cancelButton();
});

function cancelButton()
let cancelBtn = document.createElement("input");
cancelBtn.setAttribute("value", "go back");
cancelBtn.setAttribute("type", "button");
cancelBtn.addEventListener("click", function(event) {
  event.preventDefault();
  window.location.reload();
})
buttons.append(cancelBtn)
}

function deleteScoresBtn() {
  let deleteBtn = document.createElement("input");
  deleteBtn.setAttribute("value", "delete scores")
  deleteBtn.setAttribute("type", "button")
  deleteBtn.addEventListener("click", function(event) {
    event.preventDefault
    removeEventListener(QuizScores)
    window.localStorage.removeItem("highscores")
  })
  QuizScores.append(deleteBtn)
  
  

    
    













