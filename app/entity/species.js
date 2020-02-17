class Species
{
  constructor()
  {

  }


  setName(name)
  {
      this.name=name;
  }

  getName()
  {
      return this.name;
  }

  setAverage(average)
  {
      this.average=average;
  }

  getAverage()
  {
      return this.average;
  }

  setClassification(classification)
  {
      this.classification=classification;
  }

  getClassification()
  {
      return this.classification;
  }


  setLanguage(language)
  {
      this.language=language;
  }

  getLanguage()
  {
      return this.language;
  }


}

module.exports  = Species;