var marvelUrl = "https://pokeapi.co/api/v2/pokmon/?limit=20&offset=20"


fetch(marvelUrl)
    .then(function (response) {
      console.log(response);
        
        return response.json();
    })
    .then(function(data){
      console.log(data)
    });
  