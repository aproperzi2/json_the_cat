const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`Error: These are not the cats you're looking for..`);
    } else {
      const description = data[0].description;
      callback(null, description);
    }
  });
};

module.exports = { fetchBreedDescription };
