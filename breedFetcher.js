const request = require('request');
const args = process.argv.slice(2);
const breed = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  const data = JSON.parse(body);  
  if (data.length === 0) {
    console.log(`Error: These are not the cats you're looking for..`);
  }else {
    const description = data[0]['description'];
    console.log(description);
  }
});