var startBtn = document.getElementById("start-btn")
var introSectionEl = document.getElementById("intro-section")
var gobackBtnEl= document.getElementById("go-back-btn")
var clearScoresEl=document.getElementById("clear-scores")
var questionSectionEl = document.getElementById("question-section")
var scoreEl=document.getElementById("score")
var titleEl = document.getElementById('title')
var saveBtnEl=document.getElementById("save-btn")
var initialsInput=document.getElementById("initials-input")
var highscoreSectionEl=document.getElementById("highscore-section")
var initialSectionEl=document.getElementById("initial-section")
console.log(highscoreSectionEl);
console.log(initialSectionEl);
var timerEl = document.getElementById('timer')
var choicesEl = document.querySelectorAll(".choices")
var questionIndex = 0
var questionArray = [
    {
        title: " What is JavaScript and what are its main uses in web development?",
        choices: ["A", "B", "C", "D"],
        answer: "B"
    },

    {
        title: "How do you declare a variable in JavaScript ",
        choices: ["A", "B", "c", "D"],
        answer: "A"

    },
    {
        title: "q 3",
        choices: ["A", "B", "C", "D"],
        answer: "D"
    },
    {
        title: "q 4",
        choices: ["A", "B", "C", "D"],
        answer: "B"
    },
    {
        title: "q 5",
        choices: ["A", "B", "C", "D"],
        answer: "D"
    }
]

var users=[]
if (localStorage.getItem("users")){
    users=JSON.parse(localStorage.getItem("users"))
}
console.log(questionArray[questionIndex].title);
var timeLeft = questionArray.length * 15

/*
  1. hide intro section
  2. start timer
  3. show questions
  4. data structure to store questions and choices

*/

var setIntervalId = 0;

function startQuiz(event) {
    console.log("Quiz-started");
    //  introSectionEl.classList.add("hide")
    introSectionEl.setAttribute("class", "hide")
    questionSectionEl.removeAttribute("class")
    setIntervalId = setInterval(countDown, 1000)
    showQuestions()
}

function countDown() {
    timerEl.textContent = timeLeft--
    if (timeLeft === 0) {
        clearInterval(setIntervalId)
    }
}

function showQuestions() {
    console.log(questionIndex)
    titleEl.textContent = questionArray[questionIndex].title

    choicesEl[0].textContent = questionArray[questionIndex].choices[0]

    choicesEl[1].textContent = questionArray[questionIndex].choices[1]

    choicesEl[2].textContent = questionArray[questionIndex].choices[2]

    choicesEl[3].textContent = questionArray[questionIndex].choices[3]



}

function nextQuestion(event) {
    var currentElement = event.target
    if (currentElement.matches("button") && questionIndex<questionArray.length-1) {
        questionIndex++
        showQuestions()
    } else{ 
initialSectionEl.classList.remove("hide")
// highscoreSectionEl.classList.remove("hide")
questionSectionEl.classList.add("hide")
clearInterval(setIntervalId)
scoreEl.textContent=timerEl.textContent
}
}
function saveInitial(){
var userObject={ 
  initial:initialsInput.value,
  score:scoreEl.textContent 
}
users.push(userObject)
localStorage.setItem("users",JSON.stringify(users))
initialSectionEl.classList.add("hide")
highscoreSectionEl.classList.remove("hide")
}

startBtn.addEventListener("click", startQuiz)

questionSectionEl.addEventListener("click", nextQuestion)

// gobackBtnEl.addEventListener("click",introSectionEl)

// clearScoresEl.addEventListener("click", clear)

saveBtnEl.addEventListener("click", saveInitial)


// let highScoresList = []

// function saveHighScore() {
//     initials = initialsInput.value;
//     score = timeLeft;
//     let newHighScore = {
//         initials,
//         score
//     }
// }





