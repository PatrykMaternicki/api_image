module.exports = (app) => {
  return {
    load: () => {
      app.set('dictionaryProvider', require('./dictionaryProvider'))
    }
  }
}