var timerEl = document.getElementById('timer')





var timer = 600

setInterval(function (){
        timer = timer -1
        timerEl.textContent = timer
        
    },1000)
