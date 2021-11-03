var homeBtnEl = document.getElementById('homeBtn')
var playBtnEl = document.getElementById('playAgainBtn')

playBtnEl.addEventListener('click', playBtn)
homeBtnEl.addEventListener('click', homeBtn)

function homeBtn(){
    location.href = "./index.html";
}

function playBtn(){
    location.href = "./questions.html";
}


// get player name from local storage
var player1Name = window.localStorage.getItem('player1')
var player2Name = window.localStorage.getItem('player2')

var player1NameResultEL = document.querySelector("#player1NameResult")
var player2NameResultEL = document.querySelector("#player2NameResult")
// show player name in result table
player1NameResultEL.textContent = player1Name
player2NameResultEL.textContent = player2Name


// get player score from local storage
var player1Score = window.localStorage.getItem('Player 1 Score');
var player2Score = window.localStorage.getItem('Player 2 Score');

var player1CorrectAnsEl = document.querySelector("#player1CorrectAns")
var player2CorrectAnsEl = document.querySelector("#player2CorrectAns")
// show players score on result table
player1CorrectAnsEl.textContent = player1Score
player2CorrectAnsEl.textContent = player2Score


var player1PointsEl = document.querySelector("#player1Points")
var player2PointsEl = document.querySelector("#player2Points")
// show points on the result table
player1PointsEl.textContent = player1Score*20 + "%"
player2PointsEl.textContent = player2Score*20 + "%"


var player1PositonEl = document.querySelector("#player1Positon")
var player2PositonEl = document.querySelector("#player2Positon")

// show positions on the result table
if(player1Score > player2Score)
{
    player1PositonEl.textContent = "First"
    player2PositonEl.textContent = "Second"
}
if(player1Score == player2Score)
{
    player1PositonEl.textContent = "Tie"
    player2PositonEl.textContent = "Tie"
}
if(player2Score > player1Score)
{
   player2PositonEl.textContent = "First"
   player1PositonEl.textContent = "Second"
}

