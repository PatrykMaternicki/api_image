module.exports = (app) => {
  return {
    load: () => {
      app.set('dictionaryProvider', require('./dictionaryProvider'))
      app.set('pixabayService', require('../services/pixabayService'))
      app.set('giphyService', require('../services/giphyService'))
      app.set('restService', require('../services/restService'))
      app.set('requestValidator', require('../helpers/requestValidator'))
    }
  }
}