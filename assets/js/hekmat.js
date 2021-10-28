

var addPlayerEl = document.getElementById('addPlayer')
var playerBoxEl = document.querySelector('.playerBox')
var playBtnEl = document.getElementById('playBtn')
var newPlayerEl = document.getElementById('newPlayer')


addPlayerEl.addEventListener('click', addPlayer)
playBtnEl.addEventListener('click', playBtn)

function playBtn(e){
    location.href = "./questions.html"
}

function addPlayer(e){
    e.preventDefault()

    var inputEl = document.querySelector('#text-input').value

    var playerNameList = document.createElement('ul')
    var playerName = document.createElement('li')
    playerNameList.append(playerName)
    playerName.textContent = inputEl
    //console.log('hello')
    // playerBoxEl.append(playerNameList)
    newPlayerEl.append(playerNameList)

    
    userInput()
    
    

    
}

function userInput(){
    var inputEl = document.querySelector('#text-input').value
    var playerList = [];
    playerList += inputEl
    window.localStorage = playerList;
    console.log(playerList) 
 
}