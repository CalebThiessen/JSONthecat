const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

    request('https://api.thecatapi.com/v1/breeds/search?q=' + 
   breedName, function(err, res, body) {
  const data = JSON.parse(body);
callback(err, data[0].description)
 
});
  

}

