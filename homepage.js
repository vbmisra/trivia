var addPlayerEl = document.getElementById('addPlayer')
var playerListEl = document.querySelector('.players')


addPlayerEl.addEventListener('click', addPlayer)


function addPlayer(e){
    e.preventDefault()

    var newPlayer = document.createElement('div')
    var newInput = document.createElement('input')
    newPlayer.textContent = 'hello'
    
    newPlayer.append(newInput)
    playerListEl.append(newPlayer)
    
    //userInput('marshmellow')

    
}

function userInput(x){
    
    var inputEl = document.querySelector('#text-input').value
    alert(inputEl+x)
    console.log('hello')
}