const {fetchBreedDescription} = require('../breedFetcher');
const { assert } = require('chai');

describe('Breed Information', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      assert.equal(err, null);
      // compare returned description
      assert.equal(desc,expectedDesc);

      done();
    });
  });

  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberiandsdsdadas', (err, desc) => {
      // we expect no error for this scenario
      const expectedDesc = "The requested Cat breed is not found";

      assert.equal(err, null);
      // compare returned description
      assert.equal(desc,expectedDesc);

      done();
    });
  });

  

});