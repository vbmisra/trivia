var addPlayerEl = document.getElementById('addPlayer')
var playerBoxEl = document.querySelector('.playerBox')
var playBtnEl = document.getElementById('playBtn')
var newPlayerEl = document.getElementById('newPlayer')


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
    var playerList = [];
    playerList.push(inputEl)
    window.localStorage.playerList = playerList;
    console.log(localStorage)
    console.log(playerList) 

    
   
}