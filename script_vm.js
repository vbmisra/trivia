// Defining elements from questions.html
var choiceA = document.querySelector('#ansBtn1');
var choiceB = document.querySelector('#ansBtn2');
var choiceC = document.querySelector('#ansBtn3');
var choiceD = document.querySelector('#ansBtn4');
var questionEl = document.querySelector('#questionTitle');
var nextBtn = document.querySelector('#nextQuestion');
var alertEl = document.querySelector('#alertUser');

// API URLs
var wikiURL = "https://en.wikipedia.org/w/api.php?&origin=*&action=parse&format=json&page=Wonders_of_the_World&prop=wikitext&formatversion=2";
var pokemonUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20";
var musicURL = "https://shazam.p.rapidapi.com/auto-complete?term=love&locale=en-US";

// Emtpy arrays to be populated by 
var pokeAnswers = [];
var musicAnswers = [];

// Variable definitions
var pokeIndex = 0;
var musicIndex = 0;
var currentQuestion = 0;
var playerOneScore = 0;
var playerTwoScore = 0;

nextBtn.addEventListener('click', nextQuestion);

// function to retrieve wikipedia API
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

// retrieves music API, populates question and answer arrays with retreived data
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
        if (currentQuestion < 5) {
        makeMusicQuestions(musicAnswers, musicIndex);
    }
})
    
// retrieves pokemon API, populates question and answer arrays with retreived data
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
        if (currentQuestion >= 5 && currentQuestion < 10) {
        makePokemonQuestions(pokeAnswers, pokeIndex);
        }
})
    
// function to make pokemon questions and answers
function makePokemonQuestions(arrPokemonNames, pokeIndex){
    var pokeQuestions = [
        {
            question: "Which pokemon evolves into Raichu?",
            A: arrPokemonNames[0],
            B: arrPokemonNames[4],
            C: arrPokemonNames[6],
            D: arrPokemonNames[8],
        }, {
            question: "Which pokemon can use flamethrower?",
            A: arrPokemonNames[2],
            B: arrPokemonNames[5],
            C: arrPokemonNames[17],
            D: arrPokemonNames[19],
        }, {
            question: "Which pokemon is famous for singing in the show?",
            A: arrPokemonNames[18],
            B: arrPokemonNames[7],
            C: arrPokemonNames[10],
            D: arrPokemonNames[11],
        }, {
            question: "Which pokemon looks like a cobra?",
            A: arrPokemonNames[3],
            B: arrPokemonNames[2],
            C: arrPokemonNames[14],
            D: arrPokemonNames[16],
        }, {
            question: "Which pokemon can fly?",
            A: arrPokemonNames[17],
            B: arrPokemonNames[12],
            C: arrPokemonNames[13],
            D: arrPokemonNames[1],
        }
    ];
    
    questionEl.textContent = pokeQuestions[pokeIndex].question;
    choiceA.textContent = pokeQuestions[pokeIndex].A;
    choiceB.textContent = pokeQuestions[pokeIndex].B;
    choiceC.textContent = pokeQuestions[pokeIndex].C;
    choiceD.textContent = pokeQuestions[pokeIndex].D;
    console.log("sjhdkjshkdjh")
    console.log(pokeQuestions)
}

// function to make music questions and answers
function makeMusicQuestions(arrMusic, musicIndex){
    var musicQuestions = [
        {
            question: "Fill in the blank: Drake's newest album is called Certified _____",
            A: arrMusic[9],
            B: arrMusic[8],
            C: arrMusic[6],
            D: arrMusic[3],
        }, {
            question: "Which song is by the Jonas Brothers?",
            A: arrMusic[2],
            B: arrMusic[8],
            C: arrMusic[6],
            D: arrMusic[3],
        }, {
            question: "Which of these is a song by Ed Sheeran?",
            A: arrMusic[7],
            B: arrMusic[5],
            C: arrMusic[0],
            D: arrMusic[3],
        }, {
            question: "Chief Keef rose to fame after this popular song:",
            A: arrMusic[9],
            B: arrMusic[8],
            C: arrMusic[7],
            D: arrMusic[3],
        }, {
            question: "This song by Ckay rose to fame on Tik Tok:",
            A: arrMusic[2],
            B: arrMusic[4],
            C: arrMusic[0],
            D: arrMusic[3],
        }
    ];
    
    questionEl.textContent = musicQuestions[musicIndex].question;
    choiceA.textContent = musicQuestions[musicIndex].A;
    choiceB.textContent = musicQuestions[musicIndex].B;
    choiceC.textContent = musicQuestions[musicIndex].C;
    choiceD.textContent = musicQuestions[musicIndex].D;

    console.log("sjhdkjshkdjh")
    console.log(musicQuestions)
}

// moves to next question
function nextQuestion() {
    currentQuestion++;
    if(currentQuestion < 5) {
        musicIndex++;
        makeMusicQuestions(musicAnswers, musicIndex);
    } else if (currentQuestion >= 5 && currentQuestion < 10) {
        makePokemonQuestions(pokeAnswers, pokeIndex);
        pokeIndex++;
    } else {
        window.localStorage.setItem('Player 1 Score', playerOneScore);
        window.localStorage.setItem('Player 2 Score', playerTwoScore);
        location.href="index_vm.html";
    }
}

// checks answer based on user click
function checkAnswer(answer) {
    if (currentQuestion < 5) {
        if (answer == musicAnswerKey[musicIndex].Correct) {
            console.log(choiceA.textContent);
            alertEl.textContent = 'Correct!'
            playerOneScore++;
        } else {
            console.log(choiceA.textContent);
            alertEl.textContent = 'Wrong!'
        }
    } else if (currentQuestion > 4 && currentQuestion < 10) {
        if (answer == pokeAnswerKey[pokeIndex - 1].Correct) {
            alertEl.textContent = 'Correct!'
            playerTwoScore++;
        } else {
            console.log(pokeAnswerKey[pokeIndex - 1].Correct)
            alertEl.textContent = 'Wrong!'
        }
    }
}

//getWikiAPI();

//answer keys for pokemon and music
var pokeAnswerKey = [
    {
        question: "Which pokemon evolves into Raichu?",
        Correct: "B"
    }, {
        question: "Which pokemon can use flamethrower?",
        Correct: "C"
    }, {
        question: "Which pokemon is famous for singing in the show?",
        Correct: "A"
    }, {
        question: "Which pokemon looks like a cobra?",
        Correct: "A"
    }, {
        question: "Which pokemon can fly?",
        Correct: "D"
    }
];


var musicAnswerKey = [
    {
        question: "Fill in the blank: Drake's newest album is called Certified _____",
        Correct: "A"
    }, {
        question: "Which song is by the Jonas Brothers?",
        Correct: "B"
    }, {
        question: "Which of these is a song by Ed Sheeran?",
        Correct: "B"
    }, {
        question: "Chief Keef rose to fame after this popular song:",
        Correct: "D"
    }, {
        question: "This song by Ckay rose to fame on Tik Tok:",
        Correct: "C"
    }
];

