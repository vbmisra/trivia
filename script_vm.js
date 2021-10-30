// Buttons
var wikiBtn = document.getElementById('wiki-button');
var pokeBtn = document.getElementById('pokemon-button');
var musicBtn = document.getElementById('music-button');
var nextBtn = document.querySelector('#nextQuestion');

//timer

var timerEl = document.getElementById('timer')





var timer = 10

var timeInterval = setInterval(function (){
        timer = timer -1
        timerEl.textContent = timer
        if(timer <= 0){
            clearInterval(timeInterval)
        }
    },1000)




// URLs
var wikiURL = "https://en.wikipedia.org/w/api.php?&origin=*&action=parse&format=json&page=Wonders_of_the_World&prop=wikitext&formatversion=2";
var pokemonUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20";
var musicURL = "https://shazam.p.rapidapi.com/auto-complete?term=love&locale=en-US";

// questions
var wikiQuestions = [];
var pokeQuestions = [
    {
        question: "Which pokemon evolves into Raichu?",
        A: pokeAnswers[0],
        B: pokeAnswers[4],
        C: pokeAnswers[6],
        D: pokeAnswers[8],
        Correct: "B"
    }, {
        question: "Which pokemon can use flamethrower?",
        A: pokeAnswers[2],
        B: pokeAnswers[5],
        C: pokeAnswers[15],
        D: pokeAnswers[19],
        Correct: "C"
    }, {
        question: "Which pokemon is famous for singing in the show?",
        A: pokeAnswers[18],
        B: pokeAnswers[7],
        C: pokeAnswers[10],
        D: pokeAnswers[11],
        Correct: "A"
    }, {
        question: "Which pokemon looks like a cobra?"
    }, {
        question: "Which pokemon can fly?"
    }
];
var musicQuestions = [
    {
        question: "Fill in the blank: Drake's newest album is called Certified _____"
    }, {
        question: "Which Taylor Swift song famously references Romeo and Juliet?"
    }, {
        question: "Which of these is a song by Ed Sheeran?"
    }, {
        question: "Chief Keef rose to fame after this popular song:"
    }, {
        question: "This song by Ckay rose to fame on Tik Tok:"
    }
];
var pokeAnswers = [];
var musicAnswers = [];
// var currentQuestion = 0;
// var lastQuestion = questions.length - 1;
// var questionEl = document.querySelector("#question"); // need to change based on Hekmat's title

//answer choice buttons - might need to change depending on what hekmat defined
// var choiceA = document.querySelector('#choiceA');
// var choiceB = document.querySelector('#choiceB');
// var choiceC = document.querySelector('#choiceC');

// choiceA.addEventListener('click', checkAnswer('A'));
// choiceB.addEventListener('click', checkAnswer('B'));
// choiceC.addEventListener('click', checkAnswer('C'));
// nextBtn.addEventListener('click', nextQuestion);

// must add &origin=* to end of URL to avoid CORS block

function getWikiAPI() {
    console.log("successful click");
    fetch (wikiURL)
        .then(function(result){
            console.log(result);
            return result.json();
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function (error) {
            console.error(error);
    });
}

function getMusicAPI() {
    console.log("test click");
    fetch(musicURL, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": "ca8d7029bdmsh4c7f8dda0605b77p16f6fcjsnfbf2331b00a0"
        }
    })
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(data.hints[0].term);
        for(i=0; i<data.hints.length; i++) {
            musicAnswers.push(data.hints[i].term);
        }
        console.log(musicAnswers);
    })
    .catch(err => {
        console.error(err);
    });
}

function getPokeAPI() {
    fetch(pokemonUrl)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function(data){
            console.log(data);
            for(i=0; i<data.results.length; i++) {
                pokeAnswers.push(data.results[i].name);
            }
            console.log(pokeAnswers);
        });
}

wikiBtn.addEventListener('click', getWikiAPI);
pokeBtn.addEventListener('click', getPokeAPI);
musicBtn.addEventListener('click', getMusicAPI);

function displayQuestion() {
  if(currentQuestion <= lastQuestion) {
    var quest = questions[currentQuestion];
    questionEl.textContent = quest.question;
    choiceA.textContent = quest.choiceA;
    choiceB.textContent = quest.choiceB;
    choiceC.textContent = quest.choiceC;
   } else {
             clearInterval(timer); // need to change depending on what Juwon defined
      displayScore();
     }
    }

    function checkAnswer(answer) {
     if (answer == questions[currentQuestion].correct) {
        score++; 
        //display "correct"
        //else {
        //display "wrong"
         //}
     count = 0;
     if (currentQuestion <= lastQuestion) {
         currentQuestion++;
        //displayQuestion(); don't run in case we want to click "next question" to move on
    } else {
        clearInterval(timer); // need to change depending on what Juwon defined
        displayScore();
    }
 }

 function nextQuestion() {
     if (currentQuestion <= lastQuestion) {
        currentQuestion++;
        displayQuestion();
    } else {
       clearInterval(timer);
        displayScore();
    }
 }




    }
