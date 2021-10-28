var timerEl = document.getElementById('timer')

timerEl.append(countDown)


var timer = 60
setInterval(function (){
        timer--
    },1000)