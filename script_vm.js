// Buttons
var wikiBtn = document.getElementById('wiki-button');
var pokeBtn = document.getElementById('pokemon-button');
var musicBtn = document.getElementById('music-button');
var nextBtn = document.querySelector('#nextQuestion');

// URLs
var wikiURL = "https://en.wikipedia.org/w/api.php?&origin=*&action=parse&format=json&page=Wonders_of_the_World&prop=wikitext&formatversion=2";
var pokemonUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20";
var musicURL = "https://shazam.p.rapidapi.com/auto-complete?term=love&locale=en-US";

var pokeAnswers = [];
var musicAnswers = [];

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

//function getMusicAPI() {
    //console.log("test click");
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
        makeMusicQuestions(musicAnswers);
    })
    // .catch(err => {
    //     console.error(err);
    // });
//}

//function getPokeAPI() {
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
            makePokemonQuestions(pokeAnswers);
        })
        //return pokeAnswers;
//}

function makePokemonQuestions(arrPokemonNames){
    var pokeQuestions = [
        {
            question: "Which pokemon evolves into Raichu?",
            A: arrPokemonNames[0],
            B: arrPokemonNames[4],
            C: arrPokemonNames[6],
            D: arrPokemonNames[8],
            Correct: "B"
        }, {
            question: "Which pokemon can use flamethrower?",
            A: arrPokemonNames[2],
            B: arrPokemonNames[5],
            C: arrPokemonNames[15],
            D: arrPokemonNames[19],
            Correct: "C"
        }, {
            question: "Which pokemon is famous for singing in the show?",
            A: arrPokemonNames[18],
            B: arrPokemonNames[7],
            C: arrPokemonNames[10],
            D: arrPokemonNames[11],
            Correct: "A"
        }, {
            question: "Which pokemon looks like a cobra?",
            A: arrPokemonNames[3],
            B: arrPokemonNames[2],
            C: arrPokemonNames[14],
            D: arrPokemonNames[16],
            Correct: "A"
        }, {
            question: "Which pokemon can fly?",
            A: arrPokemonNames[17],
            B: arrPokemonNames[12],
            C: arrPokemonNames[13],
            D: arrPokemonNames[1],
            Correct: "D"
        }
    ];
    // if(currentQuestion <= lastQuestion) {
    //     questionEl.textContent = pokeQuestions[index].question;
    //     choiceA.textContent = pokeQuestions[index].A;
    //     choiceB.textContent = pokeQuestions[index].B;
    //     choiceC.textContent = pokeQuestions[index].C;
    //     choiceD.textContent = pokeQuestions[index].D;
    // } else {
    //     clearInterval(timer); // need to change depending on what Juwon defined
    //     displayScore();
    // }
    console.log("sjhdkjshkdjh")
    console.log(pokeQuestions)
}

function makeMusicQuestions(arrMusic){
    var musicQuestions = [
        {
            question: "Fill in the blank: Drake's newest album is called Certified _____",
            A: arrMusic[9],
            B: arrMusic[8],
            C: arrMusic[6],
            D: arrMusic[3],
            Correct: "A"
        }, {
            question: "Which Taylor Swift song famously references Romeo and Juliet?",
            A: arrMusic[2],
            B: arrMusic[8],
            C: arrMusic[6],
            D: arrMusic[3],
            Correct: "C"
        }, {
            question: "Which of these is a song by Ed Sheeran?",
            A: arrMusic[7],
            B: arrMusic[5],
            C: arrMusic[0],
            D: arrMusic[3],
            Correct: "B"
        }, {
            question: "Chief Keef rose to fame after this popular song:",
            A: arrMusic[9],
            B: arrMusic[8],
            C: arrMusic[7],
            D: arrMusic[3],
            Correct: "D"
        }, {
            question: "This song by Ckay rose to fame on Tik Tok:",
            A: arrMusic[2],
            B: arrMusic[4],
            C: arrMusic[0],
            D: arrMusic[3],
            Correct: "C"
        }
    ];
    // if(currentQuestion <= lastQuestion) {
    //     questionEl.textContent = musicQuestions[index].question;
    //     choiceA.textContent = musicQuestions[index].A;
    //     choiceB.textContent = musicQuestions[index].B;
    //     choiceC.textContent = musicQuestions[index].C;
    //     choiceD.textContent = musicQuestions[index].D;
    // } else {
    //     clearInterval(timer); // need to change depending on what Juwon defined
    //     displayScore();
    // }
    console.log("sjhdkjshkdjh")
    console.log(musicQuestions)
}
//getWikiAPI();
//getPokeAPI();
//getMusicAPI();
//console.log(getPokeAPI());
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
        question: "Which pokemon looks like a cobra?",
        A: pokeAnswers[3],
        B: pokeAnswers[2],
        C: pokeAnswers[14],
        D: pokeAnswers[16],
        Correct: "A"
    }, {
        question: "Which pokemon can fly?",
        A: pokeAnswers[17],
        B: pokeAnswers[12],
        C: pokeAnswers[13],
        D: pokeAnswers[1],
        Correct: "D"
    }
];

console.log(pokeQuestions);

var musicQuestions = [
    {
        question: "Fill in the blank: Drake's newest album is called Certified _____",
        A: musicAnswers[9],
        B: musicAnswers[8],
        C: musicAnswers[6],
        D: musicAnswers[3],
        Correct: "A"
    }, {
        question: "Which Taylor Swift song famously references Romeo and Juliet?",
        A: musicAnswers[2],
        B: musicAnswers[8],
        C: musicAnswers[6],
        D: musicAnswers[3],
        Correct: "C"
    }, {
        question: "Which of these is a song by Ed Sheeran?",
        A: musicAnswers[7],
        B: musicAnswers[5],
        C: musicAnswers[0],
        D: musicAnswers[3],
        Correct: "B"
    }, {
        question: "Chief Keef rose to fame after this popular song:",
        A: musicAnswers[9],
        B: musicAnswers[8],
        C: musicAnswers[7],
        D: musicAnswers[3],
        Correct: "D"
    }, {
        question: "This song by Ckay rose to fame on Tik Tok:",
        A: musicAnswers[2],
        B: musicAnswers[4],
        C: musicAnswers[0],
        D: musicAnswers[3],
        Correct: "C"
    }
];

var questions = [];
Array.prototype.push.apply(questions, pokeQuestions, musicQuestions);

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


// wikiBtn.addEventListener('click', getWikiAPI);
// pokeBtn.addEventListener('click', generateQuestions);
// musicBtn.addEventListener('click', getMusicAPI);

// function displayQuestion() {
//     if(currentQuestion <= lastQuestion) {
//         var quest = questions[currentQuestion];
//         questionEl.textContent = quest.question;
//         choiceA.textContent = quest.choiceA;
//         choiceB.textContent = quest.choiceB;
//         choiceC.textContent = quest.choiceC;
//     } else {
//         clearInterval(timer); // need to change depending on what Juwon defined
//         displayScore();
//     }
// }

// function checkAnswer(answer) {
//     if (answer == questions[currentQuestion].correct) {
//         score++;
//         // display "correct"
//     } //else {
//     //     display "wrong"
//     // }
//     count = 0;
//     if (currentQuestion <= lastQuestion) {
//         currentQuestion++;
//         //displayQuestion(); don't run in case we want to click "next question" to move on
//     } else {
//         clearInterval(timer); // need to change depending on what Juwon defined
//         displayScore();
//     }
// }

// function nextQuestion() {
//     if (currentQuestion <= lastQuestion) {
//         currentQuestion++;
//         displayQuestion();
//     } else {
//         clearInterval(timer);
//         displayScore();
//     }
// }



