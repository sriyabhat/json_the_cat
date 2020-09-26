const request = require('request');


const fetchBreedDescription = function(breed,callback) {
  let Error = null;
  let description = null;
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,(error,response,body) => {

  

    if (error) {
      Error = error;
    } else {
      switch (response && response.statusCode) {
      case 200 :
        if (body !== '[]') {
          const breedInformation = JSON.parse(body);
          description = breedInformation[0]['description'];
        } else {
          description = "The requested Cat breed is not found";
        }
        break;

      case 404 : description = "Resource Not Found";
        break;

      case 500 : description = "Server had an Error";
        break;
      }
    }

    callback(Error,description);
  });


};

module.exports = { fetchBreedDescription };
