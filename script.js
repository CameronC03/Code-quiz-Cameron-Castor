// starting time
let secondsLeft = 80;

// timer
let quizTime = document.getElementById("quiz-time");

// scores
let quizScores = document.getElementById("quiz-scores");

let buttons = document.getElementById("buttons")

let scoresBtn = document.getElementById("scores")

let startButton  = document.getElementById("start-button");
startButton.addEventListener("click", setTime);

var quizQuestions = document.getElementById("quiz-questions");

let results = document.getElementById("results");

var choices = document.getElementById("choices");

let emptyArray = [];

let storedArray = JSON.parse(window.localStorage.getItem("highScore"));

var questionsCount = 0;

let score = 0

function setTime() {
    displayQuestions();
    let timerinterval = setInterval(function() {
    secondsLeft--;
    quizTime.textContent = "";
    quizTime.textContent = "Time: " + secondsLeft;
    if (secondsLeft <= 0 || questionsCount === questions.length) {
    clearInterval(timerinterval);
    getUserScore();
    }
  }, 1000);
}     

function displayQuestions() {
removeEls(startButton);

if (questionsCount < questions.length) {
quizQuestions.innerHTML = questions[questionsCount].title;
choices.textContent = "";

for (let i = 0; i < questions[questionsCount].multipleChoice.length; i++) {
    let el = document.createElement("button");
    el.innerText = questions[questionsCount].multipleChoice[i];
    el.setAttribute("data-id", i);
    el.addEventListener("click", function (event) {
      event.stopPropagation();
      

    if (el.innerText === questions[questionsCount].answer) {
      score += secondsLeft;
    } else {
      score -= 10
      secondsLeft = secondsLeft - 15;
    }

quizQuestions.innerHTML = "";

if (questionsCount === questions.length) {
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
  quizTime.remove();
  choices.textContent= "";

  let initInput = document.createElement("input");
  let afterScoresBtn = document.createElement("input");
  
  results.innerHTML = `your score is ${score} enter name`;
  afterScoresBtn.setAttribute("type", "button");
  afterScoresBtn.setAttribute("value", "Post your score");
  afterScoresBtn.setAttribute("type", "text");
  afterScoresBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let scoresA = defineScoresA(storedArray, emptyArray)
    
    let init = initInput.value;
    let scoresAndUsers = {
      score: score,
      init: init,
  };
 
  scoresA.push(scoresAndUsers);
  saveScore(scoresA);
  displayAllScore();
  clearScores();
  cancelButton();
  scoresBtn.remove();
});

results.append(initInput)
results.append(afterScoresBtn)
}

const saveScore = (array) => { 
  window.localStorage.setItem("highScore", JSON.stringify(array));
}

const defineScoresA = (arr1, arr2) => {
if(arr1 !== null) {
  return arr1
 } else {
return arr2
 }
}

const removeEls = (...els) => {
  for (let el of els) el.remove();
}

function displayAllScore() {
  removeEls(quizTime, results, startButton)
  let scoresA = defineScoresA(storedArray, emptyArray)

  scoresA.forEach(obj => {
    let scoreA = obj.scoreA
    let init = obj.init
    let resultsP = document.createElement("p")
    resultsP.innerText = `${init}: ${scoreA}`;
    quizScores.append(resultsP);
  });
}

function clearScores() {
 scoresBtn.addEventListener("click", function(event) {
  event.preventDefault();
  removeEls(timer, StartButton);
  displayAllScore();
  removeEls(scoresBtn);
  clearScoreBtn();
  cancelButton();
  });
}

function deleteScoresBtn() {
  let deleteBtn = document.createElement("input");
  deleteBtn.setAttribute("type", "button")
  deleteBtn.setAttribute("value", "delete scores")
  deleteBtn.addEventListener("click", function(event){
    event.preventDefault
    removeEls(QuizScores)
    window.localStorage.removeItem("highscores")
  })
  QuizScores.append(deleteBtn)
}
 
function cancelButton() {
let cancelBtn = document.createElement("input");
cancelBtn.setAttribute("type", "button");
cancelBtn.setAttribute("value", "Go Back");
cancelBtn.addEventListener("click", function(event){
  event.preventDefault();
  window.location.reload();
})
buttons.append(cancelBtn)
}
    
    













