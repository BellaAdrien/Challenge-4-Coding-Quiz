var startBtn = document.getElementById("start-btn")
var introSectionEl = document.getElementById("intro-section")

var questionSectionEl = document.getElementById("question-section")
var titleEl = document.getElementById('title')
var highscoreSectionEl=document.getElementById("highscore-section")
var initialSectionEl=document.getElementById("initial-section")
console.log(highscoreSectionEl);
console.log(initialSectionEl);
var timerEl = document.getElementById('timer')
var choicesEl = document.querySelectorAll(".choices")
var questionIndex = 0
var questionArray = [
    {
        title: "q 1",
        choices: ["A", "B", "C", "D"],
        answer: "B"
    },

    {
        title: "q 2",
        choices: ["A", "B", "c", "D"],
        answer: "A"

    },
    {
        title: "q 3",
        choices: ["c1", "c2", "c3", "c4"],
        answer: "c4"
    },
    {
        title: "q 4",
        choices: ["c1", "c2", "c3", "c4"],
        answer: "c2"
    },
    {
        title: "q 5",
        choices: ["c1", "c2", "c3", "c4"],
        answer: "c4"
    }
]
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
highscoreSectionEl.classList.remove("hide")
}
}

startBtn.addEventListener("click", startQuiz)

questionSectionEl.addEventListener("click", nextQuestion)













