// Global dependencies
var chai = require('chai');
var expect = chai.expect;

// Project Code
var dockerNames = require('../index.js');

describe('Docker-Names', function() {
   it('should generate two words seperated by a underscore', function() {
       var name = dockerNames.getRandomName();
       var words = name.split('_');
       expect(words).to.have.lengthOf(2);
       // This asserts that first word came from the "left" array
       expect(dockerNames.left.indexOf(words[0])).to.be.above(-1);
       
       // This asserts that second word came from the "right" array
       expect(dockerNames.right.indexOf(words[1])).to.be.above(-1);
   });
   
   it('should only use words from the "left word" array for the first word', function() {
       var name = dockerNames.getRandomName();
       var words = name.split('_');
       
       // This asserts that first word came from the "left" array
       // The left array is a list of Adjectives or verbs
       expect(dockerNames.left.indexOf(words[0])).to.be.above(-1);
   });
   
   it('should only use words from the "right word" array for the second word', function() {
       var name = dockerNames.getRandomName();
       var words = name.split('_');
       
       // This asserts that second word came from the "right" array
       // The right array is a list of names
       expect(dockerNames.right.indexOf(words[1])).to.be.above(-1);
   });
   
   it('should append a number 1-9 if true is passed to getRandomName', function() {
       // Really no way to test "random" number generation, but this <i>should</i> cover 1-9 effectively...
       for (var i = 0; i < 20000; i ++) {
           var number = dockerNames.getRandomName(true).slice(-1);
           expect(Number(number)).to.be.above(0);
           expect(Number(number)).to.be.below(10);
       }
   });
   
   it('should append a number 1-9 if a number greater than 0 is passed to getRandomName', function() {
       var number = dockerNames.getRandomName(3).slice(-1);
       expect(Number(number)).to.be.above(0);
       expect(Number(number)).to.be.below(10);
   });
   
   it('should not append a number if false is passed in to getRandomname', function() {
       var number = dockerNames.getRandomName(false).slice(-1);
       expect(isNaN(number)).to.be.true;
   });
   
   it('should not append a number if a number <= 0 is passed in to getRandomname', function() {
       var number = dockerNames.getRandomName(0).slice(-1);
       expect(isNaN(number)).to.be.true;
       number = dockerNames.getRandomName(-1).slice(-1);
       expect(isNaN(number)).to.be.true;
   });

   it('should have access to left, right, adjective, surtname properties', function() {
       expect(dockerNames.right).to.be.an('array');
       expect(dockerNames.left).to.be.an('array');
       expect(dockerNames.adjectives).to.be.an('array');
       expect(dockerNames.surnames).to.be.an('array');
    })
});