const axios = require('axios');
  
let request =
{
  
 
    people: async function(id)
    {
      return await axios.get('https://swapi.co/api/people/'+id).then(function (response) {
        // handle success
       return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     

    },

    //get celebrity homeworld by calling url from swapi.co 
    homeWorld: async function(url,callbacks)
    {
      return await axios.get(url).then(function (response) {
        // handle success
        callbacks(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     

    },

    //get celebrity featured films by calling url fro swapi.co
    film: async function(url,callback)
    {
      return await axios.get(url).then(function (response) {
        // handle success
        callback(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     

    },

    //get celebrity species by calling url fro swapi.co
    species: async function(url,callback)
    {
      return await axios.get(url).then(async function (response) {
        // handle success
        callback(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     

    }
}


module.exports = request;




