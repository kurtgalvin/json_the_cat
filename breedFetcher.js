const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(err, response, body) {
    let data = JSON.parse(body);
    if (data.length) {
      callback(err, data[0].description.trim())
    } else {
      callback(new Error('Breed Not Found'), null)
    }
  });
};

module.exports = { fetchBreedDescription }