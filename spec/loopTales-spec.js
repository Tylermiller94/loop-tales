import {Character} from './../js/loopTales.js';


describe("Character", function(){
  var testCharacter;
  beforeEach(function(){
    testCharacter = new Character("Tyler", "Troublemaker", 15);
  });

  it('will create a instance of a character with a name the user desires', function(){
    expect(testCharacter.name).toEqual("Tyler");
  });

  it('will create a instance of a character with a designated class the user desires', function() {
    expect(testCharacter.kidType).toEqual("Troublemaker");
  });

  it('will create a instance of a character with an age', function(){
    expect(testCharacter.age).toEqual(15);
  });

  it('will return a list of kids types', function() {
    expect(testCharacter.kidTypes()).toEqual(["Bookworm", "Computer Geek", "Hick", "Jock", "Popular Kid", "Rocker", "Troublemaker", "Weirdo"]);
  });

  it('will allow user to set initial character attributes', function(){
    testCharacter.setAttributes(4,4,4,3)
    expect(testCharacter.body).toEqual(4);
  });

  it('will set skills and initial item to player character based upon character class', function(){
    testCharacter.setSkillsAndItem();
    expect(testCharacter.skills).toEqual(["force", "sneak", "lead"]);
    expect(testCharacter.items).toEqual(["lighter and cigarettes"]);
  });

});
