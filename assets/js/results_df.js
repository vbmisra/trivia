var player1Score = window.localStorage.getItem('playerOneScore');
var player2Score = window.localStorage.getItem('playerTwoScore');

var player1Pos = 1;
var player2Pos;

var player1Name = window.localStorage.getItem('player1')
var player2Name = window.localStorage.getItem('player2')

var homeBtnEl = document.getElementById('homeBtn')
var playBtnEl = document.getElementById('playAgainBtn')

if(player1Score > player2Score)
{
    player1Pos = 1;
    player2Pos = 2;
}
else if(player1Score == player2Score)
{
    player1Pos = 1;
    player2Pos = 1;
}
else if(player2Score > player1Score)
{
    player2Pos = 1;
    player1Pos = 2;
}

function showPos1(){
    return player1Pos;
}

function showPos2(){
    return player2Pos;
}

function showScore1() {
    return player1Score;
}

function showScore2() {
    return player2Score;
}

function showCorrect1(){
    return player1Score;
}

function showCorrect2(){
    return player2Score;
}
var player1Name = document.getElementById("text-input");

function showName1(){
    return player1Name;
}

function showName2(){
    return player2Name;
}


playBtnEl.addEventListener('click', playBtn)
homeBtnEl.addEventListener('click', homeBtn)

function homeBtn(){
    location.href = "./index.html";
}

function playBtn(){
    location.href = "./questions.html";
}
