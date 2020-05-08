const request = require("request");
const breed = process.argv[2];

// const fetchBreedDescription = function(breedName, callback) {

// };

const fetchBreedDescription = (breed, callback) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=` + breed,
    (error, response, body) => {
      if (error) {
        callback("Error: verify details", null);
      } else {
        const data = JSON.parse(body);
        if (data.length === 0) {
          callback("Breed not found", null);
        } else {
          callback(null, data[0].description);
        }
      }
    }
  );
};
module.exports = { fetchBreedDescription }