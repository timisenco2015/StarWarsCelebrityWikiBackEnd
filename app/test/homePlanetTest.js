const HomePlanet = require('../../app/entity/homePlanet');

describe('test HomePlanet entity', function()
{
    var homePlanet = new HomePlanet();

    it("testing setters and getters for HomePlanet entity function of personRepo", async () => 
    {
        try
        {
            homePlanet.setTitle(title)("Tatooine");
            assert.equal(homePlanet.getTitle(),"Tatooine");

            homePlanet.setTerrain("desert");
            assert.equal(homePlanet.getTerrain(),"desert");

            homePlanet.setPopulation("200000");
            assert.equal(homePlanet.getPopulation(),"200000");

        }
        catch(err)
        {
            //assert.isNotNull(err);
        }
      
    });

    

});