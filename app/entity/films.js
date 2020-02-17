class Films
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


  setDirector(director)
  {
      this.director=director;
  }

  getDirector()
  {
      return this.director;
  }


  setProducers(producers)
  {
      this.producers=producers;
  }

  getProducers()
  {
      return this.producers;
  }


  setReleaseDate(releaseDate)
  {
      this.releaseDate=releaseDate;
  }

  getReleaseDate()
  {
      return this.releaseDate;
  }


}

module.exports  = Films;