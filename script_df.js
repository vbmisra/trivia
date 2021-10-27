var fetchBtn = document.getElementById('fetchBtn');

function fetchAPI() {
    console.log("test click");
    fetch("https://shazam.p.rapidapi.com/auto-complete?term=kiss%20the&locale=en-US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": "ca8d7029bdmsh4c7f8dda0605b77p16f6fcjsnfbf2331b00a0"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
}

fetchBtn.addEventListener('click', fetchAPI);
