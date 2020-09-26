const request = require('request');

let breed = process.argv[2];



request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,(error,response,body) => {

  
  if (error) {
    console.log(`Error : ${error}`);
  } else {
    switch (response && response.statusCode) {
    case 200 :
      if (body !== '[]') {
        const breedInformation = JSON.parse(body);
        console.log(breedInformation[0]['description']);
      } else {
        console.log('The requested Cat breed is not found');
      }
      break;

    case 404 : console.log("Resource Not Found");
      break;

    case 500 : console.log("Server had an Error");
      break;
    }
  }
  
  
  
  
});