var addPlayerEl = document.getElementById('addPlayer')
var playerBoxEl = document.querySelector('.playerBox')


addPlayerEl.addEventListener('click', addPlayer)


function addPlayer(e){
    e.preventDefault()

    var inputEl = document.querySelector('#text-input').value

    var playerNameList = document.createElement('ul')
    var playerName = document.createElement('li')
    playerNameList.append(playerName)
    playerName.textContent = inputEl
    console.log('hello')
    playerBoxEl.append(playerNameList)
    userInput()
    
    

    
}

function userInput(){
    var inputEl = document.querySelector('#text-input').value
    window.Storage = inputEl;
    console.log()

    alert(inputEl)
    console.log('hello')
}