var player1Score = window.localStorage.getItem('playerOneScore');
var player2Score = window.localStorage.getItem('playerTwoScore');

var player1Pos;
var player2Pos;

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

function showCorrect1(){
    return player1Score;
}
