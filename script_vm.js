// var fetchBtn = document.getElementById('fetch-button');
// var wikiURL = "https://en.wikipedia.org/w/api.php?&origin=*&action=parse&format=json&page=Wonders_of_the_World&prop=wikitext&formatversion=2"
// //var wikiURL = "https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=Most%20&limit=5"
// //var wikiURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Craig%20Noone&format=json&origin=*";
// // must add &origin=* to end of URL to avoid CORS block

// function getAPI() {
//     console.log("successful click");
//     fetch (wikiURL)
//         .then(function(result){
//             console.log(result);
//             return result.json();
//         })
//         .then(function(data){
//             console.log(data);
//         })
//         .catch(function (error) {
//             console.error(error);
//     });
// }

// fetchBtn.addEventListener('click', getAPI)

// document.getElementById('fetch-button').addEventListener('click', getAPI);

// var fetchBtn = document.getElementById('fetch-button');

// function fetchAPI() {
//     console.log("test click");
//     fetch("https://shazam.p.rapidapi.com/auto-complete?term=stronger&locale=en-US", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "shazam.p.rapidapi.com",
//             "x-rapidapi-key": "ca8d7029bdmsh4c7f8dda0605b77p16f6fcjsnfbf2331b00a0"
//         }
//     })
//     .then(response => {
//         console.log(response);
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//         console.log(data.hints[0].term);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }

// fetchBtn.addEventListener('click', fetchAPI);

var marvelUrl = "https://pokeapi.co/api/v2/pokmon/?limit=20&offset=20"


fetch(marvelUrl)
    .then(function (response) {
      console.log(response);
        
        return response.json();
    })
    .then(function(data){
      console.log(data)
    });