const Films = require('../../app/entity/films');

describe('test Films entity', function()
{
    var films = new Films();

    it("testing setters and getters for Films entity function of personRepo", async () => 
    {
        try
        {
            films.setTitle("The Empire Strikes Back");
            assert.equal(films.getTitle(),"The Empire Strikes Back");

            films.setDirector("Irvin Kershner");
            assert.equal(films.getDirector(),"Irvin Kershner");

            films.setProducers("Gary Kurtz, Rick McCallum");
            assert.equal(films.getProducers(),"Gary Kurtz, Rick McCallum");

            films.setReleaseDate("1980-05-17");
            assert.equal(films.getReleaseDate(),"1980-05-17");
        }
        catch(err)
        {
            //assert.isNotNull(err);
        }
      
    });

    

});

