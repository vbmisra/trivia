var fetchBtn = document.getElementById('fetch-button');
var wikiURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Craig%20Noone&format=json&origin=*";
// must add &origin=* to end of URL to avoid CORS block

function getAPI() {
    console.log("successful click");
    fetch (wikiURL)
        .then(function(result){
            console.log(result);
            return result;
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function (error) {
            console.error(error);
    });
}

fetchBtn.addEventListener('click', getAPI)

//document.getElementById('fetch-button').addEventListener('click', getAPI);