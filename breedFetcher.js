const request = require('request');

const [ breed ] = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(err, response, body) {
  const data = JSON.parse(body);
  if (err) {
    throw err;
  } else if (data.length) {
    console.log(data[0].description);
  } else {
    console.log("Breed not found!");
  }
});