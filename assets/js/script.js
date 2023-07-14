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
        title: " What is the correct way to declare a variable in JavaScript?",
        choices: ["A. var = myVariable", "B. variable myVariable ", "C. var myVariable", "D. myVariable = var"],
        answer: "C"
    },

    {
        title: "Which of the following is an example of a JavaScript function declaration?",
        choices: ["A.function = myFunction(){}", "B. myFunction = function(){}", "C.function myFunction(){}", "D. myFunction() = function {}"],
        answer: "C"

    },
    {
        title: " What is the purpose of the "===" operator in JavaScript?",
        choices: ["A. It assigns a value to a variable.", "B. It compares two values for equality, without type conversion.", "C. It checks if a value is greater than another value", "D. It concatenates two strings."],
        answer: "B"
    },
    {
        title: "How do you write a comment in JavaScript?",
        choices: ["A. <!-- This is a comment -->", "B. /* This is a comment */", "C. // This is a comment //", "D. ** This is a comment **"],
        answer: "B"
    },
    {
        title: " What does the "push()" method do in JavaScript?",
        choices: ["A. It removes an element from an array.", "B. It adds an element to the beginning of an array.", "C. It adds an element to the end of an array. ", "D. It reverses the order of elements in an array."],
        answer: "C"
    }
]

var users=[]
if (localStorage.getItem("users")){
    users=JSON.parse(localStorage.getItem("users"))
}
console.log(questionArray[questionIndex].title);
var timeLeft = questionArray.length * 15

// function checkAnswer() {
//     // get selected list
//     var selectedItem = document.getElementById(tags)};

//     // check that an answer has been selected
//     if (selectedItem == undefined) {
//         alert("Please selected an answer!")
//     return
//  } else {
//         // get user answer if form of text
//         var userAns = selectedItem.innerHTML;
//     }

//     if (userAns == currentQuestion.answers[currentQuestion.correct]) {
//         console.log("Correct! The answer is: " + userAns);
//         // change color of selected item by changing className
//         selectedItem.className = 'correct';
//         // count the number of correct answers
//         correctAns++;
//         console.log(correctAns);
//     } else {
//         console.log("Wrong! The corrent answer is: " + currentQuestion.answers[currentQuestion.correct]);
//         //change the background of the wrong answer
//         selectedItem.className = 'wrong';
//         //hightlight the right answer if the user got it wrong
//         //change the class name of the correct answer
//         ulTag.getElementsByTagName('li')[currentQuestion.correct].className = 'correct';

//         console.log(currentQuestion.answers[currentQuestion.correct]);
//     }
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
function clearScores(){

}
startBtn.addEventListener("click", startQuiz)

questionSectionEl.addEventListener("click", nextQuestion)

gobackBtnEl.addEventListener("click",introSectionEl)

clearScoresEl.addEventListener("click", clearScores)

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





