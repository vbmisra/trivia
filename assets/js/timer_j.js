var timerEl = document.getElementById('timer')





var timer = 10

var timeInterval = setInterval(function (){
        timer = timer -1
        timerEl.textContent = timer
        if(timer <= 0){
            clearInterval(timeInterval)
        }
    },1000)


