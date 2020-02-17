class HomePlanet
{
  constructor()
  {

  }


  setTitle(title)
  {
      this.title=title;
  }

  getTitle()
  {
      return this.title;
  }


  setTerrain(terrain)
  {
      this.terrain=terrain;
  }

  getTerrain()
  {
      return this.terrain;
  }


  setPopulation(population)
  {
      this.population=population;
  }

  getPopulation()
  {
      return this.population;
  }

}


module.exports  = HomePlanet;