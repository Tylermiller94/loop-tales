import {Character} from './../js/loopTales.js';


describe("Character", function(){
  var testCharacter;
  beforeEach(function(){
    testCharacter = new Character("Tyler", "Troublemaker");
  });

  it('will create a instance of a character with a name the user desires', function(){
    expect(testCharacter.name).toEqual("Tyler");
  });

  it('will create a instance of a character with a designated class the user desires', function() {
    expect(testCharacter.kidType).toEqual("Troublemaker");
  });
});
