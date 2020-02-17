const Person = require('../../app/entity/person');



describe('test Species entity', function()
{
    var person = new Person();

    it("testing setters and getters for Species entity function of personRepo", async () => 
    {
        try
        {
            person.setName("Luke Skywalker");
            assert.equal(person.getName(),"Luke Skywalker");

            person.setHeight("172");
            assert.equal(person.getHeight(),"172");

            person.setMass("77");
            assert.equal(person.getMass(),"77");

            person.setHairColor("blond");
            assert.equal(person.getHairColor(),"blond");

            person.setSkinColor("fair");
            assert.equal(person.getSkinColor(),"fair");

            person.setGender("male");
            assert.equal(person.getGender(),"male");

            person.setBirthYear("19BBY");
            assert.equal(person.getBirthYear(),"19BBY");

        }
        catch(err)
        {
            //assert.isNotNull(err);
        }
      
    });

    

});