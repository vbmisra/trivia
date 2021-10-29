// Buttons
var wikiBtn = document.getElementById('wiki-button');
var pokeBtn = document.getElementById('pokemon-button');
var musicBtn = document.getElementById('music-button');

// URLs
var wikiURL = "https://en.wikipedia.org/w/api.php?&origin=*&action=parse&format=json&page=Wonders_of_the_World&prop=wikitext&formatversion=2";
var pokemonUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20";
var musicURL = "https://shazam.p.rapidapi.com/auto-complete?term=kanye&locale=en-US";

// questions
var wikiQuestions = {};
var pokeQuestions = {};
var musicQuestions = {};
var currentQuestion = 0;
var lastQuestion = questions.length - 1;
var questionEl = document.querySelector("#question"); // need to change based on Hekmat's title

//answer choice buttons - might need to change depending on what hekmat defined
var choiceA = document.querySelector('#choiceA');
var choiceB = document.querySelector('#choiceB');
var choiceC = document.querySelector('#choiceC');

choiceA.addEventListener('click', checkAnswer('A'));
choiceB.addEventListener('click', checkAnswer('B'));
choiceC.addEventListener('click', checkAnswer('C'));

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
            console.log(data)
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
    }
    count = 0;
    if (currentQuestion <= lastQuestion) {
        currentQuestion++;
        displayQuestion();
    } else {
        clearInterval(timer); // need to change depending on what Juwon defined
        displayScore();
    }
}


