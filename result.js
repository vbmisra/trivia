var firstPlaceEl = document.getElementById('firstPlace')
var secondPlaceEl = document.getElementById('secondPlace')

//2 player max
var player1 = window.localStorage.getItem('player1')
var player2 = window.localStorage.getItem('player2')


console.log(localStorage)
console.log(player1)
console.log(player2)


if(player1){
    firstPlaceEl.textContent = player1
    
}

if(player2){
    secondPlaceEl.textContent = player2
}


