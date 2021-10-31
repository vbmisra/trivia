var addPlayerEl = document.getElementById('addPlayer')
var playerBoxEl = document.querySelector('.playerBox')
var playBtnEl = document.getElementById('playBtn')
var newPlayerEl = document.getElementById('newPlayer')
//array
var playerList = [];

addPlayerEl.addEventListener('click', addPlayer)
playBtnEl.addEventListener('click', playBtn)

function playBtn(e){
    location.href = "/Users/juwonoh/trivia/questions.html"
}

function addPlayer(e){
    e.preventDefault()

    var inputEl = document.querySelector('#text-input').value

    var playerNameList = document.createElement('ul')
    var playerName = document.createElement('li')
    playerNameList.append(playerName)
    playerName.textContent = inputEl
    //console.log('hello')
    newPlayerEl.append(playerNameList)
    userInput()
    
    

    
}

function userInput(){
    var inputEl = document.querySelector('#text-input').value
    
    playerList.push(inputEl)
    window.localStorage.player1 = JSON.stringify(playerList[0]);
    window.localStorage.player2 = JSON.stringify(playerList[1]);
    console.log(localStorage)
    console.log(playerList) 
    

    
}