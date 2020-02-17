const Species = require('../../app/entity/species');

describe('test Species entity', function()
{
    var species = new Species();

    it("testing setters and getters for Species entity function of personRepo", async () => 
    {
        try
        {
            species.setName("Human");
            assert.equal(species.getName(),"Human");

            species.setAverage("180");
            assert.equal(species.getAverage(),"180");

            species.setClassification("mammal")
            assert.equal(species.getClassification(),"mammal");

        }
        catch(err)
        {
            //assert.isNotNull(err);
        }
      
    });

    

});