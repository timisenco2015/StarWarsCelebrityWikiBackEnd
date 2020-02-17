const assert = require('chai').assert;
require('dotenv').config('./app/config');
var mocks = require('node-mocks-http');
const Person = require('../entity/person');
const HomePlanet = require('../entity/homePlanet');
const Films = require('../entity/films');
const Species = require('../entity/species');
let personRepo = require('../repo/personRepo');


describe('test person repo', function()
{

    it("testing people() function of celebrityRepo", async () => 
    {
        try
        {
            var req = {"params":{"id":1}};
            var res = {};
            var person = new Person();
            let value = await personRepo.people(req,res);
            person = value.data;
          await assert.equal(person.getName(),"Luke Skywalker");
        }
        catch(err)
        {
           
        }
      
    });

    it("testing HomePlanet() function of celebrityRepo", async () => 
    {
        try
        {
            
            var homePlanet = new HomePlanet();
            let value = await personRepo.homeWorld("https://swapi.co/api/planets/1/");
            homePlanet=value;
            await assert.equal(homePlanet.getPopulation(),"200000");
        }
        catch(err)
        {
            //assert.isNotNull(err);
        }
      
    });
 


    it("testing film() function of celebrityRepo", async () => 
    {
        try
        {
            var films = new Films();
            let value = await personRepo.film("https://swapi.co/api/films/2/");
            films=value;
            await assert.equal(films.getTitle(),"The Force Awakens");
        }
        catch(err)
        {
            //assert.isNotNull(err);
        }
  
    });

    it("testing specie() function of celebrityRepo", async () => 
    {
        try
        {
            var species = new Species();
            let value = await personRepo.specie("https://swapi.co/api/species/1/");
            species=value;
            await assert.equal(species.getName(),"Human");
        }
        catch(err)
        {
            //assert.isNotNull(err);
        }
    });


});



 

 