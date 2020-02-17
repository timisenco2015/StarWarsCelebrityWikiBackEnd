
const httpRequest = require('../apiRequest/starWarsAPIRequest');
const Person = require('../entity/person');
const Films = require('../entity/films');
const HomePlanent = require('../entity/homePlanet');
const Species = require('../entity/species');


let personRepo =
{
  
    // this function get each star wars celebrity details
    people: async function getStarWarPerson(req, res) 
    {
       
        var person = new Person();
       try
        {
            
            await httpRequest.people(req.params.id).then(async personDetails => 
            {
            
                
                if (personDetails!=null)
                {
                    
                    var allPersonfilms=[];
                    var allPersonspecies=[];

                    //calls all setters for person class
                    person.setName(personDetails.name);
                    person.setHeight(personDetails.height);
                    person.setMass(personDetails.mass);
                    person.setHairColor(personDetails.hair_color);
                    person.setSkinColor(personDetails.skin_color);
                    person.setBirthYear(personDetails.birth_year)
                    person.setGender(personDetails.gender);
                    

                   
                    //get home world details
                    let eachHomePlanet=   await personRepo.homeWorld(personDetails.homeworld);   
                    person.setHomePlanet(eachHomePlanet);


                    //get all films
                    for  (filmUrl of  personDetails.films )
                    {
                        let eachFilm = await personRepo.film(filmUrl)
                        allPersonfilms.push(eachFilm);
                        // expected output: "Success!"
                        
                       
                    }
                    
                   person.setFilms(allPersonfilms);
                    

                    // get all species
                    for (specieUrl of  personDetails.species)
                    {
                        
                    
                        let eachSpecie= await personRepo.specie(specieUrl);
                        allPersonspecies.push(eachSpecie);
                       
                    }
                    person.setSpecies(allPersonspecies);
                    
                   
                }   
                else
                {
                    
                    return { status: 200,statusDesc:"succesful", data:[], message: 'Record fetch return with null' };
                }
               

               
            });
           
        }
        catch(err)
        {
            
            return res.status(500).send({ message: err.message });
        }
        return { status: 200,statusDesc:"succesful", data:person, message: 'Record fetch sucessfully'};
                             
    


    },

    //get celebrity homeworld
    homeWorld: async function(url)
    {
       
       let homeWorld = new HomePlanent();
       
         httpRequest.homeWorld(url,async function(homeWorldDetails) 
       {
          
           if(homeWorldDetails!=null)
           {
            
                homeWorld.setPopulation(homeWorldDetails.data.population);
                homeWorld.setTerrain(homeWorldDetails.data.terrain);
                homeWorld.setTitle(homeWorldDetails.data.name);
              
           }   
           
           
           
       });
       
       return homeWorld;
     
    },

    //get celebrity features star wars films
    film: async function(url)
    {
       let film = new Films();
       
      await httpRequest.film(url,async function(filmDetails) 
       {
          
           if(filmDetails!=null)
           {
               
                film.setTitle(filmDetails.data.title);
                film.setDirector(filmDetails.data.director);
                film.setProducers(filmDetails.data.producer);
                film.setReleaseDate(filmDetails.data.release_date);
             
           }   
           
           
           
       });

       return film;
     
    },

    //get celebrity specie
    specie: async function(url)
    {
       let specie = new Species();
       
       await httpRequest.species(url,async function(speciesDetails) 
       {
         
           if(speciesDetails!=null)
           {
            
                specie.setName(speciesDetails.data.name);
                specie.setAverage(speciesDetails.data.average_height);
                specie.setClassification(speciesDetails.data.classification);
                specie.setLanguage(speciesDetails.data.language); 
             
           }     
        });
                       
        return specie;
     
    }
}


module.exports = personRepo;